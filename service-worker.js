const CACHE_NAME = 'gamezone-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/style.css',
  '/js/app.js',
  '/games/tetris/index.html',
  '/games/snake/index.html',
  '/games/2048/index.html',
  '/games/minesweeper/index.html',
  '/games/chess/index.html',
  '/games/pacman/index.html',
  '/games/breakout/index.html',
  '/games/memory/index.html',
  '/games/sudoku/index.html',
  '/games/space-invaders/index.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
