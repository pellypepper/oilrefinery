// sw.js
const CACHE_NAME = 'site-cache-v1';
const urlsToCache = [
  '/',
  '/static/css/main.5e7e7acd.css',
  '/static/js/bundle.js',
  '/static/media/card1.webp',
  '/static/media/refinery.4d8e41fb779af63710d1.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});