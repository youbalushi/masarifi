/* نسخة الآيفون: جسر بديل عن تطبيق الأندرويد، كله داخل المتصفح */
(function () {
  var Q = [];               // رسائل البنك اللي وصلت من الاختصار
  window.__iosQueue = Q;
  function cb(id, obj) { setTimeout(function () { if (window.__cb) window.__cb(id, JSON.stringify(obj)); }, 0); }
  function hdrs(h) { try { return JSON.parse(h || '{}'); } catch (e) { return {}; } }
  function req(method, url, h, body) {
    var o = { method: method, headers: hdrs(h) };
    if (body && method !== 'GET') o.body = body;
    return fetch(url, o).then(function (r) { return r.text().then(function (t) { return { status: r.status, body: t }; }); })
      .catch(function (e) { return { status: 0, body: String(e && e.message || e) }; });
  }
  function pickFile(accept) {
    return new Promise(function (res) {
      var inp = document.createElement('input');
      inp.type = 'file'; inp.accept = accept || '*/*';
      inp.style.cssText = 'position:fixed;left:-99px;top:0;width:1px;height:1px;opacity:0';
      var done = false;
      inp.onchange = function () { done = true; var f = inp.files && inp.files[0]; inp.remove(); res(f || null); };
      window.addEventListener('focus', function once() { window.removeEventListener('focus', once); setTimeout(function () { if (!done) { inp.remove(); res(null); } }, 1500); });
      document.body.appendChild(inp);
      inp.click();
    });
  }
  function resizeImage(file, max) {
    return new Promise(function (res) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var s = Math.min(1, max / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        res(c.toDataURL('image/jpeg', 0.85).split(',')[1]);
      };
      img.onerror = function () { URL.revokeObjectURL(url); res(null); };
      img.src = url;
    });
  }
  function today() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function snapshot() { try { return localStorage.getItem('masarifi_snapshot') || ''; } catch (e) { return ''; } }
  // يفتح قائمة المشاركة في الآيفون (فيها Google Drive و"حفظ في الملفات")
  function shareFile(name, text, type) {
    var file = null;
    try { file = new File([text], name, { type: type || 'application/json' }); } catch (e) {}
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      return navigator.share({ files: [file], title: name }).then(function () { return { ok: true, shared: true }; }, function (e) { return { ok: false, code: e && e.name === 'AbortError' ? 'declined' : 'error' }; });
    }
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: type || 'application/json' }));
    a.download = name; document.body.appendChild(a); a.click(); a.remove();
    return Promise.resolve({ ok: true, shared: false });
  }

  window.Android = {
    variant: function () { return 'ios'; },
    hasBuiltinKey: function () { return false; },
    permStatus: function () { return JSON.stringify({ sms: true, notif: true }); },
    requestPerm: function (kind, id) { cb(id, { granted: true }); },
    takeSms: function () { var out = Q.splice(0, Q.length); return JSON.stringify(out); },
    setBars: function (color) { var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', color); var dark = color === '#0F1513'; try { document.documentElement.style.background = color; document.body.style.background = dark ? '#19221F' : '#FFFFFF'; } catch (e) {} },
    updateWidget: function () {}, setAccounts: function () {}, setAlerts: function () {}, postAlertsNow: function () {},
    saveSnapshot: function (json) { try { localStorage.setItem('masarifi_snapshot', json); } catch (e) {} },
    backupInfo: function () { return JSON.stringify({ target: false, auto: false, ios: true }); },
    bioAvailable: function () { return false; },
    openAppSettings: function () {},
    openUrl: function (u) { window.open(u, '_blank'); },
    shareText: function (t) { if (navigator.share) navigator.share({ text: t }).catch(function () {}); else { try { navigator.clipboard.writeText(t); } catch (e) {} } },
    showText: function (title, body) {
      var w = document.createElement('div');
      w.style.cssText = 'position:fixed;inset:0;z-index:100;background:rgba(14,21,19,.6);display:flex;align-items:flex-end';
      w.innerHTML = '<div style="background:var(--surface,#fff);color:var(--ink,#111);width:100%;max-height:85%;overflow:auto;border-radius:24px 24px 0 0;padding:20px 20px calc(24px + env(safe-area-inset-bottom));font-family:inherit;direction:rtl"><h2 style="margin:0 0 12px;font-size:18px"></h2><p style="white-space:pre-wrap;margin:0;font-size:14px;line-height:1.9"></p><button style="margin-top:16px;width:100%;min-height:46px;border:0;border-radius:14px;background:#1F5E4F;color:#fff;font:inherit;font-size:15px">تمام</button></div>';
      w.querySelector('h2').textContent = title; w.querySelector('p').textContent = body;
      w.querySelector('button').onclick = function () { w.remove(); };
      w.onclick = function (e) { if (e.target === w) w.remove(); };
      document.body.appendChild(w);
    },
    httpPost: function (url, h, body, id) { req('POST', url, h, body).then(function (r) { cb(id, r); }); },
    httpGet: function (url, id) { req('GET', url, '{}', null).then(function (r) { cb(id, r); }); },
    httpRequest: function (method, url, h, body, id) { req(method, url, h, body).then(function (r) { cb(id, r); }); },
    httpStream: function (url, h, body, id) {
      fetch(url, { method: 'POST', headers: hdrs(h), body: body }).then(function (r) {
        if (r.status !== 200 || !r.body || !r.body.getReader) return r.text().then(function (t) {
          if (r.status === 200) { t.split('\n').forEach(function (l) { if (l.indexOf('data:') === 0) { try { window.__chunk(id, l.slice(5).trim()); } catch (e) {} } }); }
          cb(id, { status: r.status, body: t });
        });
        var rd = r.body.getReader(), dec = new TextDecoder(), buf = '';
        function pump() {
          return rd.read().then(function (x) {
            if (x.done) { cb(id, { status: 200, body: '' }); return; }
            buf += dec.decode(x.value, { stream: true });
            var lines = buf.split('\n'); buf = lines.pop();
            lines.forEach(function (l) { if (l.indexOf('data:') === 0) { try { window.__chunk(id, l.slice(5).trim()); } catch (e) {} } });
            return pump();
          });
        }
        return pump();
      }).catch(function (e) { cb(id, { status: 0, body: String(e && e.message || e) }); });
    },
    saveFile: function (name, data, id) { shareFile(name, data, /\.csv$/.test(name) ? 'text/csv' : 'application/json').then(function (r) { cb(id, r); }); },
    shareToDrive: function (id) {
      var s = snapshot();
      if (!s) { cb(id, { ok: false, code: 'no_data' }); return; }
      shareFile('masarifi-backup-' + today() + '.json', s).then(function (r) { cb(id, Object.assign({ drive: false, ios: true }, r)); });
    },
    saveToDownloads: function (id) { this.shareToDrive(id); },
    pickBackupFile: function (src, id) {
      pickFile('*/*').then(function (f) {
        if (!f) { cb(id, { cancel: true }); return; }
        var r = new FileReader();
        r.onload = function () { cb(id, { text: String(r.result) }); };
        r.onerror = function () { cb(id, { error: 'read' }); };
        r.readAsText(f);
      });
    },
    pickImageTitled: function (title, id) { this.pickImage(id); },
    pickImage: function (id) {
      pickFile('image/*').then(function (f) {
        if (!f) { cb(id, { cancel: true }); return; }
        resizeImage(f, 1600).then(function (b64) { cb(id, b64 ? { data: b64 } : { error: 'decode' }); });
      });
    },
    printHtml: function (html) {
      var fr = document.createElement('iframe');
      fr.style.cssText = 'position:fixed;left:-10px;top:0;width:1px;height:1px;border:0';
      document.body.appendChild(fr);
      var d = fr.contentWindow.document; d.open(); d.write(html.replace('fonts/OmrSign.woff2', location.href.replace(/[^/]*$/, '') + 'fonts/OmrSign.woff2')); d.close();
      setTimeout(function () { try { fr.contentWindow.focus(); fr.contentWindow.print(); } catch (e) {} setTimeout(function () { fr.remove(); }, 60000); }, 700);
    }
  };

  // لما يرجع للتطبيق من الخلفية
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') { if (window.__onResume) window.__onResume(); }
    else if (window.__onPause) window.__onPause();
  });
  // تحميل للعمل بدون إنترنت
  if ('serviceWorker' in navigator) window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
})();
