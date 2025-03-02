'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9b7ddd0afad5b40c33e0562d9fb4b6a",
".git/config": "15379957b71f006674ebb5d18f2a3bf5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "78042c1cae9cbe8bffd43d9cedcfc67d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1e107d486e4cec8a1f2476fd89a7453",
".git/logs/refs/heads/main": "c1e107d486e4cec8a1f2476fd89a7453",
".git/logs/refs/remotes/origin/HEAD": "4740e9ce0c13a7231facaeb114f26a77",
".git/logs/refs/remotes/origin/main": "d4e4dc562ddee132d1009f97a74726ea",
".git/objects/02/79efdc122693528a0ee818780a51919ebdc88c": "df04a8b20aad028f0843c439f713c464",
".git/objects/05/3102469033619538ed857c80a72ceb3cc738e8": "80bed64fe348df39f05893b0b3985685",
".git/objects/05/6cb49b1d9b04d38de08825ffde71c814cdbd7b": "69a2279cf36a44bd1069b456e59a9149",
".git/objects/06/f897c61d29cbb3c0b05ace2da6c6517f939e0b": "1d5a780fe02459e98b1e247ac3032d6d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/5b9acb9deade22f0f93420e06b2039d896b563": "6d01bcd832a1101b03091ba278b66b97",
".git/objects/0c/b246dc9b547effb41a174f14f98cf9a21c50cd": "39bcd2103ceeb2ce3cdf99592bc054e9",
".git/objects/13/0d3fc1519a054b3a1b2ab16ba609ab834406c4": "d200f1a6211300464c70db334e243869",
".git/objects/13/6db079630ca4d3a5d6709996366ff18b1a1db5": "53196212947f2ff012cdcb8a19bdd1c7",
".git/objects/14/4d852c3f301ccb1ebadb9fda443e0740058cbe": "e8fadc614425da6ccaed49a3d94876e7",
".git/objects/17/32fe21cf2fe19e84841e0e4152ab94c690e3ec": "62d96606f15999b6a4b600a267dc7909",
".git/objects/1a/006a5fec22aec3ce06aeec801524c2e7be4fa7": "1e8fd4a97709d7d9a16e4d3430679960",
".git/objects/1b/9c1b6cbf1dc63595e836ed3f6f81e2ce9b2a49": "ccc0a829fdf8c7b7bc26aa276baf7dfa",
".git/objects/1c/28ff433ee77bcb55d82ed5cc9631584538388c": "0f3dad59c4a925ff27cec91057f2d8c6",
".git/objects/1c/7ecaa946825941ead380e467c63b62402ac4c1": "f757dd4748b66432502a40675a775eb4",
".git/objects/1d/74ddf4117da8723971e1809a3732421d9fdc95": "433b32ed9a3d36102e7786ff17c00d02",
".git/objects/20/19153a53466c854b335ce4b59c28095a0b6245": "06e7691ad3320eaa46d602d1d51fcd22",
".git/objects/22/d6e90af573c9d1b0d30229fe41cf0dcd44c515": "2b0851ed67da7c602fd04a9780679ec3",
".git/objects/24/af909cd877ffffab88055fc56e981d1cc68019": "403a8bc0a8c900055b4403f8e52cccf9",
".git/objects/29/148b1211567a4f00297af9ac469b1dba59bf6a": "afd1518968a9768a61adf58d0c468449",
".git/objects/29/75ec990e826321ebdf3a414ed3195d76a22e32": "f00dbb07447d60170f5d860330cc7871",
".git/objects/2a/5ebccfcd5a8989db22aee83ffba429a5c69894": "f138b99935537c1b1caa4513837c5096",
".git/objects/2b/d133d17d092a014dc663fc14ffef9ef7958306": "cbf073e85dc5e36c39b2605ef1a1f5cc",
".git/objects/2e/f2a08d90da9173642e4fcbdead281402c064fc": "a65fb2bafb23de3508b1722bbbdc38c9",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/32/69aa243be0d365933a42cf7d73448e5c8bc69a": "deeee26e53443703ab82dee7604fc5b7",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/abd1ac81f8a053657d6f6ad413f80ee5aacfff": "68d7278d2eeb8cd3f534427eda59aa15",
".git/objects/35/2f196ed42e46966c82077ce87c5064d4b4e22a": "a26f22c728c1ad615c4073602b6985f3",
".git/objects/35/acd2c05eae6fe378d574b98f22f36157a000a1": "1528b95111d8e23fb2f67cc3dbd57e8a",
".git/objects/35/b3f4dc0c4e0b3ee6834b36814ca551a86423f2": "6defd1db5e184f27391614dc9e9c5a31",
".git/objects/36/1db76baf4d02a4d75bf03cc7694b62361d02f6": "900cb9eb2a1baf01bd0305359dfb996d",
".git/objects/36/dd2682d01c503044205a85307d390d9b4b2aa2": "ebbb3a5eca34906ac3e5f8dfedd4f123",
".git/objects/38/a2c7a4ddd0be142e25fbdc1935aef892bc7989": "370d269782877717ce93248c793e9112",
".git/objects/39/30b3613f2096678633e564de9b21221c800bb9": "ea454295824296a0d169331f0636f16a",
".git/objects/3a/22c121dde9fd96e631307cb70d8f687346aea6": "b22de643544f23aa875c155890bf1897",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/328ec64803e729c30385f03ee0bf88b8cbd27c": "e6a7526a94bb94ff6e6b9b53c498c7b8",
".git/objects/3c/3bdb27adef462093a6219222b483c80861c5cf": "62b83970731a9855bc9aea98f5af7804",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/cb06e109503892e68ce4390756c9f1ff1ec2b9": "438c5017cdb59048ccf321bc0266c896",
".git/objects/42/f32f32e0aaa634e1a9e4b8814ecf508aaa9683": "69922da7445b04c9750c413b2023c935",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/6af70997aa0afef3eac4b0a7a26f34ef937fa3": "39586ef2b9f9d6580a24ba5eaa6b7aa2",
".git/objects/47/3e48513bb43e6f69894343cdf21028bc0848a5": "b9553efc17d9e72a5ee7c18a6b45fdc0",
".git/objects/48/27c63296d5be1867edd6be4c736beee75fae65": "3db7427639bc1a5e656e3d04a7c03214",
".git/objects/4b/9deebab2c3c64beffc4bdb5bfad4c2580f4336": "ba2ecf9e9cd0992e8ee0b35eb47795b8",
".git/objects/4e/d5ddeb2f0621d75710dfb12a33d712024a47fc": "f735df6563dfefed77af9391d2068318",
".git/objects/4e/df14ea4a68c9e1fd0263eba524893796a3fc4f": "92d4d8e651b92c928dbfee0e81256f57",
".git/objects/50/848b0fe4369207ee7be7c4a9a4b5f7dc918196": "4fc6b92931792f45198edb1c0f73069e",
".git/objects/50/a086151a2f1121446f1a7225a47d88b213038e": "123176c270d719b79325294254715c53",
".git/objects/50/a45d39949805ff75bb6f5bc793de0bb6b1cbaa": "c5d21b0eeab576dd136d06b6372f3e9d",
".git/objects/51/5a9a4f93805fa9df0bfaf222812b3ef3894909": "6cffda727b5122f2603ecac50d3e3502",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d1543d2e061bd47031711e73f69f097ffad540": "05997d9c736a5c76c17b1106d3715719",
".git/objects/54/31386971895a68bd4e438a7d3a0cb138caf852": "2c28cc5d5e6c0217cdfa0b3527ab04f1",
".git/objects/55/50c0b95d4536b1a8fc261c49ab1102c07c0d2f": "ea76c28931729e6acefce24b19dd00bf",
".git/objects/55/738f0c90faa91f83cbaf6b8e10ea949121d102": "d7d3706773df27c75c4f89d6e156faa2",
".git/objects/56/e7af919c9a47e236d84fcc54162c7f703c1175": "bae790a4898574d9d802b208b3377f4c",
".git/objects/57/a2373bf931b894119845377f54f309d1b39ebd": "c1c6386a1b4b2f7f13004f82294ef55f",
".git/objects/58/655e35e4124b278d6d4b38e3f06c7c11647984": "6e2c5baddba9d05c779979526485998e",
".git/objects/58/7774cbb5f964fa517b0dde1818ea812248b636": "3dcd28eac513cb7ee3b3b88f5676d680",
".git/objects/58/f9ddf12100f35e5f470de622ca31cdc4bc6336": "a8d9606f349f69fcf0b2671c6a582302",
".git/objects/5c/0d1c44b039f2726fbcd05a1785067a4d7b1948": "5006457689ca5de3662b73b21e749d75",
".git/objects/5d/5f011cbde564405ef9600b33fc39aab11e9c71": "c6cd2ccd2001fd96ca71c3c85da8f584",
".git/objects/5d/dcdd44949ffe24aebd5e16abe0a0be5fd409d9": "f9d81c68f3f12b3dd81aac445ee8353a",
".git/objects/61/6b08d26176b53e39ec91b1e4fde7ceabd96b89": "2398c4a15fe03b62909fa653ddcbab33",
".git/objects/62/35a242a2f18ebc0b19ef0c3d8a775a9a1eb21f": "1a138b5635c1a56ecac316ba35663565",
".git/objects/62/4757dfd65ecedc224ec3a19653f9bce35f984d": "614b88786295e8364595cd0c7a6556c5",
".git/objects/63/376319a890f2d848c8e5313b9c952187b9d7bd": "ea6d25f313636a54a82adbb964a28555",
".git/objects/66/53533adec6ac1d3e504c60102e6f009cd515a9": "f96aaf29d6cbdf49e6deb2c62933700e",
".git/objects/68/8906ed7ca54082cdb674d7b63cce1989f731a0": "ee71f688456b83d200570da9aa3dd940",
".git/objects/6a/54f71b4a023b1d6b01614c277c6b02526d2b63": "350c0b99a7ee54e85d1461f09b03a4c8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/6e03eb1e9bdf8d80f28ae17e47f8a8c749d833": "0242b19eedbd42a7881ab22f0ab85fb6",
".git/objects/6c/7ca46828a5eb094ac73595b4f6ad2341ae2d2b": "736c15596b180ce94a39bceb107d4c9a",
".git/objects/6c/c23adfcef9159e8d0dfc20763f204521d89ac7": "ffd226cbc41b30a0d6b8481f8dc35cff",
".git/objects/6d/81982b849a6a2f1b8190273c5d0c3f59e62f10": "6333305baa28fca581c91794f5e82023",
".git/objects/6f/9cca040877aef02ed6ad771248c7ae965a1731": "1c7cf8f12ffbee66e2d3d8e216446ad5",
".git/objects/71/be35c0b96dc13cdcbb1fed4618a471b16eab06": "3bae2f45c44c90c312580b7f077a8207",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/73/dd5b338fe569ff2ddfb1d240b3ba06244e3beb": "bcfef3168b86d100ea94539336305c97",
".git/objects/75/03b11fea79274c17e894914bc41504a3377faf": "8fcf7127a2ad30f9dba55569d189e78e",
".git/objects/76/3ae13f22c8e0672ad392d0e33126b954428ddc": "615d3d251c95101a9de156f7f3660102",
".git/objects/76/8b59402811bbffb326517aff306aa85a66b41b": "eaaaacc0dd6033f1e65166410b30a73f",
".git/objects/76/ecac53e7c14bff6cedaeb601b34902d112a499": "529cf94429c9f7958610754d86e6990b",
".git/objects/77/5d5a675ad35ef0d94aa02d601dcb8835643a17": "703c3950e27b543b78e4f26755452106",
".git/objects/78/ba0ea38f64eed9b002dfbe91e22b2b722aa612": "6aeab27d34747ea30a1d61858e142172",
".git/objects/78/eafaa336de87dbf6fbadb9f6302e5d898fa04e": "3002b7bb1e6911581dcf6199fa7c68e6",
".git/objects/78/f297dde805bfd4358d3b41336ed4dd99c5f1f2": "30e05db34361011d26f074450a804f95",
".git/objects/7b/587c0a7ddd83a4c24a891c4a4947c30c95dea4": "47a86da7a577d0fa7815d6aeef7d56c1",
".git/objects/7d/4e7a72ff3166dbbbadc0a529935461a59a0976": "749e93ba779a0b24fca23023a7ee74e2",
".git/objects/7d/6ed7e9d99b66eca7f2b66056ffbee5c28370e1": "ed357ad300240f960f99d5954c728a32",
".git/objects/81/2cf27d2ea8a17b7c0082a2c91988fdd299ad31": "ce04743fdbfaecff52de8f4d97bcd669",
".git/objects/83/21b44ad8d1ffcef20becada9dd0b8a403e5da1": "4828da5f427dce43372d9e16f56c6e83",
".git/objects/83/b6788b192e4a6e56c5a2f7bbaf08ff9e255e3f": "5c9229291a65ec483b4cbe03096bc5f1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/6b33c9df14b230b13f6db0a950b830feb30113": "5629d6d7973a495f5f9c9d372494fc02",
".git/objects/86/326a65a32a21868b83fc7956c1073c0d01ebea": "625d1fe2b41100b689fe8a5dbd8471a8",
".git/objects/86/43415283e2bc946777ab97afe99c4dd3c11ac8": "e6dea4b1f1fa74e43715531af0d7c376",
".git/objects/86/4fc52e2afc37c640738370cdba7a4a15d6520d": "6ce471539d3101b9bc5695beea845afa",
".git/objects/8a/9ae4ff36f0dc6bc31df6b6b238d80f633e8688": "bde3d59c4af5799ca942a8dcba9ed800",
".git/objects/8f/00713029c09429e4a9995c10628ac7ad32f5f9": "1e0b705f0a120ab9d70dc0ace4a215cd",
".git/objects/90/236598eb6a2dbf07c9f0c948aabfe509bf9c53": "e124701b75c0e088acd359f7265491d3",
".git/objects/90/78ba0fc3f7cab5578406f0c9cb12623535db02": "8b3be5556e4687136511bcaf8c653d15",
".git/objects/90/9e3a598d29aa1ec2741847fc4ec9240435dfb2": "7038fac12011a5607457f229c236bd21",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/3bf567ac013f40668b21673e65babf7d3a7080": "f2bca4521a38ce55cbd88fcda5b73916",
".git/objects/92/551ffdbd59752fa902070a7082832d3a72c527": "dcf19825318d2bfc608ba51f77a03b56",
".git/objects/93/c7ef2a54f42a86b10fa07b178a1e05c1e09932": "37fa67404832f10ab4c0b897661463ae",
".git/objects/94/31d5c37f2dc9b50a97fb7234e1bca36c22ddb7": "0647b1a96b21f589fe60f1d4d40462b3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/46ecca130fd28799972c98606f789e93d06fb8": "c32912b826364676aea0aec4c58c67c4",
".git/objects/9e/21cc3d4b8cdaa2942d3ba2dc590546b3918ee0": "11e45d3b65c4def352e1d30a94f07a6f",
".git/objects/9e/30ae9f0bf8852326e8f6370f7dc6f1403f4575": "07e11f71d0f626aa1d421f948f90c955",
".git/objects/9e/4c165a998e0c595bc3e8e767fcd346043831a2": "2f4a0aaec211946f8a5ec116f7b7d46a",
".git/objects/9f/955cdfa9a640a479de284ca60e7143155965ba": "14d9e098955bbc404d5e4146c829da20",
".git/objects/9f/9a719f9259f99123ac136c1b41c2ad4346f012": "5121e4d12e3392941c6f0963d1580133",
".git/objects/a0/679470ac2c014c4039f89749ad3468b890c0b4": "9c539c52fd81c65e9ea5ed366e236131",
".git/objects/a0/7e54153b0f1691b4e3b624f481ce17ae018e43": "2ca71bcf46638cdce5c3c1714442d6a0",
".git/objects/a1/f937276ab2ec864a463445cf7de4052d8dabae": "205092f17809874dfeb27078961b9cf7",
".git/objects/a2/44f500c2a4f73b0c95f0b0debd2cd41ba49a4b": "ebd81e76648b3ec9fcf4212a5e7217f8",
".git/objects/a3/116b479f732adf7076d118879c4fbe60c80104": "d97940b05fdb68570b91f287d42449d1",
".git/objects/a3/e970e68cf38855a0dc258fe928d5725e941477": "372744673132afb28564763b56411b95",
".git/objects/a4/cb6a41e4004bb14ccfd5108071b30e7e743a7b": "0a1aa84c14c9a929f2075b8d4d1e3a3f",
".git/objects/a5/0f707b474ffed4827381e7c43cae6443a1926a": "d7a26a9f028c0ab1ba1c3601ecf8907a",
".git/objects/a5/fff64f7484649cf868a08359710f28c8dfe9c0": "0b5ba7ab1d97dd6dad99360e56188ba3",
".git/objects/a6/4dbb2146d82f0ececff08f2cea90cfb8eb56a9": "e4ec7ca9b119e5d1639dc417c5ffea19",
".git/objects/a8/a2e756c94c9ba0b013ceb044ce35149a8c3979": "2895e59ec7fe2938443f427cc542ca2d",
".git/objects/aa/8954d7a6bba4b1172d35646abfbcc84c2816f1": "19dfdd820720788b437cb5855105143d",
".git/objects/af/dfba1b955682bb3e5d876ef7b13639a3336712": "456e1daa11d99382462dd3acb065d7b4",
".git/objects/b0/2259df2b309fa4ab6e2080d6d59f6a7515b793": "73877dadf103f3a489c025ab0223d05b",
".git/objects/b0/650d450d8560a477bdbfe3a685e4a18495e6b4": "b0656d7456292deee4e7a75a443cf582",
".git/objects/b0/e67bff0002e0d4649059df312b8336ae089975": "94cf47bf924a3edbe42df8735adbb938",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/4ca5e653dfed94bc160e78d74d4d2eeef1c217": "552dd74c8646b3c05e915e87e62ad2e4",
".git/objects/b7/ad7ff4259eb63d8fda92f90427f59740de65f2": "cbe6fc9982cc966bab0f31366d12933b",
".git/objects/b9/303ad911ea7cfa38fe11a219bc4331d00659db": "d1cc1b29eb2ea6f7d992dab040df6a0f",
".git/objects/bd/8c85f0d21bfbd09f89f34dd9ba92fda7db074a": "5110fbbd440c8cbac8c38a1717aa0b2b",
".git/objects/c0/5902a520bea477a4e2f67ad8d75b38fedefb4f": "60bd659fdfb294d98ba9a5f52181bb59",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c0/aba46515aacdd1fdca6d7b0fbe906edc8172b5": "dbe75772d8a498e064421498840a1149",
".git/objects/c0/ea2289e29a8a6acb897e6c3a2b58e81a56e703": "aa3881084c01aaf334dcef74592c4f07",
".git/objects/c2/2d59dc4f44321e015d693f97130f195417ecb5": "1af3b0359041b3a7259480489b94a1b2",
".git/objects/c3/0849813cf55fb0c7a62c18e7c1247cc7d57c97": "4e89b3390ef9e78ca45fef470458b5e8",
".git/objects/c3/5a81e6ddb85c68762045205bf3ef058ce1495e": "8a325abf18918001ca8051f6d0510b5e",
".git/objects/c8/eeac9c2ca35a0d0332dd2b9f4525fc6320fb20": "7d2b65ef63ad266a99bcd61c8cd76cf0",
".git/objects/c8/fc30a277a5578f72bcaf3b1533724e5d8d8700": "53a701c5e867b00c8d4b9e9c2c078a7e",
".git/objects/ca/2295e2bb186a60303d5ce8d0a392dbc90fd443": "02c6856d20509a2f5dfdf5690145b5f2",
".git/objects/ca/7a167aaea2c2fdf1fe7d5d3557c1807a61ee3d": "7dfdb2a536d35075521dd089dae26f17",
".git/objects/cc/20ebeb993068d05ecdd0b40e4d68120d796b09": "4a00e5f50a92e098c14b6619994c12bd",
".git/objects/cc/427cb99fc99bbf0ad2e8e2e3da6ae277b88fb3": "2496c85414849f3a3ead3d68745437fb",
".git/objects/cc/c25b866d8604d53cd5a8fd3ce24432d6b19f21": "e78f413e156d59d6eb6706ff80f9857b",
".git/objects/cd/95b5cd429a2156fa8d25b1c649450d985bf809": "1f710141863cff62936017a1a5100890",
".git/objects/cf/160648d2f016d0395dfa0492e04201b0bf81ae": "d5daff2fbfe9e6c8bca36d1c7b0a26f1",
".git/objects/cf/2563d3f9892d70f28170800268aaa4e51fae06": "16e96c4479d40532801fee1087229b6c",
".git/objects/d0/1dac6d79807cea2cc1a1fc120745af79f97fa8": "36d4c55323e122d79f14db7aa797f411",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/c2b75e36536ec81c57dffac90616480abd9c07": "51e522cf0fcf5ef554c441dd631e11da",
".git/objects/d1/98375b102d2f0f0c0942f032b12541cd1b2c04": "f123b68404faa225fc42492aecb64edc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/24f850255b8c6812788e1812ddd36d8fc5136f": "5cd318f2a3440fe34b7437fc18f8bea0",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/b2f76c0409964a7fb91d21973ed938c480130d": "dc50030170e326bb5f331142896b819d",
".git/objects/d6/b80ad7afee8ff162e8167bcc7e557b866ddfa4": "9542a6d8aa7ab87546ad049e0d0905eb",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/91d1b9e60c477d33dffead844f1743bc489d2b": "4f94e52659de7a0027574b7b67385ab0",
".git/objects/d9/3f3ec030643913a1a7a98aa7a65a07a756ff00": "7525edf9314c2c5cbe2bc33a70547011",
".git/objects/da/cda3f53a4c7f05d1e4e8ae6440adb12d068381": "36406ddc597ab641b32aa9a7aac19b57",
".git/objects/da/f685daee2ee38cb79efc9ed4071acdd6ac5f82": "de8c629e6db60f284ee0f6b6ae90656b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/2f1f85c1720a90b0ecd3e1adb49a41e678fe31": "a263c5f0730902e9ef967b1990bc3bc8",
".git/objects/e0/5cc3c0a538742d27ced06905771b6330c73d74": "c0fafd5e1b95928f89f9125c3814f06a",
".git/objects/e3/1d4f49498deefd80550976abdffcb4a72586c1": "7fa1ae9a464a5608b2101bba141f7337",
".git/objects/e4/15652f1125d4e5e7c980335471fb0f6e81d6d9": "ac6726f02291cd03ed284d6c3ef5ba76",
".git/objects/e5/39050df9f773c58a611759a1b297dc835c14b5": "de1d9b468bb4803dab7cf66dd6612eb8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/0dfdad211137ae80a48057ba418e725abce1f7": "3ae5d0b9cd97e200f596d8043468a9f6",
".git/objects/e9/1b7312c75ac2472700f2121688a343812a1ae0": "2cbb84ee5b1224beb08a15284357fe1a",
".git/objects/ea/dc34937d26a673e75ca639168db0488a945970": "10498f4cd2d61d7f1c15f9aa862a46d1",
".git/objects/ee/f6bdd5e5c5ab9ae77b10e35dd4cf81619e557e": "73edb7ae334e01e2603da46fe914fb09",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/43cec4366909a95dc3da76afe2cdece74a43de": "627660e1d9abefee543b92b5e487d42a",
".git/objects/f9/afeb5f488182c4fa98036e189a198b6c9a6d70": "da25007456fc47b5e5004abbe05207e7",
".git/objects/fb/9121a7ec22d51acbd514911d5d847c9b100013": "b8ed3c430283a45577a5b13dcb251f34",
".git/objects/fd/f08038a804cd38a3cf4d86c58c74079161a45f": "0de2d8f0620e9901d700f9245a767830",
".git/objects/ff/bdea66abafae0806a6eeb5c3442404b70cb891": "d9b072907e3314fd06631c51e2cbc397",
".git/objects/ff/d7d8db99b8ac9b07a386f0b3ad8c63b73f7065": "f5dfffdf5557d3418a548b5fed37f351",
".git/objects/pack/pack-26396e78ad11432167da4fa0a71729321e7d12b0.idx": "b86ff16a5d091f44334036dcf43f3f60",
".git/objects/pack/pack-26396e78ad11432167da4fa0a71729321e7d12b0.pack": "70a7dd5dd2773a2bd61b29e1650554f7",
".git/packed-refs": "eb0ce7296d858843b75ea3f1e6365f98",
".git/refs/heads/main": "fc3c67c345c09513934b9cb33e214c70",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fc3c67c345c09513934b9cb33e214c70",
"assets/AssetManifest.bin": "9bc6a1232640de679aae9c788a9fc03f",
"assets/AssetManifest.bin.json": "aaa3fed8602be1b1fc18773862c24f98",
"assets/AssetManifest.json": "b5d99747e5ad7c9cf5c7e6dff4c31e3b",
"assets/AssetManifest.smcbin": "a2a57bff74bf15cac8255dcd5580e873",
"assets/assets/fonts/Staatliches-Regular.ttf": "0b1946eaefaeda766701618dba33e03c",
"assets/assets/images/admirals_icon.png": "08685363029f1abcfe2eecd45d8acb41",
"assets/assets/images/afi_logo_70.png": "70e6dd660863c32eae72f27631e19f61",
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
"assets/assets/images/stags_icon.png": "d08509b15ef4b07a8594921e928c1d5d",
"assets/assets/images/trinity_icon.png": "606b4ff5867f709339e009df44d2472e",
"assets/assets/images/trojans_icon.png": "b8c7d0ae1381ffe3ccc38734b06ffe51",
"assets/assets/images/ucd_icon.png": "b09f92457888e4b31e219663087069c9",
"assets/assets/images/vikings_icon.png": "8e0785453533d92740819524843ca288",
"assets/assets/images/vipers_icon.png": "9ecc100504cb08ec41e46e2544909ba1",
"assets/assets/markdown/about_us.md": "b187377e8adb9f30db64bf025ab2b869",
"assets/assets/markdown/the_game.md": "0d29c1ab743b9911237613e50c62655d",
"assets/FontManifest.json": "78421dcff29704ae90856d5213f09c6a",
"assets/fonts/MaterialIcons-Regular.otf": "ee7ed400a4cc9347ef35b7c262508cdd",
"assets/NOTICES": "d8c101f658b1a337b432068e4cf581b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1329fbd00f8869db605c88562132af33",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e6859c1d548ba1b2896a288f68f56f78",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "408bb2b06feb99bd459ec80a62bc5908",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f5f9b8db56139c6f7ec7dd286c2cb5a",
"/": "1f5f9b8db56139c6f7ec7dd286c2cb5a",
"main.dart.js": "a22f76b6667b56216e21c618b33a0552",
"manifest.json": "31c07dabb3a79feae807a4ec2e255d55",
"version.json": "fc9645dd4bfa97b5c13d087246648e56"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
