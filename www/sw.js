
// Service worker pour la mise en cache et l'accès hors ligne
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pendu-v1').then(function(cache) {
            return cache.addAll([
                'index.html',
                'app.css',
                'app.js',
                'mp3/mixkit-positive-notification-951.mp3',
                'mp3/mixkit-wrong-answer-fail-notification-946.mp3',
                'img/3643732-mute-sound-speaker-voice-volume_113439.svg',
                'img/3643734-high-sound-speaker-voice-volume_113403.svg',
                'img/android-chrome-192x192.png',
                'img/android-chrome-256x256.png',
                'img/apple-touch-icon.png',
                'img/favicon-16x16.png',
                'img/favicon-32x32.png',
                'img/favicon.ico',
                'img/mstile-150x150.png',
                'img/safari-pinned-tab.svg',
                'img/sprite_0.png',
                'img/sprite_1.png',
                'img/sprite_2.png',
                'img/sprite_3.png',
                'img/sprite_4.png',
                'img/sprite_5.png',
                'img/sprite_6.png',
                'img/sprite_7.png',
            ]);
        })
    );
});
    
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});