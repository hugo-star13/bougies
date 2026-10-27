// Garde l'app disponible hors ligne. Réseau d'abord pour recevoir les mises à jour,
// copie locale si l'iPad n'a pas internet.
const CACHE = 'bougies-v3';
const FICHIERS = [
  './', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png',
];

self.addEventListener('install', ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  if (ev.request.method !== 'GET') return;
  ev.respondWith(
    fetch(ev.request)
      .then(rep => {
        const copie = rep.clone();
        caches.open(CACHE).then(c => c.put(ev.request, copie));
        return rep;
      })
      .catch(() => caches.match(ev.request, { ignoreSearch: true }))
  );
});
