const version = "1.0";
// Choose a cache name
const cacheNamePrefix = "cache-tools";
const cacheName = `${cacheNamePrefix}-v${version}`;
// List the files to precache
const precacheResources = [
    "/tools/",
    "/tools/manifest.json",
    "/tools/css/style.css",
    "/tools/img/icons/elephant.ico",
    "/tools/img/icons/elephant.png",
    "/tools/js/theme.js",
    "/tools/js/translate.js",
    "/tools/js/index.js",
    "/tools/info.html",
    "/tools/js/info.js",
    "/tools/CHANGELOG.md",
    "/tools/CHANGELOG_PL.md",
    "/tools/ACKNOWLEDGEMENTS.md",
    "/tools/ACKNOWLEDGEMENTS_PL.md",
    "/tools/calculator.html",
    "/tools/js/calculator.js",
    "/tools/ip.html",
    "/tools/js/ip.js",
    "/tools/js/error.js",
    "/tools/js/offline.js",
    "/tools/js/topbar.js",
    "/tools/number_system_converter.html",
    "/tools/js/number_system_converter.js",
    "/tools/random_numbers.html",
    "/tools/js/random_numbers.js",
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener("install", (event) => {
    console.log("Service worker install event!");

    event.waitUntil(
        caches.keys().then((keyList) =>
            Promise.all(
                keyList.map((key) => {
                    if (key != cacheName && key.startsWith(cacheNamePrefix)) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );

    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(precacheResources))
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activate event!");
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
    console.log("Fetch intercepted for:", event.request.url);

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
