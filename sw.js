/* Service worker del Quaderno: guarda todo el cuaderno en el móvil para usarlo sin conexión.
   Estrategia: primero la red (así ves siempre la última versión); si no hay conexión, la copia guardada.
   Al cambiar archivos compartidos, sube VERSION para renovar la copia. */
const VERSION = "quaderno-v1";
const pad = (n) => String(n).padStart(2, "0");
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/tokens.css",
  "css/app.css",
  "js/app.js",
  "fonts/Inter-Variable.ttf",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "content/kit.js",
  "content/course.js",
  "content/levels/a1.js",
  "content/levels/a2.js",
  "content/levels/b1.js",
  "content/levels/b2.js",
  ...Array.from({ length: 80 }, (_, i) => `content/units/u${pad(i + 1)}.js`),
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    (async () => {
      const cache = await caches.open(VERSION);
      try {
        // Red con límite de 4 s: con mala cobertura, mejor la copia guardada que esperar.
        const net = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000))]);
        if (net && net.ok) {
          const key = new URL(req.url);
          key.search = ""; // u01.js?t=123 y u01.js son el mismo archivo
          cache.put(key.href, net.clone());
        }
        return net;
      } catch (_) {
        const hit = await cache.match(req, { ignoreSearch: true });
        if (hit) return hit;
        if (req.mode === "navigate") return cache.match("index.html");
        return Response.error();
      }
    })()
  );
});
