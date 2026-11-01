const V = 'masarifi-97be74cb79';
const FILES = ["", "index.html", "app.js", "cloud.js", "docs.js", "fonts/OmrSign.woff2", "fonts/readex-pro-arabic-300-normal.woff2", "fonts/readex-pro-arabic-400-normal.woff2", "fonts/readex-pro-arabic-500-normal.woff2", "fonts/readex-pro-arabic-600-normal.woff2", "fonts/readex-pro-arabic-700-normal.woff2", "fonts/readex-pro-latin-300-normal.woff2", "fonts/readex-pro-latin-400-normal.woff2", "fonts/readex-pro-latin-500-normal.woff2", "fonts/readex-pro-latin-600-normal.woff2", "fonts/readex-pro-latin-700-normal.woff2", "icon-180.png", "icon-192.png", "icon-512.png", "index.html", "ios.js", "manifest.webmanifest", "patch.js", "preact.js", "runtime.js", "template.js"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(FILES.map((f) => './' + f))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(V).then((x) => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
});
