const version = "1.2";
// Choose a cache name
const cacheNamePrefix = "cache-tools";
const cacheName = `${cacheNamePrefix}-v${version}`;
// List the files to precache
const precacheResources = [
    "/tools/",
    "/tools/manifest.json",
    "/tools/manifest_pl.json",
    "/tools/css/style.css",
    "/tools/img/icons/icon.ico",
    "/tools/img/icons/icon_x192.png",
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
    "/tools/roman_numeral_converter.html",
    "/tools/js/roman_numeral_converter.js",
    "/tools/random_numbers.html",
    "/tools/js/random_numbers.js",
    "/tools/gps.html",
    "/tools/js/gps.js",
    "/tools/user_agent.html",
    "/tools/js/user_agent.js",
    "/tools/unix_timestamp.html",
    "/tools/js/unix_timestamp.js",
    "/tools/password_generator.html",
    "/tools/js/password_generator.js",
    "/tools/hash.html",
    "/tools/js/hash.js",
    // "/tools/http.html",
    // "/tools/js/http.js",
    "/tools/unit_converter.html",
    "/tools/js/unit_converter.js",
    "/tools/json.html",
    "/tools/js/json.js",
    "/tools/markdown.html",
    "/tools/js/markdown.js",
    "/tools/latex.html",
    "/tools/js/latex.js",
    "/tools/ascii.html",
    "/tools/js/ascii.js",
    "/tools/qr_generator.html",
    "/tools/js/qr_generator.js",
    "/tools/resistor.html",
    "/tools/js/resistor.js",
    "/tools/geographical_coordinates_converter.html",
    "/tools/js/geographical_coordinates_converter.js",
    "/tools/world_time.html",
    "/tools/js/world_time.js",
    "/tools/time_calculations.html",
    "/tools/js/time_calculations.js",
    "/tools/stopwatch.html",
    "/tools/js/stopwatch.js",
    "/tools/img/resistor.svg",
    "/tools/fonts/JetBrainsMono-Regular.woff2",
    "/tools/js/modules/bowser.js",
    "/tools/js/modules/moment.js",
    "/tools/css/modules/bootstrap.min.css",
    "/tools/css/modules/bootstrap-icons/bootstrap-icons.min.css",
    "/tools/css/modules/bootstrap-icons/fonts/bootstrap-icons.woff?2820a3852bdb9a5832199cc61cec4e65",
    "/tools/css/modules/bootstrap-icons/fonts/bootstrap-icons.woff2?2820a3852bdb9a5832199cc61cec4e65",
    "/tools/js/modules/bootstrap.bundle.min.js",
    "/tools/js/modules/showdown.min.js",
    "/tools/js/modules/crypto-js/core.js",
    "/tools/js/modules/crypto-js/x64-core.js",
    "/tools/js/modules/crypto-js/md5.js",
    "/tools/js/modules/crypto-js/sha1.js",
    "/tools/js/modules/crypto-js/sha256.js",
    "/tools/js/modules/crypto-js/sha224.js",
    "/tools/js/modules/crypto-js/sha512.js",
    "/tools/js/modules/crypto-js/sha384.js",
    "/tools/js/modules/crypto-js/sha3.js",
    "/tools/js/modules/crypto-js/ripemd160.js",
    "/tools/js/modules/latex/latex.js",
    "/tools/js/modules/latex/css/katex.css",
    "/tools/js/modules/latex/css/article.css",
    "/tools/js/modules/latex/js/base.js",
    "/tools/js/modules/latex/css/base.css",
    "/tools/js/modules/latex/fonts/cmu.css",
    "/tools/js/modules/latex/fonts/Sans/cmun-sans.css",
    "/tools/js/modules/latex/fonts/Serif/cmun-serif.css",
    "/tools/js/modules/latex/fonts/Serif%20Slanted/cmun-serif-slanted.css",
    "/tools/js/modules/latex/fonts/Typewriter/cmun-typewriter.css",
    "/tools/js/modules/latex/fonts/Typewriter%20Slanted/cmun-typewriter-slanted.css",
    "/tools/js/modules/latex/fonts/Serif/cmunrm.woff",
    "/tools/js/modules/qrcode.js",
    "/tools/js/modules/random.js",
    "/tools/js/modules/csv.js",
    "/tools/db/countries.csv",
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
