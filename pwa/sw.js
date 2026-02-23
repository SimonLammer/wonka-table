const CACHE_NAME = 'wonka-cache-v8';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Safely cache files without failing the whole install if one is missing
      return Promise.allSettled(ASSETS.map(url => cache.add(url)));
    })
  );
});

self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', event => {
  // Ignore non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Return valid network response
        return response;
      })
      .catch(() => {
        // Network failed, fallback to cache
        return caches.match(event.request, { ignoreSearch: true })
          .then(cacheResponse => {
            if (cacheResponse) {
              return cacheResponse;
            }
            // CRITICAL FIX: NEVER return undefined. If not in cache, return a fallback Response to prevent browser crashes.
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html', { ignoreSearch: true });
            }
            return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
          });
      })
  );
});
