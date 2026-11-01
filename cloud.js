/* مشاركة الرحلات (Firebase عبر REST): دخول مجهول + رمز الرحلة. ما ينرفع غير مصاريف الرحلة المشتركة */
(function () {
  var M = window.MASA;
  if (!M) return;
  var P = M.AppComponent.prototype;
  var call = M.call, ok = M.ok;
  var PROJECT = 'masarifi-83d78';
  var API_KEY = 'AIzaSyBvMn1IAleJM08LLqhJxSF_2J8Dlb_UVFo';
  var DOCS = 'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents';
  var DOCNAME = 'projects/' + PROJECT + '/databases/(default)/documents';

  function C() { return M.getComp(); }
  function lc(e) { return String(e || '').trim().toLowerCase(); }

  // ---------- طلبات ----------
  function req(method, url, body, token, form) {
    var h = { 'content-type': form ? 'application/x-www-form-urlencoded' : 'application/json' };
    if (token) h.Authorization = 'Bearer ' + token;
    return call('httpRequest', method, url, JSON.stringify(h), body == null ? '' : (typeof body === 'string' ? body : JSON.stringify(body))).then(function (r) {
      if (!r) throw { code: 'no_bridge', text: 'مشاركة الرحلات تشتغل في التطبيق على الجوال' };
      var j = null;
      try { j = r.body ? JSON.parse(r.body) : null; } catch (e) {}
      if (r.status === 0) throw { code: 'net', text: 'ما فيه اتصال بالإنترنت' };
      if (r.status >= 400) throw { code: 'http', status: r.status, data: j, text: authErr(j) || ('صار خطأ من الخادم (' + r.status + ')') };
      return j;
    });
  }
  function authErr(j) {
    var m = j && j.error && (j.error.message || '');
    if (!m) return '';
    if (/EMAIL_EXISTS/.test(m)) return 'هالإيميل مسجل من قبل. اضغط "دخول"';
    if (/EMAIL_NOT_FOUND|INVALID_LOGIN_CREDENTIALS|INVALID_PASSWORD/.test(m)) return 'الإيميل أو كلمة السر غلط';
    if (/WEAK_PASSWORD/.test(m)) return 'كلمة السر لازم ٦ أحرف أو أكثر';
    if (/INVALID_EMAIL/.test(m)) return 'الإيميل مو صحيح';
    if (/TOO_MANY_ATTEMPTS/.test(m)) return 'محاولات كثيرة، جرّب بعد شوي';
    if (/USER_DISABLED/.test(m)) return 'هالحساب موقوف';
    if (/OPERATION_NOT_ALLOWED|CONFIGURATION_NOT_FOUND|ADMIN_ONLY_OPERATION/.test(m)) return 'لازم يتفعّل الدخول المجهول في Firebase (Authentication ← Sign-in method ← Anonymous)';
    if (/PERMISSION_DENIED|Missing or insufficient permissions/i.test(m)) return 'ما عندك صلاحية. تأكد من قواعد Firestore';
    if (/NOT_FOUND|database .* does not exist/i.test(m)) return 'قاعدة البيانات مو موجودة. سوّها من Firestore';
    return '';
  }

  // ---------- تحويل قيم Firestore ----------
  function toV(v) {
    if (v === null || v === undefined) return { nullValue: null };
    if (typeof v === 'boolean') return { booleanValue: v };
    if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
    if (typeof v === 'string') return { stringValue: v };
    if (Array.isArray(v)) return { arrayValue: { values: v.map(toV) } };
    var f = {};
    Object.keys(v).forEach(function (k) { if (v[k] !== undefined) f[k] = toV(v[k]); });
    return { mapValue: { fields: f } };
  }
  function fromV(v) {
    if (!v) return null;
    if ('stringValue' in v) return v.stringValue;
    if ('integerValue' in v) return Number(v.integerValue);
    if ('doubleValue' in v) return v.doubleValue;
    if ('booleanValue' in v) return v.booleanValue;
    if ('nullValue' in v) return null;
    if ('timestampValue' in v) return v.timestampValue;
    if ('arrayValue' in v) return (v.arrayValue.values || []).map(fromV);
    if ('mapValue' in v) return fromFields(v.mapValue.fields || {});
    return null;
  }
  function fields(o) { return toV(o).mapValue.fields; }
  function fromFields(f) { var o = {}; Object.keys(f || {}).forEach(function (k) { o[k] = fromV(f[k]); }); return o; }
  function docOf(d) { var o = fromFields(d.fields); o._id = d.name.split('/').pop(); return o; }

  // ---------- الجلسة (دخول مجهول، بدون إيميل ولا كلمة سر) ----------
  function session() { var c = C(); return c && c.state.anon && c.state.anon.idToken ? c.state.anon : null; }
  var signing = null;
  function token() {
    var s = session();
    if (!s) {
      if (!signing) signing = req('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, { returnSecureToken: true }).then(function (j) {
        var ns = { uid: j.localId, idToken: j.idToken, refreshToken: j.refreshToken, exp: Date.now() + Number(j.expiresIn || 3600) * 1000 };
        C().setState({ anon: ns });
        signing = null;
        return ns.idToken;
      }, function (e) { signing = null; throw e; });
      return signing;
    }
    if (s.exp && s.exp - Date.now() > 60000) return Promise.resolve(s.idToken);
    var body = 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(s.refreshToken);
    return req('POST', 'https://securetoken.googleapis.com/v1/token?key=' + API_KEY, body, null, true).then(function (j) {
      var ns = Object.assign({}, s, { idToken: j.id_token, refreshToken: j.refresh_token, exp: Date.now() + Number(j.expires_in || 3600) * 1000 });
      C().setState({ anon: ns });
      return ns.idToken;
    });
  }
  function uid() { var s = session(); return s ? s.uid : ''; }
  function fsGet(path) { return token().then(function (t) { return req('GET', DOCS + '/' + path, null, t); }); }
  function fsCommit(writes) { return token().then(function (t) { return req('POST', DOCS + ':commit', { writes: writes }, t); }); }
  function upd(path, obj) { return { update: { name: DOCNAME + '/' + path, fields: fields(obj) } }; }
  function del(path) { return { delete: DOCNAME + '/' + path }; }
  function myName(st) { return (st.profile && !st.profile.guest && st.profile.name) || 'مشارك'; }

  // ---------- مشاركة رحلتي ----------
  P.openShareTrip = function () {
    var self = this, st = this.state;
    if (!st.trip) return;
    var code = st.trip.cloudKey || st.trip.shareCode || makeTripCode();
    var trip = Object.assign({}, st.trip, { cloudKey: code, shareCode: code });
    this.setState({ trip: trip, modal: { type: 'shareTrip' } });
    this.pushTrip(trip).catch(function (e) {
      self.setState({ trip: Object.assign({}, self.state.trip, { cloudKey: null }), modal: null });
      self.say(e.text || 'ما قدرت أجهز المشاركة');
    });
  };
  P.shareTripCode = function () {
    var txt = this.tripShareText();
    if (ok('shareText')) A().shareText(txt); else this.copyTripCode();
  };
  function A() { return M.A; }
  P.stopShareTrip = function () {
    var self = this, st = this.state, key = st.trip && st.trip.cloudKey;
    if (!key) return;
    this.setState({ trip: Object.assign({}, st.trip, { cloudKey: null, shareCode: null }), modal: null });
    fsGet('trips/' + key + '/items?pageSize=300').then(function (j) {
      var docs = (j && j.documents) || [];
      return fsCommit(docs.map(function (d) { return { delete: d.name }; }).concat([del('trips/' + key)]));
    }).then(function () { self.say('وقفت مشاركة الرحلة'); }).catch(function (e) { self.say(e.text || 'ما قدرت أوقف المشاركة'); });
  };
  P.pushTrip = function (trip) {
    var st = this.state;
    if (!trip || !trip.cloudKey) return Promise.resolve();
    var key = trip.cloudKey, self = this;
    return token().then(function () {
      return fsCommit([upd('trips/' + key, { ownerUid: uid(), ownerName: myName(st), dest: trip.dest, cur: trip.cur || '', from: trip.from || '', to: trip.to || '', active: !!trip.active, updatedAt: Date.now() })]);
    }).then(function () { return self.syncTripItems(key, trip.id); });
  };
  // يرفع مصاريفي في الرحلة ويجيب مصاريف الكل
  P.syncTripItems = function (key, localTripId) {
    var self = this;
    return token().then(function () {
      var st = self.state, me = uid();
      var mine = localTripId ? st.txns.filter(function (t) { return t.trip === localTripId; }) : [];
      var name = myName(st);
      var writes = mine.map(function (t) { return upd('trips/' + key + '/items/' + me + '_' + t.id, { uid: me, by: name, amount: t.amount, catId: t.catId || 'other', merchant: t.merchant || '', ts: t.ts || Date.now(), dateShort: t.dateShort || '' }); });
      var p0 = writes.length ? fsCommit(writes) : Promise.resolve();
      return p0.then(function () { return fsGet('trips/' + key + '/items?pageSize=300'); }).then(function (j) {
        var items = ((j && j.documents) || []).map(docOf);
        if (localTripId) {
          var keep = {};
          mine.forEach(function (t) { keep[me + '_' + t.id] = 1; });
          var stale = items.filter(function (it) { return it.uid === me && !keep[it._id] && !/_m\d+$/.test(it._id); });
          if (stale.length) { fsCommit(stale.map(function (it) { return del('trips/' + key + '/items/' + it._id); })).catch(function () {}); items = items.filter(function (it) { return stale.indexOf(it) === -1; }); }
        }
        var cache = Object.assign({}, self.state.cTripItems || {});
        cache[key] = items;
        self.setState({ cTripItems: cache });
        return items;
      });
    });
  };

  // ---------- الانضمام برمز ----------
  P.joinTrip = function () {
    var self = this, st = this.state;
    var code = String(st.joinCode || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code.length < 6) { this.say('اكتب الرمز كامل'); return; }
    if (st.trip && st.trip.cloudKey === code) { this.say('هذي رحلتك أنت'); return; }
    if ((st.cTrips || []).some(function (t) { return t.key === code; })) { this.setState({ joinCode: '' }); this.openCTrip(code, false); return; }
    this.say('أدور على الرحلة…');
    fsGet('trips/' + code).then(function (d) {
      var t = docOf(d);
      if (t.ownerUid && t.ownerUid === uid()) { self.say('هذي رحلتك أنت'); return; }
      var item = { key: code, dest: t.dest || 'رحلة', cur: t.cur || '', from: t.from || '', to: t.to || '', ownerName: t.ownerName || 'مشارك', active: !!t.active };
      self.setState({ cTrips: [item].concat((self.state.cTrips || []).filter(function (x) { return x.key !== code; })), joinCode: '' });
      self.say('انضميت لرحلة ' + item.dest + ' مع ' + item.ownerName);
      self.openCTrip(code, false);
    }).catch(function (e) {
      if (e && e.status === 404) self.say('ما لقيت رحلة بهالرمز. تأكد منه');
      else if (e && e.status === 403) self.say('ما لقيت رحلة بهالرمز، أو صاحبها وقف المشاركة');
      else self.say((e && e.text) || 'ما قدرت أنضم');
    });
  };
  P.leaveCTrip = function (key) {
    this.setState({ cTrips: (this.state.cTrips || []).filter(function (x) { return x.key !== key; }), ctrip: null });
    this.say('طلعت من الرحلة');
  };
  P.refreshJoined = function () {
    var self = this, list = this.state.cTrips || [];
    list.forEach(function (t) {
      fsGet('trips/' + t.key).then(function (d) {
        var x = docOf(d);
        self.setState({ cTrips: (self.state.cTrips || []).map(function (y) { return y.key === t.key ? Object.assign({}, y, { dest: x.dest || y.dest, ownerName: x.ownerName || y.ownerName, active: !!x.active, gone: false }) : y; }) });
      }).catch(function (e) {
        if (e && (e.status === 404 || e.status === 403)) self.setState({ cTrips: (self.state.cTrips || []).map(function (y) { return y.key === t.key ? Object.assign({}, y, { gone: true }) : y; }) });
      });
    });
  };
  P.openCTrip = function (key, isMine) {
    var self = this;
    this.setState({ ctrip: { key: key, mine: !!isMine }, ctAmt: '', ctName: '', ctCat: 'food' });
    var st = this.state;
    var localId = isMine ? (st.trip && st.trip.cloudKey === key ? st.trip.id : ((st.trips || []).find(function (t) { return t.cloudKey === key; }) || {}).id) : null;
    this.syncTripItems(key, localId).catch(function (e) { self.say(e.text || 'ما قدرت أجيب مصاريف الرحلة'); });
  };
  P.addCTripItem = function () {
    var self = this, st = this.state, ct = st.ctrip;
    if (!ct) return;
    var a = parseFloat(st.ctAmt);
    if (!(a > 0)) { this.say('اكتب المبلغ'); return; }
    token().then(function () {
      var me = uid();
      var id = me + '_m' + Date.now();
      var item = { uid: me, by: myName(self.state), amount: Math.round(a * 1000) / 1000, catId: st.ctCat || 'other', merchant: (st.ctName || '').trim() || self.catAr(st.ctCat || 'other'), ts: Date.now(), dateShort: todayLabels().dateShort };
      return fsCommit([upd('trips/' + ct.key + '/items/' + id, item)]);
    }).then(function () {
      self.setState({ ctAmt: '', ctName: '' });
      self.say('انضافت للرحلة');
      return self.syncTripItems(ct.key, null);
    }).catch(function (e) { self.say(e.text || 'ما قدرت أضيفها'); });
  };
  P.deleteCTripItem = function (itemId) {
    var self = this, ct = this.state.ctrip;
    if (!ct) return;
    fsCommit([del('trips/' + ct.key + '/items/' + itemId)]).then(function () { return self.syncTripItems(ct.key, null); }).catch(function (e) { self.say(e.text || 'ما قدرت أحذفها'); });
  };

  // ---------- رسائل البنك في الآيفون (اختصار يرسلها لصندوق خاص) ----------
  var IOS = !!window.__IOS;
  function rnd(n) { var a = 'abcdefghjkmnpqrstuvwxyz23456789', r = new Uint8Array(n), o = ''; try { crypto.getRandomValues(r); } catch (e) { for (var i = 0; i < n; i++) r[i] = Math.floor(Math.random() * 256); } for (var j = 0; j < n; j++) o += a[r[j] % a.length]; return o; }
  // صندوق الرسائل في Realtime Database: الاختصار يرسل حقل واحد بس {"t": نص الرسالة}
  var RTDB = 'https://masarifi-83d78-default-rtdb.firebaseio.com';
  function inboxUrl(tok) { return RTDB + '/inbox/' + tok + '.json'; }
  function rtErr(r, def) {
    var b = (r && r.body) || '';
    if (r && r.status === 0) return 'ما فيه اتصال بالإنترنت';
    if (/Permission denied/i.test(b) || (r && r.status === 401)) return 'ما عندي صلاحية. تأكد إنك نشرت قواعد Realtime Database';
    if ((r && r.status === 404) || /ensure that you have the URL|does not exist/i.test(b)) return 'قاعدة Realtime Database مو موجودة. سوّها في Firebase واختر موقعها United States';
    return def + (r && r.status ? ' (' + r.status + ')' : '');
  }
  function rtReq(method, path, body, tok) {
    return call('httpRequest', method, RTDB + path + (tok ? '?auth=' + encodeURIComponent(tok) : ''), JSON.stringify({ 'content-type': 'application/json' }), body == null ? '' : JSON.stringify(body)).then(function (r) {
      if (!r) throw { text: 'هذي تشتغل في التطبيق' };
      if (r.status !== 200) throw { text: rtErr(r, 'صار خطأ') , status: r.status };
      try { return r.body ? JSON.parse(r.body) : null; } catch (e) { return null; }
    });
  }
  P.iosSetup = function () {
    var self = this, st = this.state;
    var tok = (st.iosBox && st.iosBox.token) || rnd(24);
    this.setState({ iosBusy: true });
    token().then(function (t) {
      return rtReq('PUT', '/owners/' + tok + '.json', uid(), t);
    }).then(function () {
      self.setState({ iosBox: { token: tok, ready: true, uid: uid() }, iosBusy: false });
      self.say('تجهز الرابط. جرّب رسالة، وبعدها انسخ الرابط للاختصار');
    }).catch(function (e) { self.setState({ iosBusy: false }); self.say((e && e.text) || 'ما قدرت أجهز الرابط، تأكد من الإنترنت'); });
  };
  P.iosCopy = function () {
    var ib = this.state.iosBox;
    if (!ib || !ib.ready) return;
    var u = inboxUrl(ib.token), self = this;
    try { navigator.clipboard.writeText(u).then(function () { self.say('انسخ الرابط'); }, function () { self.say('ما قدرت أنسخ، اضغط على الرابط مطوّل وانسخه'); }); } catch (e) { this.say('اضغط على الرابط مطوّل وانسخه'); }
  };
  // تجربة: يرسل رسالة بنك تجريبية بنفس طريقة الاختصار بالضبط
  P.iosTest = function () {
    var ib = this.state.iosBox, self = this;
    if (!ib || !ib.ready) return;
    call('httpRequest', 'POST', inboxUrl(ib.token), JSON.stringify({ 'content-type': 'application/json' }), JSON.stringify({ t: 'رسالة تجريبية من مصاريفي: تم خصم 1.500 OMR من بطاقتك XXXX0000 لدى CAFE TEST' })).then(function (r) {
      if (r && r.status === 200) { self.say('انرسلت رسالة تجريبية، بتطلع في الرئيسية'); setTimeout(function () { self.iosPull(); }, 800); }
      else self.say(rtErr(r, 'ما وصلت الرسالة'));
    });
  };
  P.iosPull = function () {
    var self = this, ib = this.state.iosBox;
    if (!IOS || !ib || !ib.ready || this.iosPulling) return Promise.resolve();
    if (this.state.screen === 'onboard' || this.state.locked) return Promise.resolve();
    this.iosPulling = true;
    var tk;
    return token().then(function (t) { tk = t; return rtReq('GET', '/inbox/' + ib.token + '.json', null, t); }).then(function (o) {
      var keys = o ? Object.keys(o).sort() : [];
      if (!keys.length) return;
      keys.forEach(function (k) { var m = o[k]; var txt = m && (typeof m === 'string' ? m : m.t); if (txt) window.__iosQueue.push({ body: String(txt), sender: 'ios' }); });
      self.drainSms();
      var del = {};
      keys.forEach(function (k) { del[k] = null; });
      return rtReq('PATCH', '/inbox/' + ib.token + '.json', del, tk);
    }).catch(function () {}).then(function () { self.iosPulling = false; });
  };

  // ---------- مزامنة دورية ----------
  P.cloudSync = function (force) {
    var st = this.state;
    if (!session()) return;
    if (!force && this.lastSync && Date.now() - this.lastSync < 60000) return;
    this.lastSync = Date.now();
    if (st.trip && st.trip.cloudKey) this.pushTrip(st.trip).catch(function () {});
    if ((st.cTrips || []).length) this.refreshJoined();
  };

  // تسجيل الخروج وحذف البيانات يمسحون الرحلات المشتركة بعد
  var origSignOut = P.signOut;
  P.signOut = function () { var keep = IOS ? { anon: this.state.anon, iosBox: this.state.iosBox } : {}; this.setState({ anon: null, cTrips: [], cTripItems: {}, ctrip: null, joinCode: '' }); origSignOut.call(this); if (IOS) this.setState(keep); };
  var origDel = P.deleteAll;
  P.deleteAll = function () { var keep = IOS ? { anon: this.state.anon, iosBox: this.state.iosBox } : null; if (this.state.delText.trim() === this.tt().deleteWord) this.setState({ anon: null, cTrips: [], cTripItems: {}, ctrip: null, joinCode: '' }); origDel.call(this); if (keep) this.setState(keep); };

  // ---------- ربط بدورة حياة التطبيق ----------
  var origMount = P.componentDidMount;
  P.componentDidMount = function () {
    origMount.call(this);
    var self = this, st = this.state, okKey = function (k) { return /^[A-Z0-9]{8}$/.test(k || ''); };
    // تنظيف مشاركات النسخة القديمة (كانت بالإيميل)
    var fix = {};
    if (st.trip && st.trip.cloudKey && !okKey(st.trip.cloudKey)) fix.trip = Object.assign({}, st.trip, { cloudKey: null, members: [] });
    if ((st.cTrips || []).some(function (t) { return !okKey(t.key); })) fix.cTrips = st.cTrips.filter(function (t) { return okKey(t.key); });
    if (st.shares && st.shares.length) fix.shares = [];
    if (Object.keys(fix).length) this.setState(fix);
    setTimeout(function () { self.cloudSync(true); }, 1500);
    if (IOS) {
      setTimeout(function () { self.iosPull(); }, 900);
      setInterval(function () { if (document.visibilityState === 'visible') self.iosPull(); }, 15000);
    }
  };
  var origUpdate = P.componentDidUpdate;
  P.componentDidUpdate = function (pp, ps) {
    origUpdate.call(this, pp, ps);
    if (!session()) return;
    var tr = this.state.trip;
    if (tr && tr.cloudKey && (ps.txns !== this.state.txns || ps.trip !== tr)) {
      var self = this;
      clearTimeout(this.syncT);
      this.syncT = setTimeout(function () { self.lastSync = 0; self.cloudSync(); }, 6000);
    }
  };
  var prevResume = window.__onResume;
  window.__onResume = function () { if (prevResume) prevResume(); var c = C(); if (c) { c.lastSync = 0; c.cloudSync(); if (IOS) c.iosPull(); } };

  // ---------- قيم العرض ----------
  var origRV = P.renderVals;
  P.renderVals = function () {
    var v = origRV.call(this);
    var self = this, st = this.state, s = session();
    var chip = function (on) { return { cbg: on ? 'var(--soft)' : 'var(--surface)', cfg: on ? 'var(--accentText)' : 'var(--ink2)', cbd: on ? 'var(--accent)' : 'var(--line)' }; };
    var trips = st.cTrips || [];
    v.td = Object.assign({}, v.td || {}, { hasMembers: false });
    var ib = st.iosBox;
    v.ios = {
      ready: !!(ib && ib.ready), notReady: !(ib && ib.ready), busy: !!st.iosBusy,
      url: ib && ib.ready ? inboxUrl(ib.token) : '',
      setup: function () { self.iosSetup(); }, copy: function () { self.iosCopy(); }, test: function () { self.iosTest(); },
      setupLabel: st.iosBusy ? 'أجهز…' : 'جهّز رابط الاختصار'
    };
    v.cl = {
      tripShared: !!(st.trip && st.trip.cloudKey), openMyTrip: function () { if (st.trip && st.trip.cloudKey) self.openCTrip(st.trip.cloudKey, true); },
      hasJoined: trips.length > 0,
      joined: trips.map(function (t) { var items = (st.cTripItems || {})[t.key] || []; var tot = items.reduce(function (a, i) { return a + (Number(i.amount) || 0); }, 0); return { dest: t.dest, sub: t.gone ? 'صاحب الرحلة وقف المشاركة' : 'من ' + t.ownerName + (items.length ? ' · ' + fmt(tot) + ' ⃄' : ''), open: function () { if (t.gone) self.leaveCTrip(t.key); else self.openCTrip(t.key, false); } }; })
    };
    // نافذة الرحلة المشتركة
    var ct = st.ctrip;
    if (ct) {
      var meta = (ct.mine && st.trip && st.trip.cloudKey === ct.key) ? { dest: st.trip.dest, ownerName: myName(st) } : (trips.find(function (t) { return t.key === ct.key; }) || { dest: '', ownerName: '' });
      var items = ((st.cTripItems || {})[ct.key] || []).slice().sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
      var tot = items.reduce(function (a, i) { return a + (Number(i.amount) || 0); }, 0);
      var byP = {};
      items.forEach(function (i) { var k = i.by || '—'; byP[k] = (byP[k] || 0) + (Number(i.amount) || 0); });
      var catMap = {};
      CATS.forEach(function (c) { catMap[c.id] = c; });
      v.ct = {
        open: true, dest: meta.dest, owner: ct.mine ? 'رحلتك · الرمز ' + ct.key : 'رحلة ' + meta.ownerName + ' · الرمز ' + ct.key,
        total: fmt(tot), count: items.length,
        people: Object.keys(byP).sort(function (a, b) { return byP[b] - byP[a]; }).map(function (k) { return { name: k, amt: fmt(byP[k]), pct: tot > 0 ? Math.round(byP[k] / tot * 100) : 0, w: tot > 0 ? Math.max(3, byP[k] / tot * 100).toFixed(1) : '0' }; }),
        items: items.slice(0, 120).map(function (i) { var c = catMap[i.catId] || catMap.other || { ar: '', color: '#888', bg: '#eee', ic: 'dots' }; var mineI = s && i.uid === s.uid && /_m\d+$/.test(i._id); return { merchant: i.merchant, by: i.by + (i.dateShort ? ' · ' + i.dateShort : ''), amt: fmt(Number(i.amount) || 0), color: c.color, bg: c.bg, path: ICONS[c.ic] || ICONS.dots, canDel: !!mineI, del: function () { self.deleteCTripItem(i._id); } }; }),
        empty: items.length === 0,
        amt: st.ctAmt || '', name: st.ctName || '',
        onAmt: function (e) { self.setState({ ctAmt: e.target.value.replace(/[^0-9.]/g, '') }); },
        onName: function (e) { self.setState({ ctName: e.target.value }); },
        cats: CATS.slice(0, 8).map(function (c) { return Object.assign(chip((st.ctCat || 'food') === c.id), { label: c.ar, pick: function () { self.setState({ ctCat: c.id }); } }); }),
        add: function () { self.addCTripItem(); },
        refresh: function () { self.openCTrip(ct.key, ct.mine); },
        close: function () { self.setState({ ctrip: null }); }, leave: function () { self.leaveCTrip(ct.key); }, canLeave: !ct.mine,
        hint: ct.mine ? 'مصاريفك في الرحلة تنرفع تلقائياً. اللي تضيفه هنا يبين للكل.' : 'اللي تضيفه هنا يبين لكل المشاركين في الرحلة.'
      };
    } else v.ct = { open: false, people: [], items: [], cats: [] };

    return v;
  };
})();
