'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "25024f7e9a502506807c008de53fe58d",
"index.html": "7e589cc0ea1db0728878de5631730b3e",
"/": "7e589cc0ea1db0728878de5631730b3e",
"main.dart.js": "c40b53a058fbfb34978aaadce68a2d67",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f644e472eec230af8b988b66d64a4418",
"icons/Icon-192.png": "57dfd3ffaa5ee84f07873ac4584a1f2b",
"icons/Icon-512.png": "93087fad0e1be8574e8e68d08c743570",
"manifest.json": "a5cd325049eaa0efc364047eba6aa499",
"assets/AssetManifest.json": "94688c4cf92c9c1ebfb42badc58aef37",
"assets/NOTICES": "808f06c483a6887cc2dfd534c8f7e708",
"assets/FontManifest.json": "3fc0dd40e100844a6eafb3f2b14b2a52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "dd07861407c6b1f3e3f20b7a64a50762",
"assets/AssetManifest.bin": "a5d38fc78f99d4d93fcee33ff429b352",
"assets/fonts/MaterialIcons-Regular.otf": "20eb7551a5cd1cf1179e10b31b002bdf",
"assets/assets/images/team_01.png": "2dab0899a2e92cf1c9dda9a16edea3cf",
"assets/assets/images/icono-timeline-2-on.png": "99bacecbdc21ec4e8135272f785d7608",
"assets/assets/images/team_02.png": "e979a0194279bfdd978cfe3d4b5ef98f",
"assets/assets/images/icono-crea-nuevo-reto.png": "34b482baa48db5338d76af2a5f96b2a7",
"assets/assets/images/team_03.png": "6aece89183813620d96a004df6fcab49",
"assets/assets/images/arrow_up.png": "5deb4f124491868fb13d936a1e075496",
"assets/assets/images/visual-idea-02.png": "6601fb1f2f4e3764439ccf0c53998073",
"assets/assets/images/visual-idea-06.png": "735005a58835d53f704ccdc7efc0a7f8",
"assets/assets/images/icono-configuracion.png": "c045f404b45eca87d21444add19d62b3",
"assets/assets/images/illustration-reto.png": "7b9c591707db9d9944c270a094e11d0c",
"assets/assets/images/icono-connector.png": "af100a140790e4452bc82da37c8d9e64",
"assets/assets/images/team_04.png": "a4d0ca1d1b19f02d397517da213e80f0",
"assets/assets/images/illustration-social-market.png": "49beb3860b8ca619a9056883e2cb0ae1",
"assets/assets/images/icono-solucion-connector-off.png": "e0db6b39d3279f6c93441595bf2644dd",
"assets/assets/images/icono-solver.png": "7f65f0b68282d9461da9d58b60234c60",
"assets/assets/images/icono-mis-ideas.png": "c572543e97d5210a76fc0a82dafd469c",
"assets/assets/images/wheel.png": "3a8ed74c379f4b25282f83cfebade3c2",
"assets/assets/images/icono-alerta.png": "8409366d3106633f1edffc77bca6a00a",
"assets/assets/images/icono-desafio.png": "0f59c0b53881560d3ee01d24ad367aa2",
"assets/assets/images/icono-descarga.png": "0dab65455781ac19055f0736e9669133",
"assets/assets/images/AEA_logo.png": "21a5fc9e4e18d07c936042083331ed53",
"assets/assets/images/que-hacemos-social.jpg": "447ef19e872c4f0248ccd2390678f720",
"assets/assets/images/icono-mis-retos.png": "7d9e0fb665f3d012433579bd6d2eab4e",
"assets/assets/images/user_default.jpg": "8b07c9e6fb1106a20d8021f5ebbe7f04",
"assets/assets/images/SIC4Change.png": "75f2e92b55b3c74a5fdfdb659b404968",
"assets/assets/images/placeholder-image.png": "6af1ec6645410a41d5339508a83b86f9",
"assets/assets/images/icono-buscador.png": "2abb6222c423a86156f481c1ec81de86",
"assets/assets/images/AEA-logo-blanco.png": "97380be6b4570475ed81b04297e4d74b",
"assets/assets/images/icono-alerta-off.png": "2a92cea9f60c9a83046533d2edc4cc6a",
"assets/assets/images/header_3.png": "17d012a67df3d2df04f0e7b6fc6c232e",
"assets/assets/images/header_2.png": "a5827d3372c63b1ac73a4fe743d3b13a",
"assets/assets/images/icono-criterios.png": "fdd0676c2951eeaa961af0fe61b3476f",
"assets/assets/images/icono-energia-sostenible-trazo.png": "bd33e55125875e0bd9ebc23d196bc998",
"assets/assets/images/icono-energia-sostenible-trazo-blanco.png": "725345a3c470199d20c0b5e5b655a099",
"assets/assets/images/icono-solucion-connector.png": "15f7a5376a4c7493342001dcaea67644",
"assets/assets/images/icono-timeline-3-on.png": "874dd3c0fc5c6a7b787e0971880bd91e",
"assets/assets/images/icono-photo-form.png": "ecf967fe113d57d74551646478273600",
"assets/assets/images/icono-crear-reto.png": "c5f7e0aa774fc30616fc18de09471820",
"assets/assets/images/icono-timeline-1-off.png": "3b351dd02c3b4111575bf8317145b1c9",
"assets/assets/images/icono-premio.png": "fed5f743f4ad2f9f3369fb922bd04ac6",
"assets/assets/images/icono-desconectarse.png": "468107b2c2c34b63c14ce2431eee1269",
"assets/assets/images/icono-tapado.png": "0ac5faa537866d7b7c36039861718b17",
"assets/assets/images/icono-timeline-1-on.png": "1b33fdf2c0692cbc010000badce72701",
"assets/assets/images/icono-doc-form.png": "1e6ddcffee4548c7032c25da12c68c17",
"assets/assets/images/icono-compartir.png": "cb49596a1c017d294f3f193e9c24a5f6",
"assets/assets/images/icono-info.png": "75a8a3445c8fe17c99bf69898c4fd73b",
"assets/assets/images/equipo-innovacion-social.jpg": "90166171f76c223453aa6cf8971452f1",
"assets/assets/images/icono-contexto.png": "815bc22dfc08d0c20f26fca53a8149e7",
"assets/assets/images/icono-corazon-on.png": "40912d5c2f88b10139607316d0fbc423",
"assets/assets/images/icono-mis-soluciones.png": "1fb07eb4559e5d71191adbe9ddf4516d",
"assets/assets/images/como-funciona-esquema-desktop.png": "97bcf827a07669dc0b88b2fc823b1098",
"assets/assets/images/icono-user.png": "86a4cabb3a82a88622cf4c13e8fc5def",
"assets/assets/images/app-store.png": "03a3be107c775c4567e973af5f98e9df",
"assets/assets/images/icono-timeline-2-off.png": "7fa2a3f098495b8051faac111e1d60f3",
"assets/assets/images/icono-info.svg": "9d16903060caceb2a6a2cdf1f687d8ff",
"assets/assets/images/illustration-connector-comunidad.png": "4f5e38f81970d7ff16c09daebaeeffdf",
"assets/assets/images/blog-te-contamos.jpg": "26e5305ad7b41df07536e60dfa3637b4",
"assets/assets/images/play-store.png": "48a753b9810f51fc46aa54efd8700a75",
"assets/assets/images/arrow_down.png": "49038834329e567076585495cb84dd5a",
"assets/assets/images/icono-comunidad-solvers.png": "a9bc901fd691688e5ad5614b15a95a88",
"assets/assets/images/icono-challenger.png": "357015ce183e509a3ba815f474b8c25e",
"assets/assets/images/icono-timeline-3-off.png": "eaaa1515cf165cbb6ae5735d548c51a9",
"assets/assets/icons/logo-solver-12.png": "5d4b899d5562129c382e176a1d8a2608",
"assets/assets/icons/logo-solver-11.png": "129b35f35815cf8fb3f0d6fa311cc7f4",
"assets/assets/fonts/Bianco/BiancoSerif-Bold.ttf": "52dc34b02b83be40ffd5ae0fa75b95fe",
"assets/assets/fonts/Bianco/BiancoSerif-Regular.ttf": "d9eef524dca62d7a806d0add5fe5c1fd",
"assets/assets/fonts/Raleway/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Raleway/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
