var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("localhost:27017/shopping");

// mongoose.connect("localhost:27017/shopping", null, function() {
//   mongoose.connection.db.dropDatabase();
//   mongoose.disconnect();
// });

var products = [
  new Product({
    imagePath:
      "https://2.downloader.disk.yandex.ru/disk/a4ba2a1abf79394de53d9beac598ef9f90eaef9af216cae78b8bcf68317d3ee7/594824d8/Hb8pU2HKixW2ixv_G2VVoJIqkz6gzCeKHPm0mo8ozoHYTY7DZE5yK6TS83q3AJ20UjU10jvnlfp2pMH0i72fTw%3D%3D?uid=0&filename=iphone7-plus-black.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=33792&hid=ae05ac40d51e8ad90203a9f52ec5a2a7&media_type=image&tknv=v2&etag=1339068041b5d7efa486735a5857f6ca",
    title: "iPhone 7 Plus Black",
    description: "Best smartphone for your choise!",
    price: 200
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/a0fb1210f4e7ff11c524e6f24caa8f952788543754c818a5b04f9cb4e26378e2/59483ee3/Hb8pU2HKixW2ixv_G2VVoPjayEu8d72jHPL6YP5Z2Dcv00j9r0dH4gpERr6SsOfYyrd5SIM2TNz7xaV2U7ggVw%3D%3D?uid=0&filename=apple-watch-sport-42mm-gold-aluminum.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=57057&hid=3cc523cf7e42536ac171c0ac5001c5d9&media_type=image&tknv=v2&etag=0c11f684e753044a4611fcbb9d531d07",
    title: "Apple Watch Sport 42mm Gold Aluminium",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/4e6202ad9670075324d933a4e013cc35e7946e68740ad2fb67fba6efba005242/5948253c/Hb8pU2HKixW2ixv_G2VVoEaEdMM7a83Ho1qldchYPDWAgKCytcJ2p9e8Pc9gZPIwa2iL_m6bM89vngb157RKew%3D%3D?uid=0&filename=iphone7-plus-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=39668&hid=57d9d9422c5a027cc78ea93d6300dda2&media_type=image&tknv=v2&etag=71fd5dbee5aebe64e8c5feb3e84d314d",
    title: "iPhone 7 Plus Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://2.downloader.disk.yandex.ru/disk/a8c3b830af8206af8858cd81c425d38e45b675b48a6710a15e56852045757018/59482719/Hb8pU2HKixW2ixv_G2VVoMyteRrlhLBJ31Coo1AOqExsl4qOgT_GozyPApcIXmZp88CeoCbf2qexZRUnsPETmA%3D%3D?uid=0&filename=iphone7-plus-jetblack.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=20020&hid=6905d4a5d32e4bbab7d5c3e121c33526&media_type=image&tknv=v2&etag=881cb6b245c1545d2f20b269043626cd",
    title: "iPhone 7 Plus Jetblack",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/859284d72fa45deb4a18592724277467d027a863505929f3df169b9396b7aa43/59483f39/Hb8pU2HKixW2ixv_G2VVoMAo6BgNCnldno0IXRjQ1JSQUolWOQDw8B7xgmYVDViRQG_Nj9G7zf8ujuW05q3vNA%3D%3D?uid=0&filename=apple-watch-sport-42mm-space-gray-aluminum.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=53300&hid=d3f9a5f154abd62283c94215ee74051f&media_type=image&tknv=v2&etag=cdee31d971bd94978529adfb660f5591",
    title: "Apple Watch Sport 42mm Space Gray Aluminium",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/26000a06cef925752fb4792ffa440226a83911e92b223d279200f19b84ea210f/59482780/Hb8pU2HKixW2ixv_G2VVoEmpgT8_iiL4sGm0ElaUcqFVWbq_iXerhrrDZz1gH7nS2lRLP5q4aRRF1uxa7i-peg%3D%3D?uid=0&filename=iphone7-plus-rose.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=37459&hid=a867efa94107e42059ddb2d337be5709&media_type=image&tknv=v2&etag=b50a984fae68934a3afb9cf871ad2151",
    title: "iPhone 7 Plus Rose",
    description: "Best smartphone for your choise!",
    price: 150
  }),

  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/7c3b71aa3c54e00106c06cd0d1cc75f7c2ddb1d7116a0b9610884660a2a48683/59483133/Hb8pU2HKixW2ixv_G2VVoOntsqewQU5maEHY3L-3DAv3oUXlJ-rodf57G_fq-SiM4qMBFJ2Epu4nOavDKYSB1A%3D%3D?uid=0&filename=iphone6s-plus-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=80120&hid=533ae0b3b918ac580536852b2ac62515&media_type=image&tknv=v2&etag=c7408fd79ebd40fa8dce2e1e38242550",
    title: "iPhone 6S Plus Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/54d1e6d79dd828aa57af191578034686772dc041845688cdc4cc570c0cb906a2/59483186/Hb8pU2HKixW2ixv_G2VVoKx95sLF32UwhtP99Mn4CEx5reCeOlAxIwions-XI8MMEgLphwdMmb-vGrq5IPm-jA%3D%3D?uid=0&filename=iphone6s-plus-gray.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=83028&hid=88f642556e3ff64e15502af6631212b0&media_type=image&tknv=v2&etag=ae4d00e3724bc76f508dcc50a804b365",
    title: "iPhone 6S Plus Gray",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://2.downloader.disk.yandex.ru/disk/814540883719cc28b41e5081f348970d1edc35be1dc1e4478b3d21f9bfbc5e51/594831cc/Hb8pU2HKixW2ixv_G2VVoDXXVVgcTRovtZrDM8ve6w2oS-kIAqTQIsWa9b6JoQ2ystMaTtOU25nkdTS-1OIoTA%3D%3D?uid=0&filename=iphone6s-plus-rose.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=90757&hid=9505ee671e33c8031a5b014b778e0f1d&media_type=image&tknv=v2&etag=0b4d4ba5a1e1997422ab37ecad9e108f",
    title: "iPhone 6S Plus Rose",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/945d4102e98a73c1f78d345e687b4290dd5712d4521c1839633eba53517feacc/5948320f/Hb8pU2HKixW2ixv_G2VVoHJN2TzWCNAANcZnECmXm7yiJFYJuBqGvT9X65pUiBFpa-Wfnlmfov7f5ptiK8FPJQ%3D%3D?uid=0&filename=iphone6s-plus-silver.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=87197&hid=c31723feef1f4368ed831fee06bf8ab5&media_type=image&tknv=v2&etag=3a6e5ff0e9b79af361fa855037655639",
    title: "iPhone 6S Plus Silver",
    description: "Best smartphone for your choise!",
    price: 150
  }),

  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/2ff3b420887ffc1b514ba6327df3902ec6dd6e25f06fc20eb60eb6109ff8b20a/594832b7/Hb8pU2HKixW2ixv_G2VVoI-9LxY8DaV3LnSFk2Zwk5_7zFMYY8CyuXnplL2yC09M2ijQyW1cWNiuFZI3cpX4OQ%3D%3D?uid=0&filename=iphone6s-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=61040&hid=34e25962b92fe69d6343017b1384d9f2&media_type=image&tknv=v2&etag=f04975a2e67492a4f998f95542bb86de",
    title: "iPhone 6S Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/11aa8b2a891776e48c0e543c7e8ccb0c7d8a3ce785d49be8b44007d4934522b5/59483303/Hb8pU2HKixW2ixv_G2VVoPXSWWiE-YirQsz-eY1oV4nVk5T_xEI3IXBWLg2uDk2R5fnDRrShCjtaj2EYivwT6Q%3D%3D?uid=0&filename=iphone6s-gray.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=69677&hid=b1319796788a2cda7e6448184468e7eb&media_type=image&tknv=v2&etag=f0c6e8fbd27532cdf741d918e4d94c69",
    title: "iPhone 6S Gray",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/3ef76d223ac3962760234868cd19d98ed20b559145c5af782f369dd5ea779395/59483342/Hb8pU2HKixW2ixv_G2VVoLMhA63DKGYlUXZ2HvDRmuiz1a5Gws7ZZf89rPBdxPYJO7XW2zQ0VbhudPIU7sdHgQ%3D%3D?uid=0&filename=iphone6s-rose.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=77261&hid=27ef4fa356eb7920dbb5554ff606e01f&media_type=image&tknv=v2&etag=de7a48ee4a4f65d902b3c22499e0011e",
    title: "iPhone 6S Rose",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/f8b1b68452013df0191999942e8929f11589f18cd88d06bd936e73a2a820ae03/5948338b/Hb8pU2HKixW2ixv_G2VVoNc06HtIuCYh7cL-1H6pXDTgF4e9P9smyVEOVbX7Q2o7aYK3QKVktl-bj2A6d3_Zaw%3D%3D?uid=0&filename=iphone6s-silver.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=63539&hid=2501445df5cf520cb308ed407663c6e9&media_type=image&tknv=v2&etag=c121279547a52f74c66445e611bfeaf9",
    title: "iPhone 6S Silver",
    description: "Best smartphone for your choise!",
    price: 150
  }),

  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/8d42ae3748c23ee041344e76e7a1a5c36501fdcf23c84c82fc6f62530d9412d4/59483441/Hb8pU2HKixW2ixv_G2VVoDFDR34SXv_m2oleoqkHdDKCLjJTOOkaT1UZvoa0BTktkRFF7esCFCBo7O_F1JXKBQ%3D%3D?uid=0&filename=iphone6p-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=111730&hid=2da206ac6abc4d9e943af551be2e4b3e&media_type=image&tknv=v2&etag=d35c59e8907e78dbdeef9a3771ba9e61",
    title: "iPhone 6 Plus Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/7458e4c2ae38cca6d131fd0f9f0072f1977896874a1f7a4fd7e1a7b3b547705e/59483492/Hb8pU2HKixW2ixv_G2VVoHQt0nSXQj0JscqdC-MCTRUX_cBj4qEZ9ArFOl69xIbf1aD2C-rrL-3KbT_A5bFe-A%3D%3D?uid=0&filename=iphone6p-gray.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=112068&hid=511f947b8da3d761924c4b1a4ef578d2&media_type=image&tknv=v2&etag=52db19179c209f3c6e1f5f9a10056d5b",
    title: "iPhone 6 Plus Gray",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/f62940b700a47036628f6ca622f655fad38e80e00ba3952e0620384f8603c10a/594834dc/Hb8pU2HKixW2ixv_G2VVoAAJLXwaAKXnXv1S-cPLnqrhxVg_YMe3Agw1JpRokNr2mlxd2VtFz99XJqEbBGMonQ%3D%3D?uid=0&filename=iphone6p-silver.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=109766&hid=7dfbd78ab835aaad12d1b9b189c062a1&media_type=image&tknv=v2&etag=22824342929f4ccd98526e122634a723",
    title: "iPhone 6 Plus Silver",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/5ccc5c3bfc6398d33b506cbce96d05aa5965422f6e8657ab6aec3999a5cc582d/59483c53/Hb8pU2HKixW2ixv_G2VVoKhB8BtRpqiusEV5T2CiTUlMQDeumlIuIlN453mQSvSXcjx1q6ASHW47U_2bXfQSwg%3D%3D?uid=0&filename=iphone6-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=92822&hid=7f2a5869484a2af48ea605d5fcbc4e4e&media_type=image&tknv=v2&etag=e45dec1c9a597714486791a8f5ecf9c7",
    title: "iPhone 6 Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/ada74030151a7c6f5ccc38259b970a2de05d1d2d2592fad02da3412134d64bb6/59483ca7/Hb8pU2HKixW2ixv_G2VVoJAfR1JWYvlT_cywpd53hkyYmhLwHod1dIgJgfxllsOB_dGolWXjATJ8neQsK_2u4g%3D%3D?uid=0&filename=iphone6-gray.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=90540&hid=16e54fbfcd5cddb9b59e049100656b24&media_type=image&tknv=v2&etag=6962092048b84ad567ce2bbbcb72c1bb",
    title: "iPhone 6 Gray",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/4353744bae13a9b8e72f5cf5c44226cb76040cfcb1c217e51676c11a1345cf48/59483ce7/Hb8pU2HKixW2ixv_G2VVoBLO7-rHK2RoiUzYTC7EEfQ5MF7aMfdJADUfI_7mpAfNpjmd9ihr_q4julg-qPmP1w%3D%3D?uid=0&filename=iphone6-rose.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=94433&hid=14b38fb4c3ca80004ca4cdf46102e3a3&media_type=image&tknv=v2&etag=4aa095bf7c06d8d11e3bcd12b29a28e0",
    title: "iPhone 6 Rose",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/dc7840bde21e958ad55cf3cd6c4955404540370e5f4abcb3bf73fc123d5edd8e/59483d23/Hb8pU2HKixW2ixv_G2VVoJS4c611mgRhLYK9nprt5kUZj2RLd9QnlOhhWPF6D6kN_KcRzTkrk-sDf4Afm1V_hw%3D%3D?uid=0&filename=iphone6-silver.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=89866&hid=d87fc85610c204913a4eb04d45589f83&media_type=image&tknv=v2&etag=93f3dacfe5b5ac9056bc450eff120ae3",
    title: "iPhone 6 Silver",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://3.downloader.disk.yandex.ru/disk/98cabac5d8637a0cb47fc88a09a6b3aa0d90d1bcaa1ad112d7e6496802124557/59483d8f/Hb8pU2HKixW2ixv_G2VVoOnawlblHoQvuFmOst_PZd9fUltUuGlQf9w01OIO6AMjBajBU1xJk_V2jQIG_NbA7A%3D%3D?uid=0&filename=iphone5s-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=103071&hid=848de1280330badf13b8e40857e33341&media_type=image&tknv=v2&etag=b09070dd4f47b81d8fe443df69dc01b3",
    title: "iPhone 5S Gold",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://4.downloader.disk.yandex.ru/disk/c11dbd042e8174d7c12e02d3cb76ff9cc5e1b76d0c8c6a6c091bcc4ee6fb18be/59483dcb/Hb8pU2HKixW2ixv_G2VVoNUJpt780HYCqzC7--_osk3TU6BMALzZr9FeHc3mXGmctbRCQK4c9tdM8ap7sPqxjw%3D%3D?uid=0&filename=iphone5s-gray.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=98696&hid=f190df56d02a660e642ebf216bfea118&media_type=image&tknv=v2&etag=7c5273593e6052a7c57d0a5f58a350c1",
    title: "iPhone 5S Gray",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://2.downloader.disk.yandex.ru/disk/478eb55e5c89baa3c5046b5d7994a06f5aa35b4cf6178fc3307078ab5f96425d/59483e0d/Hb8pU2HKixW2ixv_G2VVoE_jA_fXrwUCMMNDt4JgyrgVk_fR6YwcjjaYPdxMqdm0R5nDtcj5IBeTO-_Fd3LMVQ%3D%3D?uid=0&filename=iphone5s-silver.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=95627&hid=f36ccec001b9f0d28334f53ead1db6d0&media_type=image&tknv=v2&etag=2fdd206a2fadf5d9c16d88a144149e20",
    title: "iPhone 5S Silver",
    description: "Best smartphone for your choise!",
    price: 150
  }),
  new Product({
    imagePath:
      "https://1.downloader.disk.yandex.ru/disk/d17ee9de69ca706ea6eb5b298810b2c36adf8d4b77b3bb4274de9e10edeaa60e/59483e7c/Hb8pU2HKixW2ixv_G2VVoHHBTnB3Q1JyIneNLXyhXvhcHaW0lrwwKn4XIbnMstNR5H66EiKGeolnMJ4ijS-qhA%3D%3D?uid=0&filename=apple-watch-sport-38mm-rose-gold.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&fsize=52095&hid=43e75d09ee8341c9f10231abddbd803a&media_type=image&tknv=v2&etag=ab1d450437d8c89d3b07f3c08667afb6",
    title: "Apple Watch Sport 38mm Rose Gold",
    description: "Best smartphone for your choise!",
    price: 150
  })
];

var done = 0;

for (pro of products) {
  pro.save(function(err, res) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
