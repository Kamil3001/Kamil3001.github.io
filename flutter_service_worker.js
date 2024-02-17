'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "115475737c36d47205d85c1f2c445026",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a77f69947c5e836b0c9370baf940529a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20b97eeadaabc5778212e537be14df07",
".git/logs/refs/heads/main": "59c43f7570aa7673e0d05c8ddbbf3a99",
".git/logs/refs/remotes/origin/main": "c4c95f0ab59eeb52da17a0770d63577a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/6a0079c492a30e0057f1a6484b2caf6b19d5bb": "ca97b8d318cfc0c2de19bd9dc22d309c",
".git/objects/13/252c9b20700aefd702efd541dfa79757f5b28f": "1293efb5f8a23eb3bca8ad62066d965b",
".git/objects/15/9dee5050d5435d1f5b1b647c6156beb47a50a8": "19337b417ea05be9e8a5ee2089fa1e0b",
".git/objects/1a/fdd1bcad4006976a64c2e57f8bb8a242ef7c06": "6c09f383a18999774c9a4aa50eeba12e",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/50c34a09966ebdeefefaea17b2cb210c05de05": "b4cfce5da315fc7a6c8ceda1c516b9cc",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/93e0b011137776ac2c51ea540a4655fbdf3118": "db1ba47a0ac38994fed0520a6e8696dc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/c832c20f1e506f068054a784e5f690851a55e1": "a955bdeb74a7cb6c21b3cea0faa0cf9e",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/41c2f5b9fe3ca4ed0dec7c4c317a695b553bb7": "9af1f574b6acb42f5e6a7d41d6d17681",
".git/objects/3e/438aedfb86a21fd395339ce6f5702232d7cc24": "b18b29c9255dfd5160faba1d60c0d850",
".git/objects/49/7c58e5e6dbfa6795e8df6e1594cea60fad03a9": "dc49e27f766a2f783477826f369583a1",
".git/objects/50/f62c9727e5a459db5c450e56cb54a355186f55": "a4f6fb1dacf41bf7413b64256719d815",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/86ea63590ae24382ea97a1444c48943f6cc5fe": "0895c7bf67a1c650f4c3b3cf1246310a",
".git/objects/64/1e293d8aaef0a48a0ad84d4e2ace4d35cd0704": "3b90edfc96699fe8ad20b7cdc3dd5894",
".git/objects/67/0cea86e9921a150c1c6e4c8d75f013b581be07": "30f0d6f7d71e84a6719ab5867cb860a0",
".git/objects/6a/33983117a370da35fbe8db8cc837017d9b2f38": "0ff6cdb06ee7264c574bb8f3f6a77778",
".git/objects/6e/75d58ac0cf759893a7a32b90e2645b80f29a86": "d6f135d87a5a605e59569bd2b905b877",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/a2db87004e5af092b3ab3329b94c19e53db262": "d058b05a12a68c47113a3524355bf424",
".git/objects/70/ceaa41430c2a628808b2216d3b70d350524933": "9ddb0cc3df1b606317730b5af0da24fa",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7e/49ccca2fb17c3309c852473cba851890cdc161": "ff01c0e1b11fd0d12569b14be4f5505c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/797dc37fe162cb5dad63754ccafacdff3a9b84": "6c436e5e655d20b4aaf8b4c0ef853348",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/ac8d5c0644223df590063ab672e4f39b6a9c5a": "8e19611b8e339cd4685b16f4875448f8",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/a5/23335df972ba7f8f220e61929cb154390b2bfe": "192c735b428501e9e71442d44377c9fb",
".git/objects/a5/2592eee9e6c6e97586c1fbdb1219d659811050": "33db68555c15f22f8645a1203909de2a",
".git/objects/a8/4ed71e481cb9c593badacdb3f5d24b372e67f2": "be708c81d5b0036cf29609950966f56e",
".git/objects/a9/363ec4f26b10cd903a53e64f8c4ccce0b0bbd7": "a98226508191123ea04d38d6090537a7",
".git/objects/ac/cf6fec59b9c59bd81d77f5f91e6fdd275d750a": "29555c4b4dcc4bc8701c7763fda9a9b9",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3c9e205f21170bf4abe9045b3d008b79aa4d36": "f90651c1d02228cc7fa2fc32f776a5f6",
".git/objects/b8/6298b99416a0c656c6da8351394776591926c0": "7ce2338a8cbd996cfb506b7b8085524b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/c346cc74ce1cb41b87c2a9dc43cd8ad55c43d1": "cc41db00db1a21ff0f5c37594029a8ba",
".git/objects/c0/341310845e584e4c382927307c8ed96a429743": "9929d430225e41d0cdf5d15e0ae428b6",
".git/objects/c5/5c699b015229ec5b0d26696da7924721d11389": "87156ce7002e52da0968d567d0f4ccda",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/550b56e8a029d566decbd5e043eb464666e93b": "946ed18a8bfc79f109d858cf02418e81",
".git/objects/e8/a49fff9a6141f6c2b990a68c08b6f362a833a9": "082816316539bae82514fde855371865",
".git/objects/e9/4b998944f7d355d35ed92ecd00b568f744340d": "1f5c0b1f686bdbf5e2f7e18251f77214",
".git/objects/ea/4676ee11877a921504788107765b49ff07c0a2": "be5a8d13f4f0c54687ecf66dd875d11c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3753424346077c413cfce944bc330a3054798f": "a56a0ad10afa05a60477298565f2a21d",
".git/objects/ed/d0056b9d6a9936fb1f755cb165c1d52e2aa391": "b924b5e8eabed2776298a32f1e0c2fe6",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/ff/c992394bd9210365a397f330a6ba08ed9ec2ad": "7e72f95e9b025f31fe3df69d4281e51e",
".git/refs/heads/main": "ed5b582b9e2e6a7531eee87a986b8341",
".git/refs/remotes/origin/main": "ed5b582b9e2e6a7531eee87a986b8341",
"assets/AssetManifest.json": "8f6a2930d8a722cf7a1323649d59d4b6",
"assets/AssetManifest.smcbin": "a89645da50a3a0226584d5ed2dff667d",
"assets/assets/images/admirals_icon.png": "08685363029f1abcfe2eecd45d8acb41",
"assets/assets/images/cowboys_icon.png": "00184dcb7ad6784b661a5a53b15fb2b2",
"assets/assets/images/crusaders_icon.png": "0fb9051b41262d545f917a693b8dbe28",
"assets/assets/images/eagles_icon.png": "2c05512c372bc45903b5b939bcbf757c",
"assets/assets/images/giants_icon.png": "9b30e512b52890fa425a4954d3ed7e8c",
"assets/assets/images/jets_icon.png": "90cb0a404cda48d4cb3f3c757aac52b0",
"assets/assets/images/knights_icon.png": "c51b8c2642afb4fca960ca06a4c5079a",
"assets/assets/images/mavericks_icon.png": "8af19aa4a12971b664094c6a96aad43d",
"assets/assets/images/minotaurs_icon.png": "7e2dbbe613c7652a5868a016d607358b",
"assets/assets/images/panthers_icon.png": "d7c162006b9e2679f5453d5dfd8770b2",
"assets/assets/images/pirates_icon.png": "2fb85084230c7b4efbf31356b71ee13d",
"assets/assets/images/razorbacks_icon.png": "b30baed9b903803109cf3716fc113e95",
"assets/assets/images/rebels_icon.png": "d1d662a7dd58589aa4963ac23c21ca73",
"assets/assets/images/rhinos_icon.png": "00d39caf0ed0d3c69bde46410aedf2de",
"assets/assets/images/trinity_icon.png": "606b4ff5867f709339e009df44d2472e",
"assets/assets/images/trojans_icon.png": "b8c7d0ae1381ffe3ccc38734b06ffe51",
"assets/assets/images/ucd_icon.png": "b09f92457888e4b31e219663087069c9",
"assets/assets/images/vikings_icon.png": "8e0785453533d92740819524843ca288",
"assets/assets/images/vipers_icon.png": "9ecc100504cb08ec41e46e2544909ba1",
"assets/assets/markdown/about_us.md": "b187377e8adb9f30db64bf025ab2b869",
"assets/assets/markdown/the_game.md": "0d29c1ab743b9911237613e50c62655d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dd72143253b694eb87429a89a99e980f",
"assets/NOTICES": "432c4f35f5815ca6171e7f06e1a5c81c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48cd4c5be1391fef31ce0202b2e7d720",
"/": "48cd4c5be1391fef31ce0202b2e7d720",
"main.dart.js": "3992a96e7a8fbfdd35e7036562fef300",
"manifest.json": "7c2a7894435da2f53bc98be72cc9e1eb",
"version.json": "fc9645dd4bfa97b5c13d087246648e56"};
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