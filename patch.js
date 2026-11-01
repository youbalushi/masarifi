/* طبقة التطبيق على أندرويد: حفظ البيانات، الجسر مع النظام، Gemini API */
(function () {
  var A = window.Android || null;
  var SAVE_KEY = 'masarifi_data_v1';
  var EXTRA_KEYS = ['tourDone', 'hideAmt', 'obDone', 'aiKey', 'aiModel', 'notifAsked', 'fxRates', 'fxDate', 'anon', 'cTrips', 'iosInbox'];
  var P = Component.prototype;
  var comp = null;

  // ---------- الجسر ----------
  var cbs = {}, cbn = 0;
  window.__cb = function (id, json) {
    var f = cbs[id]; delete cbs[id];
    if (!f) return;
    var v = json;
    try { v = JSON.parse(json); } catch (e) {}
    f(v);
  };
  function call(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (res) {
      if (!A || typeof A[method] !== 'function') { res(null); return; }
      var id = 'c' + (++cbn);
      cbs[id] = res;
      try {
        var n = args.length;
        if (n === 0) A[method](id);
        else if (n === 1) A[method](args[0], id);
        else if (n === 2) A[method](args[0], args[1], id);
        else if (n === 3) A[method](args[0], args[1], args[2], id);
        else A[method](args[0], args[1], args[2], args[3], id);
      } catch (e) { delete cbs[id]; res(null); }
    });
  }
  function ok(method) { return !!(A && typeof A[method] === 'function'); }

  // ---------- نصوص خاصة بالتطبيق ----------
  var tAr = T.ar, tEn = T.en;
  tAr.tryDemo = 'الصق رسالة بنك';
  tEn.tryDemo = 'Paste a bank SMS';
  tAr.signUp = 'أضف اسمك'; tAr.signUpT = 'ملفك'; tAr.signUpB = 'اسمك يطلع في التطبيق. بياناتك كلها محفوظة على جوالك بس.';
  tAr.profileB = 'اسمك وإيميلك محفوظين على جوالك بس، وما ينرسلون لأي جهة.';
  tEn.signUp = 'Add your name'; tEn.signUpT = 'Your profile'; tEn.signUpB = 'Your name shows in the app. All your data stays on this phone.';
  tEn.profileB = 'Your name and email stay on this phone only.';
  SAMPLES.length = 0;
  var LITE = false, IOS = false;
  try { var VAR = A && typeof A.variant === 'function' ? A.variant() : ''; LITE = VAR === 'lite' || VAR === 'ios'; IOS = VAR === 'ios'; } catch (e) {}
  window.__IOS = IOS;
  var SHARE_HOW = IOS ? 'في الآيفون، رسائل البنك توصلني عن طريق اختصار تضبطه مرة وحدة من الإعدادات ← رسائل البنك في الآيفون.' : 'لما توصلك رسالة بنك: اضغط عليها مطوّل ← مشاركة ← مصاريفي، وأنا أقرأها وأطلب موافقتك.';
  if (IOS) {
    tAr.permSms = 'رسائل البنك';
    tAr.permSmsWhy = 'الآيفون ما يسمح للتطبيقات تقرأ الرسائل. بدالها تضبط اختصار يرسل لي رسائل البنك أول ما توصل، وأطلب موافقتك عليها.';
    tAr.permNotif = 'الإشعارات';
    tAr.permNotifWhy = 'لما توصل رسالة بنك، الاختصار يطلع لك إشعار. وتنبيهات الميزانية تطلع لك داخل التطبيق.';
  } else if (LITE) {
    tAr.permSms = 'رسائل البنك بالمشاركة';
    tAr.permSmsWhy = 'هالنسخة ما تقرأ رسائلك بنفسها. ' + SHARE_HOW;
  }

  // ---------- Google Gemini ----------
  // نجرب الأسماء بالترتيب، لأن جوجل تغيّر أسماء النماذج مع الوقت
  var MODEL_SETS = {
    flash: ['gemini-flash-latest', 'gemini-3-flash-preview', 'gemini-3.1-flash-lite', 'gemini-flash-lite-latest'],
    lite: ['gemini-flash-lite-latest', 'gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3-flash-preview']
  };
  var workingModel = {};
  var BUILTIN = false;
  try { BUILTIN = !!(A && typeof A.hasBuiltinKey === 'function' && A.hasBuiltinKey()); } catch (e) {}
  function curKey() { if (comp && comp.state.aiKey) return String(comp.state.aiKey).trim(); return BUILTIN ? '__builtin__' : ''; }
  function modelSet(which) { var w = which || (comp && comp.state.aiModel) || 'flash'; return MODEL_SETS[w] || MODEL_SETS.flash; }
  function errText(status, body) {
    var m = '', st = '';
    try { var j = JSON.parse(body); m = j.error.message || ''; st = j.error.status || ''; } catch (e) {}
    if (status === 0) return 'ما فيه اتصال بالإنترنت. جرّب مرة ثانية.';
    if (/API key not valid|API_KEY_INVALID|UNAUTHENTICATED|ACCESS_TOKEN/i.test(m + st) || status === 401) return (comp && !comp.state.aiKey && BUILTIN) ? 'مفتاح التطبيق ما اشتغل. كلّم يوسف يحدّث التطبيق، أو حط مفتاحك من الإعدادات.' : 'مفتاح Gemini غير صحيح. راجعه من الإعدادات.';
    if (status === 403) return 'المفتاح ما عنده صلاحية على Gemini API. فعّله من Google AI Studio.';
    if (status === 429 || st === 'RESOURCE_EXHAUSTED') return 'وصلت الحد المجاني لليوم أو للدقيقة. جرّب بعد شوي.';
    if (status === 503 || status === 500) return 'خدمة Gemini مشغولة الحين، جرّب بعد شوي.';
    if (/location|region|not supported/i.test(m)) return 'Gemini مو متاح في منطقتك بهالمفتاح.';
    return 'صار خطأ من Gemini (' + status + ').';
  }
  var noThinkCfg = false;
  var streams = {};
  window.__chunk = function (id, json) { var f = streams[id]; if (f) { try { f(JSON.parse(json)); } catch (e) {} } };
  function withThinking(body) {
    if (noThinkCfg) return body;
    var b = JSON.parse(JSON.stringify(body));
    b.generationConfig = Object.assign({}, b.generationConfig || {}, { thinkingConfig: { thinkingLevel: 'low' } });
    return b;
  }
  // يرسل الطلب ويجرب النموذج اللي بعده لو الاسم انشال، ويشيل إعداد التفكير لو النموذج ما يدعمه
  function gemRequest(key, body, which, onChunk) {
    var list = modelSet(which);
    var slot = which || (comp && comp.state.aiModel) || 'flash';
    var start = workingModel[slot] ? list.indexOf(workingModel[slot]) : 0;
    if (start < 0) start = 0;
    function tryAt(i) {
      var model = list[i];
      var stream = !!onChunk && ok('httpStream');
      var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + (stream ? ':streamGenerateContent?alt=sse' : ':generateContent');
      var hdr = JSON.stringify({ 'x-goog-api-key': key, 'content-type': 'application/json' });
      var payload = JSON.stringify(withThinking(body));
      var p;
      if (stream) {
        p = new Promise(function (res) {
          var id = 'c' + (++cbn);
          streams[id] = onChunk;
          cbs[id] = function (r) { delete streams[id]; res(r); };
          try { A.httpStream(url, hdr, payload, id); } catch (e) { delete streams[id]; delete cbs[id]; res(null); }
        });
      } else {
        p = call('httpPost', url, hdr, payload);
      }
      return p.then(function (r) {
        if (!r) throw { code: 'no_bridge', text: 'الاتصال بـ Gemini يشتغل في التطبيق على الجوال' };
        if (r.status === 400 && !noThinkCfg && /thinking/i.test(r.body || '')) { noThinkCfg = true; return tryAt(i); }
        if (r.status === 404 && i + 1 < list.length) return tryAt(i + 1);
        if (r.status !== 200) throw { code: 'api_error', status: r.status, text: errText(r.status, r.body) };
        workingModel[slot] = model;
        return stream ? null : JSON.parse(r.body);
      });
    }
    return tryAt(start);
  }
  function gemCall(key, body, which) { return gemRequest(key, body, which, null); }
  // نسخة متدفقة: ترجع نفس شكل الرد بعد ما تجمع القطع
  function gemStream(key, body, onText) {
    var text = '', calls = [], extra = [];
    return gemRequest(key, body, null, function (chunk) {
      var c = chunk && chunk.candidates && chunk.candidates[0];
      var ps = (c && c.content && c.content.parts) || [];
      ps.forEach(function (p) {
        if (p.functionCall) calls.push(p);
        else if (p.text && !p.thought) { text += p.text; if (onText) onText(text); }
        else if (p.thoughtSignature && !p.text) extra.push(p);
      });
    }).then(function (resp) {
      if (resp) return resp;
      var parts = [];
      if (text) parts.push({ text: text });
      parts = parts.concat(calls);
      if (!parts.length) parts = extra.length ? extra : [{ text: '' }];
      return { candidates: [{ content: { role: 'model', parts: parts } }] };
    });
  }
  function partsOf(resp) {
    var c = resp && resp.candidates && resp.candidates[0];
    if (!c) {
      if (resp && resp.promptFeedback && resp.promptFeedback.blockReason) throw { text: 'ما قدرت أرد على هالسؤال.' };
      throw { text: 'ما وصلني رد من Gemini، جرّب مرة ثانية.' };
    }
    return (c.content && c.content.parts) || [];
  }
  function textOf(parts) { return parts.filter(function (p) { return p.text && !p.thought; }).map(function (p) { return p.text; }).join(''); }
  function toContents(turns) {
    var out = [];
    turns.forEach(function (t) {
      if (!t.content) return;
      var role = t.role === 'assistant' ? 'model' : 'user';
      var last = out[out.length - 1];
      if (last && last.role === role) last.parts[0].text += '\n\n' + t.content;
      else out.push({ role: role, parts: [{ text: String(t.content) }] });
    });
    if (out.length && out[0].role !== 'user') out.unshift({ role: 'user', parts: [{ text: '.' }] });
    return out;
  }
  function cleanSchema(sc) {
    if (!sc || typeof sc !== 'object') return sc;
    var o = {};
    Object.keys(sc).forEach(function (k) {
      if (k === 'additionalProperties' || k === '$schema') return;
      o[k] = (k === 'properties') ? Object.keys(sc.properties).reduce(function (a, pk) { a[pk] = cleanSchema(sc.properties[pk]); return a; }, {}) : (typeof sc[k] === 'object' && !Array.isArray(sc[k]) ? cleanSchema(sc[k]) : sc[k]);
    });
    return o;
  }
  function sampleFn(turns, opts) {
    opts = opts || {};
    var key = curKey();
    if (!key) return Promise.reject({ code: 'no_key' });
    var contents = toContents(turns);
    var decls = (opts.tools || []).map(function (t) {
      var d = { name: t.name, description: t.description || '' };
      var sc = t.inputSchema;
      if (sc && sc.properties && Object.keys(sc.properties).length) d.parameters = cleanSchema(sc);
      return d;
    });
    var acc = '', step = 0;
    function round() {
      step++;
      var body = { contents: contents, generationConfig: { maxOutputTokens: 4096, temperature: 0.6 },
        systemInstruction: { parts: [{ text: 'رد باختصار ووضوح باللهجة العمانية البسيطة. بيانات المستخدم موجودة في أول رسالة، فاعتمد عليها مباشرة، وما تستدعي get_snapshot أو get_transactions إلا إذا احتجت تفاصيل مو موجودة.' }] } };
      if (decls.length) body.tools = [{ functionDeclarations: decls }];
      var base = acc;
      return gemStream(key, body, function (t) { if (opts.onText) opts.onText({ text: (base ? base + '\n' : '') + t }); }).then(function (resp) {
        var parts = partsOf(resp);
        var text = textOf(parts);
        var calls = parts.filter(function (p) { return p.functionCall; });
        if (calls.length && step < 8) {
          if (text) { acc += (acc ? '\n' : '') + text; if (opts.onText) opts.onText({ text: acc }); }
          contents.push({ role: 'model', parts: parts });
          var res = calls.map(function (p) {
            var fc = p.functionCall;
            var tool = (opts.tools || []).find(function (t) { return t.name === fc.name; });
            var out;
            try { out = tool ? tool.execute(fc.args || {}) : { error: 'unknown tool' }; }
            catch (e) { out = { error: String((e && e.message) || e) }; }
            if (out == null) out = { ok: true };
            if (Array.isArray(out) || typeof out !== 'object') out = { result: out };
            return { functionResponse: { name: fc.name, response: out } };
          });
          contents.push({ role: 'user', parts: res });
          return round();
        }
        acc += (acc && text ? '\n' : '') + text;
        if (!acc) acc = 'ما قدرت أطلع رد مناسب، جرّب تسأل بطريقة ثانية.';
        if (opts.onText) opts.onText({ text: acc });
        return { text: acc };
      });
    }
    return round();
  }
  sampleFn.limits = function () { return Promise.resolve({ tools: true }); };

  window.claude = {
    use: function (name) {
      if (name === 'sample') return Promise.resolve(curKey() && ok('httpPost') ? sampleFn : null);
      if (name === 'downloads') {
        if (!ok('saveFile')) return Promise.resolve(null);
        return Promise.resolve({ save: function (o) {
          return call('saveFile', o.filename, typeof o.data === 'string' ? o.data : JSON.stringify(o.data)).then(function (r) {
            if (!r || !r.ok) throw { code: (r && r.code) || 'error' };
            return r;
          });
        } });
      }
      return Promise.resolve(null);
    }
  };

  // ---------- الحفظ ----------
  function loadSaved() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { return null; } }
  var saveT = null;
  function saveNow() {
    if (!comp || comp.state.viewing) return;
    var st = comp.state, o = { v: 1, idc: comp.idc };
    DATA_KEYS.concat(EXTRA_KEYS).forEach(function (k) { if (st[k] !== undefined) o[k] = st[k]; });
    o.obDone = st.obDone || st.screen !== 'onboard';
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(o)); } catch (e) {}
    try { if (ok('saveSnapshot') && st.screen !== 'onboard') A.saveSnapshot(JSON.stringify(comp.dataSnapshot())); } catch (e) {}
    try { if (ok('setAlerts')) A.setAlerts(JSON.stringify(buildAlerts(st))); } catch (e) {}
  }
  // تنبيهات تطلع كإشعارات جوال (التطبيق يحدّثها، والنظام يعرضها في وقتها)
  var pendSince = 0;
  function buildAlerts(st) {
    var out = [];
    if (!st.notif || st.notif.advisor === false) return out;
    var now = Date.now();
    var R = function (n) { return fmt(n) + ' ر.ع'; };
    if (st.pending.length) { if (!pendSince) pendSince = now; out.push({ key: 'pend-' + pendSince, at: pendSince + 3 * 3600000, title: 'عندك ' + st.pending.length + ' عمليات تنتظر موافقتك', body: 'افتح التطبيق ووافق عليها عشان تبقى أرقامك دقيقة.', screen: 'home' }); }
    else pendSince = 0;
    var spent = {};
    st.txns.forEach(function (t) { if (!t.trip && t.cycle === st.cycle) addParts(spent, t); });
    Object.keys(st.budgets || {}).forEach(function (k) {
      var cap = st.budgets[k], sp = spent[k] || 0;
      if (!(cap > 0)) return;
      var name = (CATS.find(function (c) { return c.id === k; }) || { ar: k }).ar;
      var pc = Math.round(sp / cap * 100);
      if (pc >= 100) out.push({ key: 'bud-' + st.cycle + '-' + k + '-100', at: now, title: 'تعدّيت سقف ' + name, body: 'صرفت ' + R(sp) + ' من سقف ' + R(cap) + ' هالشهر.', screen: 'stats' });
      else if (pc >= 80) out.push({ key: 'bud-' + st.cycle + '-' + k + '-80', at: now, title: 'قربت من سقف ' + name, body: 'صرفت ' + R(sp) + ' من ' + R(cap) + ' (' + pc + '٪). باقي لك ' + R(cap - sp) + '.', screen: 'stats' });
    });
    (st.seasons || []).filter(function (x) { return x.active && x.budget > 0; }).forEach(function (se) {
      var sp = st.txns.filter(function (t) { return t.seasonId === se.id; }).reduce(function (a, t) { return a + t.amount; }, 0);
      var pc = Math.round(sp / se.budget * 100);
      if (pc >= 100) out.push({ key: 'sea-' + se.id + '-100', at: now, title: 'تعدّيت ميزانية ' + se.name, body: 'صرفت ' + R(sp) + ' من ' + R(se.budget) + '.', screen: 'home' });
      else if (pc >= 80) out.push({ key: 'sea-' + se.id + '-80', at: now, title: 'قربت من ميزانية ' + se.name, body: 'صرفت ' + R(sp) + ' من ' + R(se.budget) + ' (' + pc + '٪).', screen: 'home' });
    });
    var bi = null;
    try { bi = ok('backupInfo') ? JSON.parse(A.backupInfo()) : null; } catch (e) {}
    (st.installments || []).forEach(function (x) {
      if (!x.dueDay || !x.nextDue || x.total - x.paid <= 0.0005) return;
      var amt = Math.min(x.monthly, x.total - x.paid);
      out.push({ key: 'inst-' + x.id + '-' + x.nextDue, at: x.nextDue - 18 * 3600000, title: (/^قسط/.test(x.name) ? x.name : 'قسط ' + x.name) + ' بكرة', body: 'بينخصم ' + R(amt) + ' بكرة. إذا سددته قبل، اضغط "سدّد الحين" في صفحة الحسابات.', screen: 'more' });
    });
    (st.subs || []).forEach(function (x) {
      if (!x.end) return;
      out.push({ key: 'sub-' + x.id + '-' + x.end, at: x.end - 33 * 3600000, title: 'اشتراك ' + x.name + ' ينتهي بكرة', body: 'المبلغ ' + R(x.amount) + '. إذا ما تحتاجه، ألغه قبل ما يتجدد.', screen: 'more' });
    });
    if (bi && !bi.auto && st.txns.length >= 20) { var d = new Date(); out.push({ key: 'bk-' + d.getFullYear() + '-' + d.getMonth(), at: now + 24 * 3600000, title: 'خذ نسخة احتياطية', body: 'ارفع نسخة على Google Drive أو فعّل النسخ التلقائي من الإعدادات عشان ما تضيع بياناتك.', screen: 'settings' }); }
    return out;
  }
  // أسعار الصرف اليومية
  function applyRates(r) { if (!r) return; Object.keys(RATES).forEach(function (c) { if (r[c] > 0) RATES[c] = 1 / r[c]; }); }
  function refreshRates() {
    if (!comp || !ok('httpGet')) return;
    var today = new Date().toISOString().slice(0, 10);
    if (comp.state.fxDate === today) return;
    call('httpGet', 'https://open.er-api.com/v6/latest/OMR').then(function (r) {
      if (!r || r.status !== 200) return;
      try {
        var j = JSON.parse(r.body);
        if (j.result !== 'success' || !j.rates) return;
        var keep = {};
        Object.keys(RATES).forEach(function (c) { if (j.rates[c] > 0) keep[c] = j.rates[c]; });
        applyRates(keep);
        comp.setState({ fxRates: keep, fxDate: today });
      } catch (e) {}
    });
  }
  function scheduleSave() { clearTimeout(saveT); saveT = setTimeout(saveNow, 400); }

  // ---------- المكوّن ----------
  class AppComponent extends Component {
    constructor(props) {
      super(props);
      comp = this; window.__app = this;
      var s = loadSaved();
      if (s) {
        var patch = {};
        DATA_KEYS.concat(EXTRA_KEYS).forEach(function (k) { if (s[k] !== undefined) patch[k] = s[k]; });
        patch.fixed = [];
        if (s.obDone) patch.screen = 'home';
        if (s.security && s.security.pin) patch.locked = true;
        this.state = Object.assign({}, this.state, patch);
        if (s.idc) this.idc = s.idc;
      }
      if (this.state.aiKey && /^sk-ant-/.test(this.state.aiKey)) this.state.aiKey = '';
      if (this.state.aiModel !== 'lite') this.state.aiModel = 'flash';
      this.state.aiInput = this.state.aiKey || '';
      applyRates(this.state.fxRates);
      this.bkInfo = null;
      this.state.aiStatus = '';
      this.lastBars = '';
      this.lastWidget = '';
    }
    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      this.syncPerms();
      this.drainSms();
      this.syncAccounts();
      this.autoBio();
      refreshRates();
    }
    componentDidUpdate(pp, ps) {
      super.componentDidUpdate && super.componentDidUpdate(pp, ps);
      scheduleSave();
      this.syncBars();
      if ((ps.locked && !this.state.locked) || (ps.screen === 'onboard' && this.state.screen !== 'onboard')) this.drainSms();
      if (!ps.locked && this.state.locked) this.autoBio();
      this.syncAccounts();
    }
    syncBars() {
      if (!ok('setBars')) return;
      var dark = this.state.mode === 'dark';
      if (this.state.mode === 'system') { try { dark = window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) {} }
      var sig = dark ? 'd' : 'l';
      if (this.state.locked) sig += 'k';
      if (sig === this.lastBars) return;
      this.lastBars = sig;
      A.setBars(this.state.locked ? '#17211E' : (dark ? '#0F1513' : '#F2F5F4'), !dark && !this.state.locked);
    }
    syncPerms() {
      if (!ok('permStatus')) return;
      try {
        var s = JSON.parse(A.permStatus());
        var pp = Object.assign({}, this.state.perms);
        var changed = false;
        ['sms', 'notif'].forEach(function (k) {
          if (s[k] === true && pp[k] !== 'granted') { pp[k] = 'granted'; changed = true; }
          if (s[k] === false && pp[k] === 'granted') { pp[k] = 'denied'; changed = true; }
        });
        if (changed) this.setState({ perms: pp });
      } catch (e) {}
    }
    askPerm(kind) {
      var self = this;
      if (!ok('requestPerm')) { var p0 = Object.assign({}, this.state.perms); p0[kind] = 'granted'; this.setState({ perms: p0 }); return; }
      call('requestPerm', kind).then(function (r) {
        if (r && r.unavailable) { self.say(SHARE_HOW); return; }
        var pp = Object.assign({}, self.state.perms);
        pp[kind] = r && r.granted ? 'granted' : 'denied';
        self.setState({ perms: pp });
        if (!(r && r.granted) && r && r.blocked) self.say('الصلاحية مقفلة من إعدادات الجوال. افتح الإعدادات وفعّلها');
      });
    }
    drainSms() {
      if (!ok('takeSms')) return;
      if (this.state.screen === 'onboard' || this.state.locked || this.state.viewing) return;
      var items = [];
      try { items = JSON.parse(A.takeSms() || '[]'); } catch (e) { items = []; }
      var self = this;
      items.forEach(function (it) {
        if (it.action === 'ignore') return;
        if (it.sender !== 'share' && !hasAccOrCard(it.body)) return;
        var before = self.idc;
        self.arrive(it.body);
        var p = self.state.pending.find(function (x) { return x.id >= before; })
          || self.state.pending.find(function (x) { return x.kind === 'newacc' && x.texts && x.texts.indexOf(it.body) !== -1; });
        if (!p && it.sender === 'share') self.say('ما قدرت أقرأ هالرسالة. تأكد إنها رسالة بنك فيها مبلغ');
        if (!p) return;
        if (p.kind === 'newacc' && it.action === 'addacc') { self.newAccYes(p.id); return; }
        if (p.kind === 'newacc' && it.action === 'ignoreacc') { self.newAccNo(p.id); return; }
        if (it.action === 'approve' && p.kind === 'suggest' && !p.dupKind) self.approveCat(p.id, p.catId);
      });
      if (items.length) this.setState({ smsText: '' });
    }
    bioUnlock() {
      var self = this;
      if (!ok('biometric')) return super.bioUnlock();
      if (this.bioBusy) return;
      this.bioBusy = true;
      this.setState({ bioScanning: true });
      call('biometric').then(function (r) {
        self.bioBusy = false;
        if (r && r.ok) { self.setState({ locked: false, pinBuf: '', bioScanning: false }); return; }
        self.setState({ bioScanning: false });
        // 10 و 13: المستخدم ألغى أو اختار الرمز
        if (r && r.code !== 10 && r.code !== 13 && r.code !== 5 && r.msg) self.say(r.msg);
      });
    }
    toggleBio() {
      var st = this.state;
      if (!st.security.bio && ok('bioAvailable') && !A.bioAvailable()) this.say('ما لقيت بصمة مسجلة في الجوال. إذا ما اشتغلت، سجّل بصمتك من إعدادات الجوال');
      return super.toggleBio();
    }
    autoBio() {
      var self = this;
      if (this.state.locked && this.state.security && this.state.security.bio && this.state.security.pin) setTimeout(function () { if (self.state.locked) self.bioUnlock(); }, 450);
    }
    syncAccounts() {
      if (!ok('setAccounts')) return;
      var st = this.state;
      var o = {
        accs: st.accounts.filter(function (a) { return a.type !== 'cash' && a.watch !== false; }).map(function (a) { return String(a.last4); }),
        muted: st.accounts.filter(function (a) { return a.type !== 'cash' && a.watch === false; }).map(function (a) { return String(a.last4); }),
        ignored: [].concat.apply([], (st.ignoredAccs || []).map(function (g) { return [String(g.digits)].concat(g.alts || []); }))
      };
      var sig = JSON.stringify(o);
      if (sig === this.lastAccSig) return;
      this.lastAccSig = sig;
      try { A.setAccounts(sig); } catch (e) {}
    }
    backupDrive() { this.say('النسخ على Google Drive بيجي في تحديث قادم. استخدم "تصدير لملف" الحين'); }
    restoreDrive() { this.setState({ modal: null }); this.say('الاستعادة من Drive بتجي في تحديث قادم'); }
    inviteShare() { this.say('المشاركة مع غيرك بتجي في تحديث قادم'); }
    addTripMember() { this.say('مشاركة الرحلة بتجي في تحديث قادم'); }
    passMonth() {}
    async scan() {
      if (this.state.rStage === 'scan') return;
      var key = curKey();
      if (!key) { this.say('قراءة الفاتورة تحتاج مفتاح Gemini المجاني. أضفه من الإعدادات، أو سجّل المصروف يدوي'); return; }
      var img = await call('pickImage');
      if (!img || !img.data) return;
      this.setState({ rStage: 'scan' });
      var catIds = CATS.map(function (c) { return c.id + ' (' + c.ar + ')'; }).join(', ');
      var prompt = 'هذي صورة فاتورة شراء. طلّع بياناتها بصيغة JSON فقط بدون أي كلام ثاني، بهالشكل:\n{"store":"اسم المحل","date":"التاريخ والوقت كما في الفاتورة","items":[["اسم الصنف بالعربي",السعر]],"total":المجموع,"currency":"OMR","category":"رقم الفئة"}\n'
        + 'الأسعار أرقام عشرية. category واحد من: ' + catIds + '. إذا الصورة مو فاتورة رجّع {"error":"not_receipt"}.';
      try {
        var resp = await gemCall(key, { contents: [{ role: 'user', parts: [{ inlineData: { mimeType: 'image/jpeg', data: img.data } }, { text: prompt }] }],
          generationConfig: { maxOutputTokens: 4096, temperature: 0.1, responseMimeType: 'application/json' } });
        var text = textOf(partsOf(resp));
        var m = text.match(/\{[\s\S]*\}/);
        var r = m ? JSON.parse(m[0]) : null;
        if (!r || r.error || !(Number(r.total) > 0)) throw { text: 'ما قدرت أقرأ الفاتورة. جرّب صورة أوضح، أو سجّلها يدوي' };
        RECEIPT.store = String(r.store || 'فاتورة');
        RECEIPT.date = String(r.date || todayLabels().dateShort);
        RECEIPT.items = (Array.isArray(r.items) ? r.items : []).filter(function (x) { return Array.isArray(x) && x.length >= 2; }).map(function (x) { return [String(x[0]), Number(x[1]) || 0]; }).slice(0, 40);
        RECEIPT.total = Math.round(Number(r.total) * 1000) / 1000;
        var cid = String(r.category || '').split(' ')[0];
        RECEIPT.catId = CATS.some(function (c) { return c.id === cid; }) ? cid : 'grocery';
        this.setState({ rStage: 'done' });
      } catch (e) {
        this.setState({ rStage: 'idle' });
        this.say((e && e.text) || 'ما قدرت أقرأ الفاتورة');
      }
    }
    saveReceipt() {
      var cat = RECEIPT.catId || 'grocery';
      this.addTx({ amount: RECEIPT.total, merchant: RECEIPT.store, catId: cat, dateShort: todayLabels().dateShort, src: 'receipt', seasonId: this.seasonPick(cat, this.state.mSeason) }, 'انسجلت الفاتورة في ' + this.catAr(cat));
      this.setState({ rStage: 'idle', screen: 'home', mSeason: null });
    }
    backupInfo() {
      if (!ok('backupInfo')) return null;
      if (!this.bkInfo) { try { this.bkInfo = JSON.parse(A.backupInfo()); } catch (e) { this.bkInfo = {}; } }
      return this.bkInfo;
    }
    chooseBackup() {
      var self = this;
      saveNow();
      call('pickBackupTarget').then(function (r) {
        self.bkInfo = null;
        if (r && r.ok) self.say('تمام، انحفظت نسخة، وبنسخ تلقائياً كل يوم');
        else if (r && r.code !== 'declined') self.say('ما قدرت أحفظ في هالمكان، جرّب مكان ثاني');
        self.__forceRender && self.__forceRender();
      });
    }
    backupNowNative(first) {
      var self = this;
      saveNow();
      this.setState({ bkBusy: true });
      call('backupNow').then(function (r) {
        self.bkInfo = null;
        self.setState({ bkBusy: false });
        self.say(r && r.ok ? (first ? 'تمام، كل يوم بتنحفظ نسخة في التنزيلات ← Masarifi' : 'انحفظت نسخة الحين') : 'ما قدرت أحفظ النسخة على الجوال');
      });
    }
    pickPhoto() {
      var self = this;
      if (!ok('pickImageTitled')) return super.pickPhoto();
      call('pickImageTitled', 'اختر صورتك أو صوّر').then(function (r) {
        if (r && r.data) self.setPhoto('data:image/jpeg;base64,' + r.data);
        else if (r && r.error) self.say('ما قدرت أفتح الصور');
      });
    }
    restoreFrom(src) {
      var self = this;
      if (!ok('pickBackupFile')) return;
      call('pickBackupFile', src).then(function (r) {
        if (!r || r.cancel) return;
        if (r.error === 'no_app') { self.say('ما قدرت أفتح الملفات'); return; }
        if (r.error || !r.text) { self.say('ما قدرت أقرأ الملف'); return; }
        var d = null;
        try { d = JSON.parse(r.text); } catch (e) { self.say('هذا الملف مو نسخة احتياطية من مصاريفي'); return; }
        self.restoreData(d);
      });
    }
    uploadDrive() {
      var self = this;
      if (!ok('shareToDrive')) { this.say('هذي تشتغل في التطبيق على الجوال'); return; }
      saveNow();
      call('shareToDrive').then(function (r) {
        if (r && r.ok && r.ios) self.say(r.shared ? 'تمام' : 'انحفظ الملف');
        else if (r && r.ok) self.say(r.drive ? 'اختر الحساب والمجلد في Google Drive واضغط حفظ' : 'Google Drive مو موجود في جوالك، اختر وين تحفظ النسخة');
        else if (r && r.code === 'declined') return;
        else self.say('ما قدرت أجهز النسخة');
      });
    }
    downloadBackup() {
      var self = this;
      if (!ok('saveToDownloads')) { this.exportFile(); return; }
      saveNow();
      call('saveToDownloads').then(function (r) {
        if (r && r.ok) self.say('انحفظت في التنزيلات ← Masarifi باسم ' + r.name);
        else self.exportFile();
      });
    }
    exportPeriodPdf(R, x) {
      if (!ok('printHtml')) return super.exportPeriodPdf(R);
      var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
      var S = '<span class="r">\u20C4</span>';
      var money = function (n) { return '<span class="n">' + fmt(n) + '</span> ' + S; };
      var kp = (x.kpis || []).map(function (k) { return '<div class="k"><div class="kl">' + esc(k.label) + '</div><div class="kv">' + esc(k.value) + (k.unit ? ' ' + S : '') + '</div><div class="ks">' + esc(k.sub) + '</div></div>'; }).join('');
      var cats = (x.cats || []).map(function (c) { return '<tr><td><i style="background:' + c.color + '"></i>' + esc(c.ar) + '</td><td>' + money(c.amount) + '</td><td>' + c.pct + '٪</td><td>' + c.count + '</td><td>' + esc(c.chg || '') + '</td></tr>'; }).join('');
      var ins = (x.insights || []).map(function (i) { return '<li><b>' + esc(i.title) + ':</b> ' + esc(i.body).replace(/\u20C4/g, S) + '</li>'; }).join('');
      var mer = (x.merchants || []).map(function (m) { return '<tr><td>' + esc(m.name) + '</td><td>' + m.count + '</td><td><span class="n">' + esc(m.amt) + '</span> ' + S + '</td></tr>'; }).join('');
      var rows = (R.rows || []).slice(0, 400).map(function (t) { var d = new Date(t.ts); return '<tr><td class="n">' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + '</td><td>' + esc(t.merchant) + '</td><td>' + esc(t.cat) + '</td><td>' + money(t.amount) + '</td></tr>'; }).join('');
      var html = '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>'
        + "@font-face{font-family:'OmrSign';src:url(fonts/OmrSign.woff2) format('woff2');unicode-range:U+20C4}"
        + "@font-face{font-family:'Readex Pro';font-weight:400;src:url(fonts/readex-pro-arabic-400-normal.woff2) format('woff2')}"
        + "@font-face{font-family:'Readex Pro';font-weight:600;src:url(fonts/readex-pro-arabic-600-normal.woff2) format('woff2')}"
        + "@font-face{font-family:'ReadexL';font-weight:400;src:url(fonts/readex-pro-latin-400-normal.woff2) format('woff2')}"
        + "@page{size:A4;margin:14mm}body{font-family:'OmrSign','Readex Pro','ReadexL',sans-serif;color:#17211E;font-size:11px;margin:0}"
        + "h1{font-size:20px;margin:0 0 2px;color:#1F5E4F}h2{font-size:13px;margin:16px 0 6px;color:#1F5E4F;border-bottom:1px solid #E3E8E6;padding-bottom:4px}.sub{color:#5C6863;margin-bottom:12px}"
        + ".ks{color:#5C6863;font-size:9px}.kg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.k{border:1px solid #E3E8E6;border-radius:8px;padding:8px}.kl{color:#5C6863;font-size:9px}.kv{font-size:14px;font-weight:600}"
        + "table{width:100%;border-collapse:collapse}td,th{padding:4px 6px;border-bottom:1px solid #EEF1F0;text-align:right}th{background:#F2F5F4;font-size:10px;color:#3A4541}"
        + "i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-left:6px}.n{direction:ltr;unicode-bidi:isolate}.r{font-family:'OmrSign'}li{margin-bottom:4px}"
        + ".ft{margin-top:18px;color:#8C9A95;font-size:9px;text-align:center}tr{page-break-inside:avoid}"
        + '</style></head><body>'
        + '<h1>تقرير المصاريف</h1><div class="sub">' + esc(R.label) + '</div>'
        + '<div class="kg">' + kp + '</div>'
        + '<h2>الفئات</h2><table><tr><th>الفئة</th><th>المبلغ</th><th>النسبة</th><th>العمليات</th><th>التغير</th></tr>' + cats + '</table>'
        + (ins ? '<h2>قراءات</h2><ul>' + ins + '</ul>' : '')
        + (mer ? '<h2>أكثر الأماكن</h2><table><tr><th>المكان</th><th>المرات</th><th>المجموع</th></tr>' + mer + '</table>' : '')
        + '<h2>العمليات (' + (R.rows || []).length + ')</h2><table><tr><th>التاريخ</th><th>الجهة</th><th>الفئة</th><th>المبلغ</th></tr>' + rows + '</table>'
        + '<div class="ft">مصاريفي · ' + new Date().toLocaleDateString('ar-OM') + '</div></body></html>';
      A.printHtml(html, 'masarifi-' + R.file);
      this.say('اختر "حفظ كـ PDF" من نافذة الطباعة');
    }
    saveAi() {
      var self = this;
      var key = (this.state.aiInput || '').trim();
      if (!key) { this.setState({ aiKey: '', aiStatus: '' }); workingModel = {}; if (BUILTIN) { this.sampleFn = sampleFn; this.setState({ aiReady: true }); this.say('رجعت لمفتاح التطبيق'); } else { this.sampleFn = null; this.setState({ aiReady: false }); this.say('شلت المفتاح، المستشار يرد من الجهاز'); } return; }
      if (!/^(AIza[0-9A-Za-z_\-]{20,}|AQ\.[0-9A-Za-z_.\-]{20,})$/.test(key)) { this.say('مفتاح Gemini يبدأ بـ AQ. أو AIza. انسخه كامل من Google AI Studio'); return; }
      this.setState({ aiStatus: 'checking' });
      workingModel = {};
      gemCall(key, { contents: [{ role: 'user', parts: [{ text: 'رد بكلمة: تمام' }] }], generationConfig: { maxOutputTokens: 64 } }).then(function () {
        self.setState({ aiKey: key, aiStatus: 'ok', aiReady: true });
        self.sampleFn = sampleFn;
        self.say('تمام، المستشار صار يشتغل بـ Gemini');
      }).catch(function (e) {
        self.setState({ aiStatus: 'bad' });
        self.say((e && e.text) || 'ما قدرت أتأكد من المفتاح');
      });
    }
    renderVals() {
      var v = super.renderVals();
      var self = this, st = this.state;
      var tt = this.tt();
      // الصلاحيات
      (v.permRows || []).forEach(function (r, i) {
        var kind = i === 0 ? 'sms' : 'notif';
        r.allow = function () { self.setState({ permAsk: null }); self.askPerm(kind); };
        r.flip = function () { if (st.perms[kind] === 'granted') { if (ok('openAppSettings')) A.openAppSettings(); } else self.askPerm(kind); };
        if (LITE && kind === 'sms') { r.allow = function () { self.say(SHARE_HOW); }; r.undecided = false; r.asking = false; r.decided = true; r.status = IOS ? 'عن طريق اختصار، تضبطه من الإعدادات' : 'بالمشاركة من تطبيق الرسائل'; r.statusC = 'var(--accentText)'; r.flip = function () { self.say(SHARE_HOW); }; }
        if (IOS && kind === 'notif') { r.undecided = false; r.asking = false; r.decided = true; r.status = 'من الاختصار، وداخل التطبيق'; r.statusC = 'var(--accentText)'; r.flip = function () {}; }
      });
      var permsOk = (LITE || st.perms.sms) && (IOS || st.perms.notif);
      v.permsWait = !permsOk; v.permsBtnOp = permsOk ? 1 : 0.4;
      v.permsNext = function () { if ((LITE || self.state.perms.sms) && (IOS || self.state.perms.notif)) self.setState({ obStep: 3, permAsk: null }); };
      (v.permSwitches || []).forEach(function (r, i) {
        var kind = i === 0 ? 'sms' : 'notif';
        if (LITE && kind === 'sms') { r.toggle = function () { self.say(SHARE_HOW); }; return; }
        r.toggle = function () { if (st.perms[kind] === 'granted') { if (ok('openAppSettings')) A.openAppSettings(); self.say('تقدر تقفل الصلاحية من إعدادات الجوال'); } else self.askPerm(kind); };
      });
      v.smsInfo = LITE ? SHARE_HOW + ' أو الصق الرسالة هنا.' : st.perms.sms === 'granted' ? 'التطبيق يقرأ رسائل البنوك أول ما توصل ويعرضها عليك للموافقة. وإذا عندك رسالة قديمة، الصقها هنا.' : 'قراءة الرسائل مقفلة. تقدر تلصق رسالة البنك هنا وأنا أقرأها.';
      v.arriveLabel = 'اقرأها وحطها للموافقة';
      v.googleSignIn = function () { self.saveProfile(); };
      v.exportPdf = function () { self.setState({ modal: null, screen: 'stats', rp: Object.assign({}, self.state.rp, { mode: 'cycle' }) }); self.say('اضغط PDF فوق عشان تطلع التقرير'); };
      var bi = this.backupInfo() || {};
      var lastTxt = bi.last ? (function () { var d = new Date(bi.last); return d.getDate() + ' ' + AR_M[d.getMonth()] + ' ' + (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(); })() : '';
      v.bk = {
        auto: !!bi.auto,
        status: bi.auto ? (bi.err ? 'آخر نسخة تلقائية ما انحفظت، جرّب "انسخ الحين"' : (lastTxt ? 'آخر نسخة تلقائية: ' + lastTxt + ' · في ' + (bi.where || 'التنزيلات ← Masarifi') : 'بتنحفظ أول نسخة الحين')) : 'مقفل',
        statusC: bi.auto && bi.err ? '#9C2F3D' : 'var(--muted)',
        sw: { bg: bi.auto ? 'var(--accent)' : 'var(--off)', x: window.knobX(!!bi.auto, 20), aria: bi.auto ? 'true' : 'false' },
        toggle: function () { var on = !bi.auto; A.setAutoBackup(on); self.bkInfo = null; if (on) self.backupNowNative(true); else self.say('وقفت النسخ التلقائي'); self.__forceRender && self.__forceRender(); },
        drive: function () { self.uploadDrive(); }, download: function () { self.downloadBackup(); },
        restoreDrive: function () { self.restoreFrom('drive'); }, restorePhone: function () { self.restoreFrom('phone'); },
        now: function () { self.backupNowNative(); }, nowLabel: st.bkBusy ? 'أحفظ…' : 'انسخ الحين'
      };
      if (st.fxDate === new Date().toISOString().slice(0, 10) && v.tfCurLabel) v.tfCurLabel += ' · سعر اليوم';
      v.isApp = true; v.notApp = false; v.isIos = IOS; v.notIos = !IOS; v.isAndroid = !IOS;
      v.receiptCat = 'الفئة: ' + this.catAr(RECEIPT.catId || 'grocery') + ' · تقدر تغيّرها بعد الحفظ';
      // روابط "عن التطبيق"
      var docs = window.APP_DOCS || {};
      (v.aboutLinks || []).forEach(function (l, i) {
        var key = ['whatsNew', 'privacy', 'terms', 'licenses', 'rateApp', 'shareApp'][i];
        l.fn = function () {
          if (key === 'shareApp') { if (ok('shareText')) A.shareText('مصاريفي: تطبيق يسجّل مصاريفك من رسائل البنك ويعطيك تقارير ونصائح.'); return; }
          if (key === 'rateApp') { self.say('التقييم يكون متاح لما ينزل التطبيق في المتجر'); return; }
          var d = docs[key];
          if (d && ok('showText')) A.showText(d.title, d.body); else self.say(tt.soonLink);
        };
      });
      // Gemini
      var mName = (st.aiModel === 'lite') ? 'Flash-Lite (أسرع)' : 'Flash (أذكى)';
      var stx = st.aiStatus === 'checking' ? 'أتأكد من المفتاح…' : (st.aiKey ? (st.aiStatus === 'bad' ? 'المفتاح ما اشتغل' : 'مفعّل بمفتاحك الخاص · ' + mName) : (BUILTIN ? 'مفعّل تلقائياً · ' + mName + ' · ما تحتاج تسوي شي' : 'مو مفعّل · المستشار يرد بردود جاهزة من الجهاز'));
      v.ai = {
        key: st.aiInput || '', status: stx, statusC: (st.aiKey && st.aiStatus !== 'bad') || (!st.aiKey && BUILTIN) ? '#23624D' : 'var(--muted)',
        onKey: function (e) { self.setState({ aiInput: e.target.value.trim() }); },
        save: function () { self.saveAi(); },
        models: [['flash', 'Flash · أذكى'], ['lite', 'Flash-Lite · أسرع']].map(function (m) {
          var on = (st.aiModel || 'flash') === m[0];
          return { label: m[1], cbg: on ? 'var(--soft)' : 'var(--surface)', cfg: on ? 'var(--accentText)' : 'var(--ink2)', cbd: on ? 'var(--accent)' : 'var(--line)', pick: function () { workingModel = {}; self.setState({ aiModel: m[0] }); } };
        }),
        getKey: function () { if (ok('openUrl')) A.openUrl('https://aistudio.google.com/app/apikey'); }
      };
      // الويدجت
      if (ok('updateWidget')) {
        var w = JSON.stringify({ spent: v.totalStr || '0.000', pending: String(st.pending.length), safe: v.safe && v.safe.show ? v.safe.value : '', hide: !!st.hideAmt });
        if (w !== this.lastWidget) { this.lastWidget = w; try { A.updateWidget(w); } catch (e) {} }
      }
      return v;
    }
  }

  // ---------- أحداث النظام ----------
  var pausedAt = 0;
  window.__onPause = function () { pausedAt = Date.now(); saveNow(); try { if (ok('postAlertsNow')) A.postAlertsNow(); } catch (e) {} };
  window.__openScreen = function (sc) { if (comp && !comp.state.locked && sc) comp.setState({ screen: sc, shadeOpen: false, modal: null }); };
  window.__onResume = function () {
    if (!comp) return;
    if (pausedAt && comp.state.security && comp.state.security.pin && Date.now() - pausedAt > 60000 && !comp.state.locked) comp.setState({ locked: true, pinBuf: '' });
    pausedAt = 0;
    comp.syncPerms();
    comp.drainSms();
    refreshRates();
    comp.bkInfo = null;
    comp.__forceRender && comp.__forceRender();
  };
  window.__smsArrived = function () { if (comp) comp.drainSms(); };
  window.__openPending = function () { if (comp && !comp.state.locked) comp.setState({ screen: 'home', shadeOpen: false }); };
  window.__onBack = function () {
    if (!comp) return 'false';
    var st = comp.state;
    if (st.locked) return 'false';
    if (st.tour != null && st.tour !== false) { comp.setState({ tour: null, tourDone: true }); return 'true'; }
    if (st.modal) { comp.setState({ modal: null, pinBuf: '', pinErr: false, pinStage: null, txEdit: null }); return 'true'; }
    if (st.shadeOpen) { comp.setState({ shadeOpen: false }); return 'true'; }
    if (st.heads) { comp.setState({ heads: null }); return 'true'; }
    var s = st.screen;
    if (s === 'onboard') { if (st.obStep > 0) { comp.setState({ obStep: st.obStep - 1 }); return 'true'; } return 'false'; }
    if (s === 'txlist') { comp.setState({ screen: st.txBack || 'home' }); return 'true'; }
    if (s === 'trip') { comp.setState({ screen: st.tripBackScreen || 'travel' }); return 'true'; }
    if (s === 'account') { comp.setState({ screen: st.accBack || 'more', accDel: false }); return 'true'; }
    if (s === 'advisor') { comp.setState({ screen: st.advBack || 'home' }); return 'true'; }
    if (s === 'profile') { comp.setState({ screen: 'settings' }); return 'true'; }
    if (s === 'settings' && st.catEdit) { comp.setState({ catEdit: null }); return 'true'; }
    if (s !== 'home') { comp.setState({ screen: 'home' }); return 'true'; }
    return 'false';
  };

  window.MASA = { AppComponent: AppComponent, call: call, ok: ok, saveNow: saveNow, A: A, getComp: function () { return comp; } };
  window.addEventListener('load', function () {
    DCRuntime.mount(AppComponent, window.TPL, document.getElementById('app'));
    var sp = document.getElementById('splash');
    if (sp) { sp.style.opacity = '0'; setTimeout(function () { sp.remove(); }, 400); }
  });
})();
