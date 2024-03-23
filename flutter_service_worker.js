'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "95ab1a1ac62a7986f340f68a22b852eb",
".git/config": "115475737c36d47205d85c1f2c445026",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f0a1ac073c531185599fdf965b381243",
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
".git/index": "232c6a2dc0452d36d46433f15a9ac512",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd6c735a11ec37f770a6d87376ed2e97",
".git/logs/refs/heads/main": "69d6f906a12eab43cfd521ee4ef68bb6",
".git/logs/refs/remotes/origin/main": "1f7af994c3120b96064865e7da406a4d",
".git/objects/01/ca8827b8c4fef76545cb37434c165edae86f5c": "2bb46eae3f314e0a36bb5520d342e64c",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/25f80bf582f25e8ff419f97aab4c8408cea1db": "758eb8914351ce2372cd0705fa327daa",
".git/objects/04/a2f8fdb10cd255da024060c76446566d07b989": "20f28b699982702a6ccdf09fa9aeb5db",
".git/objects/06/570cfacfdba607b85bf88c99941f02de01f45f": "7e32e9bc742bdd7bf627f5146baf3a7f",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/2ebaa2c749346b029ed38a5746e864935971a4": "7d9ca2547b98ea7b51c6c9fce6460c55",
".git/objects/09/0f60a795a484a68e1b271a715e63a7b71b6119": "d8ca490b900a2d3c862911a38a742331",
".git/objects/0a/2be959d9c1ab1bdb51e9f8c725e3d524d13d0b": "d978a553b36ea6d66133a74394c84b5b",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/8a6ce0d7ec79741d849e921056d8cd70bab3ef": "e7aa58530849626f246bd8996f9bbb54",
".git/objects/0d/364ec5d6acab559db8831127c1075cea9ad96a": "fa8d0f78f2f7ec41f7cb4c217b20d119",
".git/objects/0d/86a592292e6bae725743bd36a91bae12f353b5": "40fcd001783069a9800c421109549449",
".git/objects/12/6a0079c492a30e0057f1a6484b2caf6b19d5bb": "ca97b8d318cfc0c2de19bd9dc22d309c",
".git/objects/13/252c9b20700aefd702efd541dfa79757f5b28f": "1293efb5f8a23eb3bca8ad62066d965b",
".git/objects/14/9bfb80c719c879d515ca2c377c4f1286d2dd3b": "c249d39b50d1b3741a13079a1af07ffd",
".git/objects/15/9dee5050d5435d1f5b1b647c6156beb47a50a8": "19337b417ea05be9e8a5ee2089fa1e0b",
".git/objects/16/626003c90ade0ef10174b5f34aed40028bc66f": "e850269df5f7eb8c93dcd3991b61b107",
".git/objects/19/b1a145a3e2aafa207125840595d14e88ae994d": "e403c67bdc1046c4f5b7d4a463d0dc9b",
".git/objects/1a/fdd1bcad4006976a64c2e57f8bb8a242ef7c06": "6c09f383a18999774c9a4aa50eeba12e",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/50c34a09966ebdeefefaea17b2cb210c05de05": "b4cfce5da315fc7a6c8ceda1c516b9cc",
".git/objects/22/5898cdd3f610d470e1950bb36a715f9f7539a7": "f22cc4ad0e76db81016e86e5059ebebd",
".git/objects/23/590a376e73be7eb122edf88582da58e84fd15a": "0cb4562bb5ec91aa74b434463693a133",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/93e0b011137776ac2c51ea540a4655fbdf3118": "db1ba47a0ac38994fed0520a6e8696dc",
".git/objects/28/e1e83b26c3c0008f3c3858c75c95083f5020ea": "6a2ef227ceb96516cf33810926e265f0",
".git/objects/2a/cf3f4b873f0b0db816be96f8203d0798303082": "009c6d108a6363c84a197c475a30e9f4",
".git/objects/2b/e5f578ee714d312759105f05efcefcc5f84697": "ebfd67f519d8797220b837c5335e1724",
".git/objects/2e/dd8a2181b2e728c52fd0220cf736be835f36e4": "e6d390919f7179befd96763ede4d53c8",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/34/106fdc8d184ebf81f623855ad82309723cf6af": "1d183a3f7855f8436cd60d6f10515446",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/8fbb522694b537473f8115f3ea56fa40813bf7": "4f6048fdeb30e0138f6e8f31005bb566",
".git/objects/36/c832c20f1e506f068054a784e5f690851a55e1": "a955bdeb74a7cb6c21b3cea0faa0cf9e",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/41c2f5b9fe3ca4ed0dec7c4c317a695b553bb7": "9af1f574b6acb42f5e6a7d41d6d17681",
".git/objects/3d/b9412bc53f8adcd4a0c87c6028f29562528b5d": "0979f107b9dd95763da6fe41578250f4",
".git/objects/3e/438aedfb86a21fd395339ce6f5702232d7cc24": "b18b29c9255dfd5160faba1d60c0d850",
".git/objects/44/aa06bf3def28fdf1af6c80ee153528550f9bce": "8fe3a770c45328ab914ca4f4e3b55b13",
".git/objects/45/9c43943399fa8d482d942b2f1d58e494a787d3": "dab0deb70cd61b01371b8a2aab0f7463",
".git/objects/45/f632aca5e6637c15804729d29e7be9004470b5": "d481f08b6a27642de03711ca2466f839",
".git/objects/46/4da11e7c4b5f92a0c99a795844982a23d2b40a": "7aefe4e58a1a96d49488dc72721408a6",
".git/objects/49/7c58e5e6dbfa6795e8df6e1594cea60fad03a9": "dc49e27f766a2f783477826f369583a1",
".git/objects/4d/867dafed9c000bd6e85802ac0ef8120055aabf": "d4e3da873ebeff713115a068571796a6",
".git/objects/4f/e1a86a5eecad3ce1a3baafbb11680ad97c2e65": "aacec864ad851ea2cd6a6060ddb148c6",
".git/objects/50/36a935664c3f63a9711cb0d3e9493f869e14d8": "9f2594b928415751604ff22a7b2be824",
".git/objects/50/f62c9727e5a459db5c450e56cb54a355186f55": "a4f6fb1dacf41bf7413b64256719d815",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/d023e1140ec957dae2a1aa040e1b8f0a1d0f36": "8e62c21781fc3ebc7bd8bd73fbc1c4ec",
".git/objects/52/7fcc71bb558ccb0da50d1ef690738bf811d2b3": "e2dbd9d1c70452dd14a8cc6a4ad52855",
".git/objects/54/09030fdf5ed587154b6cf26f0f2c1268ca0bff": "969cbbd45a3a2fb3e4aff281cae05f66",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/a6d5e1d867a5d2a28dce01c9498a29695f124b": "842869bf56ce53f10f2dcfa1d9283bdd",
".git/objects/57/f8a0b75172f7acc81ceaa4ce0855367671688d": "b225de4ef55c3ca47cb43e365986ab73",
".git/objects/58/e2d2c105387dabd021b5841159749e51120d3f": "5f6e864c4d06d3a4691006294b2dbaca",
".git/objects/5a/32b1e5fef27369e3719cd11aa8d77d2306ab67": "ae55b7a07364977435b6ad6f8d1e7186",
".git/objects/5c/25fb80f2900172af3a149c3f516fae62f9771a": "36029022588c9d0a0dc421c681376d75",
".git/objects/5d/d3ce498f08d3c88fa2f248891ba32bcae74e47": "1bbcc0ffdd99fd17188f8a8ed3c77cbd",
".git/objects/5e/233134d7d185ec485b48ec1a14a28f0b80a5d1": "c75d1102e7a2dca243a907c4a338114f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/86ea63590ae24382ea97a1444c48943f6cc5fe": "0895c7bf67a1c650f4c3b3cf1246310a",
".git/objects/63/dd114bb93550e95b3df594a473d171aded5b26": "4534fca3071fb4efc530f77d383bb129",
".git/objects/64/1e293d8aaef0a48a0ad84d4e2ace4d35cd0704": "3b90edfc96699fe8ad20b7cdc3dd5894",
".git/objects/67/0cea86e9921a150c1c6e4c8d75f013b581be07": "30f0d6f7d71e84a6719ab5867cb860a0",
".git/objects/6a/33983117a370da35fbe8db8cc837017d9b2f38": "0ff6cdb06ee7264c574bb8f3f6a77778",
".git/objects/6a/69731cd9de8acef6c051e7c39615b78a4086c7": "beb9e9af0c28be8c198eccd9b5c9c08b",
".git/objects/6b/056684a83c6e80e45b2428f122bb17195cd132": "512edacd3bff5cd70c7f063b46a2bba0",
".git/objects/6b/c3d5e15e2c4bbce73ba768e3384b9e03f5df62": "f1ca28fd36dca91e50fb827a03b99419",
".git/objects/6e/75d58ac0cf759893a7a32b90e2645b80f29a86": "d6f135d87a5a605e59569bd2b905b877",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/a2db87004e5af092b3ab3329b94c19e53db262": "d058b05a12a68c47113a3524355bf424",
".git/objects/70/ceaa41430c2a628808b2216d3b70d350524933": "9ddb0cc3df1b606317730b5af0da24fa",
".git/objects/73/114d8061e9f92a7a24f8516acf6a7f7f301772": "1e0b55146efb4f586afaffe041036707",
".git/objects/73/ee9948cea582faf7108316a1ad07ef43155e5b": "4a9e78085116faa47a6e430383026a03",
".git/objects/74/7cf1b973f680f38c6e90f6222d70640da71e0b": "f039748eaa986fd93a719b6d9ef15225",
".git/objects/76/289d79ff080e3d7ab6f7da8fe5dc0ac8842be4": "a88f5db47ee65db699c6cc934af94606",
".git/objects/7b/39df01202734502fc90a52e2fc389e7666ef75": "f121f25014d21fff2dbff0985f1c77fc",
".git/objects/7b/c1f9e803206795b7d9fa04db369f5ebbf004ed": "2779d4b796501761948998b85bb2eaa6",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7e/49ccca2fb17c3309c852473cba851890cdc161": "ff01c0e1b11fd0d12569b14be4f5505c",
".git/objects/84/6965789d700546dcc06d8e4c7ce0e172585f6d": "4cf6491e4e0757cf982c3696949e2835",
".git/objects/87/7b70a46a3a9f2a9630b05ebf166a70f86be57a": "4ce13546e45fc38a3e1061fcd4a5c03e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5eb38ac27c22a75665e625421cd0ae6573f853": "2867cb66aae9a9d470cbd58fd1a015b3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/797dc37fe162cb5dad63754ccafacdff3a9b84": "6c436e5e655d20b4aaf8b4c0ef853348",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/47b5999db00a5ab15d6c9e5ea53124ea1bf082": "7e1a0b2f0415294e75326c7c2270c269",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/ac8d5c0644223df590063ab672e4f39b6a9c5a": "8e19611b8e339cd4685b16f4875448f8",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/a1/3dbd8a3dc7855bad2b2ed9ec53d03fab433a1b": "622c0b4ab7e5e4c514c14fa5628dcf21",
".git/objects/a5/23335df972ba7f8f220e61929cb154390b2bfe": "192c735b428501e9e71442d44377c9fb",
".git/objects/a5/2592eee9e6c6e97586c1fbdb1219d659811050": "33db68555c15f22f8645a1203909de2a",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/e3e54bbfe5ad79a35dca42d920c7f2d6bd51ed": "e21b98530b9a97a9a9de0aa121b7d8c1",
".git/objects/a8/4ed71e481cb9c593badacdb3f5d24b372e67f2": "be708c81d5b0036cf29609950966f56e",
".git/objects/a9/200614e9b3e20fd65cf893f0a0cdd1e062fcaf": "af3cbe8027e506b2fbb905957cda2eda",
".git/objects/a9/363ec4f26b10cd903a53e64f8c4ccce0b0bbd7": "a98226508191123ea04d38d6090537a7",
".git/objects/aa/5ee694dde54ce5660b486261f997db0c0bd32d": "4f593f788ae3a8f117c2455f3f8865c9",
".git/objects/ac/cf6fec59b9c59bd81d77f5f91e6fdd275d750a": "29555c4b4dcc4bc8701c7763fda9a9b9",
".git/objects/ae/2f5ce17d7fc47c08ecdf405deded80a9893056": "4ecfcf3ea278b1ef0314c53bd2d48902",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/b0fbdaa2487db0e8fcaa6ed40cf7da173c72e7": "70fa061202bc340392e296e436990c5d",
".git/objects/af/c6a5c792922eb3f4f4b01ec5603b07cbf783c1": "4146ec15c5ec429d244b25203fe3138b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3c9e205f21170bf4abe9045b3d008b79aa4d36": "f90651c1d02228cc7fa2fc32f776a5f6",
".git/objects/b8/6298b99416a0c656c6da8351394776591926c0": "7ce2338a8cbd996cfb506b7b8085524b",
".git/objects/b8/ddf4912e38f1e38a1f20657bd985c309636610": "c2620fa7459288c59ed9ff68679aee5f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/f8ef2b97ed81df086bf6d5ad61060dac74ba58": "597b3cba4c9e0ebfa4a4b6007e76f9eb",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/c346cc74ce1cb41b87c2a9dc43cd8ad55c43d1": "cc41db00db1a21ff0f5c37594029a8ba",
".git/objects/c0/341310845e584e4c382927307c8ed96a429743": "9929d430225e41d0cdf5d15e0ae428b6",
".git/objects/c4/ede20c5afe53c5b76f21108669decfce8353fb": "1faac748d83280f132d5ba2432f7b7ad",
".git/objects/c5/5c699b015229ec5b0d26696da7924721d11389": "87156ce7002e52da0968d567d0f4ccda",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/01be02a3a7d1484eef1c9975018be9e96d5f32": "47bdfa227025e28795db7dc9e78addd8",
".git/objects/ca/7a0417eb4b594cdaf218c9a5aed1fc863ca2a8": "6160827f2d7e8aa5368f3fc82af54471",
".git/objects/cc/9f4913d09008c382a71c5d9d88978f26a22ab4": "d66ba651a1d8631c7ca42f4c440e50f9",
".git/objects/cc/e4d17405404a03d0301dc8cd0db968137da304": "7c5660319bba9fd1c749aea3a8b6e442",
".git/objects/cf/68049faf7ac9453d3ba889af9d79fbec4521f3": "78a5314409594955e13d993ad534a8a2",
".git/objects/d2/5142864212b1a04771853a5d516f800e12cce2": "f79fcb02a0cbc509c8042c4ff02d6f1c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/91c1613176e7ba16f7002b98f3483f50b056fa": "e0fb1a64bfb3bdab543a8091753e9802",
".git/objects/d7/aa00faa77471f9025c891dfe9a50f89650d8dd": "67ded8561b87e09b260c3fc9979b3fb3",
".git/objects/d9/550b56e8a029d566decbd5e043eb464666e93b": "946ed18a8bfc79f109d858cf02418e81",
".git/objects/d9/8b2b8b31f3405acb0f5aaa7a69df0655a11626": "6824d17e5fe8209271f97545e34bfecc",
".git/objects/d9/d481bf10cd9c74e6f8633f9552da7a2ac57f62": "d01e05d3dda832396aab4a85a135d2b2",
".git/objects/da/f528c21097763793943fb86c7991df1f019c29": "94cd22e6b1ccf24087a6f1aa480c8338",
".git/objects/dc/179e380ad575ec6e815afc9c42052009e2b256": "70e303b0dec7c31992a82b4f3c86287c",
".git/objects/dc/1ee15f295232156295394ac42abefd35e734b5": "20339c70498f4b364c8834dda843dff8",
".git/objects/dc/34a9133c178a5c2f657e5dd3838872b4aa50b8": "ecb9105659ecfe80531094d354ae36fd",
".git/objects/df/c6b8a7c8b4e8a24a4fbfde616cd4c055837890": "ae4a4a36cac143785128a9bb7d77a6fa",
".git/objects/e8/a49fff9a6141f6c2b990a68c08b6f362a833a9": "082816316539bae82514fde855371865",
".git/objects/e9/4b998944f7d355d35ed92ecd00b568f744340d": "1f5c0b1f686bdbf5e2f7e18251f77214",
".git/objects/ea/4676ee11877a921504788107765b49ff07c0a2": "be5a8d13f4f0c54687ecf66dd875d11c",
".git/objects/ea/bcf8746632d7fe41e37f11f229db259bb721e6": "b3efff16470bcdadb4345ac678623eeb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/076226f2a7e6f7c7fd190c75288bdb46e76524": "1a0d25e15a5997d441a1df6cc2dd3818",
".git/objects/ed/0e6184f2701fd7b58d9deb686060198962bccb": "8059191901cdc8830d8ce6074312220b",
".git/objects/ed/3753424346077c413cfce944bc330a3054798f": "a56a0ad10afa05a60477298565f2a21d",
".git/objects/ed/d0056b9d6a9936fb1f755cb165c1d52e2aa391": "b924b5e8eabed2776298a32f1e0c2fe6",
".git/objects/ef/f60b9bf150c91b108030e212952c227528ba8f": "894b83b577e5c49d62f9a74068189c18",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f5/1ed3bc5ba7a3bf86696cbf2658037647d0efeb": "06a15b1e242478cde4376982c1fff338",
".git/objects/f6/2cb05ddf59895ea05576e77f28b0ec0c4e2604": "74ec5bb2ee7e488ee4cac5984c3bb45d",
".git/objects/f6/5d62a17c331cdf30e365bdae0acebefcf1dc64": "b17e1aa0613fb1d5c52b819530439656",
".git/objects/f7/e64a2cd86ea8c2cf0e5603d2970d7122f4eaac": "6a003f3b152b8f43c9b9028d96938bb8",
".git/objects/f8/79d8aac5d01c68cb61b541496dfed65e240850": "1121cbc57c13d591af7719eda647a977",
".git/objects/f8/7d8165be9496c2a25031459130f1d0981a650f": "6e49cec85a8d0101ba7f5406252023a0",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/eec686129858ac3dc14ff26d4b294a0fa3a02b": "5c68ce85495bef5d823bf66a2c508fa4",
".git/objects/ff/086988ccfc314a474bf1421eb4998f9e7a44cd": "fde8b6f70f501faa23e0a30af7d9a2b3",
".git/objects/ff/c992394bd9210365a397f330a6ba08ed9ec2ad": "7e72f95e9b025f31fe3df69d4281e51e",
".git/ORIG_HEAD": "e2cc3aec7256dcf069872992e9b88e43",
".git/refs/heads/main": "ebecf456893751740ccd70cfd5ec4eda",
".git/refs/remotes/origin/main": "ebecf456893751740ccd70cfd5ec4eda",
"assets/AssetManifest.json": "148993934faebcc5785e1905bd007f2a",
"assets/AssetManifest.smcbin": "a2a57bff74bf15cac8255dcd5580e873",
"assets/assets/fonts/Staatliches-Regular.ttf": "0b1946eaefaeda766701618dba33e03c",
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
"assets/FontManifest.json": "78421dcff29704ae90856d5213f09c6a",
"assets/fonts/MaterialIcons-Regular.otf": "2fd0077604c80fc618919e00539233e3",
"assets/NOTICES": "f0aec9909600d7db5a6fbb6c8f581ac1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
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
"index.html": "00084bf217733a21a55cdd4ce6c7cba8",
"/": "00084bf217733a21a55cdd4ce6c7cba8",
"main.dart.js": "146b008625af45e9acef486156735ec0",
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
