import { Component, OnInit } from '@angular/core';

interface pixBayArray {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

@Component({
  selector: 'app-pix-bay-images',
  templateUrl: './pix-bay-images.component.html',
  styleUrls: ['./pix-bay-images.component.css']
})
export class PixBayImagesComponent implements OnInit {

  public pixBay: pixBayArray[] = [
    {
      id: 2295434,
      pageURL: "https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/",
      type: "photo",
      tags: "spring bird, bird, tit",
      previewURL: "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g860a28b2f579bc11c5e26a6b70737f16042c02704847fa3dc3b825c6d1538050d526babf0321445a9d9900fd76adc55f3932a84f13175e82426343a2a22591a2_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g5069643c577ba5457417e08d37c62b258323173694130bc817e63b0e9b8792b7697bb4f2ba4adcc0f21f106c20d0c58d78f2ebddde51be2052ebbd69d497046d_1280.jpg",
      imageWidth: 5363,
      imageHeight: 3575,
      imageSize: 2938651,
      views: 491626,
      downloads: 264606,
      collections: 1913,
      likes: 1850,
      comments: 222,
      user_id: 334088,
      user: "JillWellington",
      userImageURL: "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
    },
    {
      id: 3063284,
      pageURL: "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
      type: "photo",
      tags: "rose, flower, petal",
      previewURL: "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g41d2107af34425b2cccc6fdd766685e5e8777bda76f86a031724bd00e062ffb92e1de9860ef520aef4416fed77e407f59067e3f8ad3d279465ad6aca719cecfa_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g84eb20043530223d7b5973b8ff4de7ba8996af394182cc5f9f59dc4a12e6d48d5dc6eca81d52ed72356a84c573faca4462c48f3385c11d90ce68118864322954_1280.jpg",
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3574625,
      views: 965002,
      downloads: 623773,
      collections: 1312,
      likes: 1456,
      comments: 317,
      user_id: 1564471,
      user: "anncapictures",
      userImageURL: "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg"
    },
    {
      id: 3050078,
      pageURL: "https://pixabay.com/photos/fog-woman-meadow-flowers-tender-3050078/",
      type: "photo",
      tags: "fog, woman, meadow",
      previewURL: "https://cdn.pixabay.com/photo/2017/12/30/13/26/fog-3050078_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g53dbe9430636d8d38b58dab24e406ec0a454d222afe75e0a7cbb302fc834aa197f6a47b991e201e136f589a809305e03385bf86b6e0d480eb6d79228003657ee_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g44a942616085cc2c7cf20710be4b5a6ca6145ce8fcee8c9e2d8ed241b21a616f7493c16ea408315c38ca91226fe821aedb5a5c85a2035cc8d17fc99489a1cde2_1280.jpg",
      imageWidth: 5472,
      imageHeight: 3648,
      imageSize: 3473927,
      views: 118104,
      downloads: 76970,
      collections: 2196,
      likes: 546,
      comments: 78,
      user_id: 6663646,
      user: "ThuyHaBich",
      userImageURL: "https://cdn.pixabay.com/user/2017/11/17/08-35-57-188_250x250.jpg"
    },
    {
      id: 2145539,
      pageURL: "https://pixabay.com/photos/crocus-flower-wet-spring-2145539/",
      type: "photo",
      tags: "crocus, flower, wet",
      previewURL: "https://cdn.pixabay.com/photo/2017/03/15/09/00/crocus-2145539_150.jpg",
      previewWidth: 150,
      previewHeight: 91,
      webformatURL: "https://pixabay.com/get/g3196cade874d6d5460c46fd710f0b8fccaf9893eea0f2fae822f3e9928fb474d7d4c4935f9ab86b88cc75e3ace86cd3b1dd01b46eeaf4275b908517010ad6bd9_640.jpg",
      webformatWidth: 640,
      webformatHeight: 390,
      largeImageURL: "https://pixabay.com/get/ga8e49c79d19b3de060e60a671d4c6efb3cf44edbf26ca5209a573ae3e5f94c636b121eb85149ae15041f72ff97e77893370b8b95877a51a55e60a7da8c037f7a_1280.jpg",
      imageWidth: 4000,
      imageHeight: 2443,
      imageSize: 823922,
      views: 127261,
      downloads: 82640,
      collections: 1712,
      likes: 667,
      comments: 68,
      user_id: 2364555,
      user: "pixel2013",
      userImageURL: "https://cdn.pixabay.com/user/2020/07/25/21-10-11-80_250x250.jpg"
    },
    {
      id: 1536088,
      pageURL: "https://pixabay.com/photos/sunflower-flower-plant-petals-1536088/",
      type: "photo",
      tags: "sunflower, flower, plant",
      previewURL: "https://cdn.pixabay.com/photo/2016/07/23/00/12/sunflower-1536088_150.jpg",
      previewWidth: 150,
      previewHeight: 98,
      webformatURL: "https://pixabay.com/get/g0ce2f95991e47744df9dd62ce6891e3f9aed0935e1b60789fdc0f69c2079747710fdb6c7d23f70c4dd794baf490db466e0a268b5a39e7fad6cd51982d9e2458c_640.jpg",
      webformatWidth: 640,
      webformatHeight: 419,
      largeImageURL: "https://pixabay.com/get/g962bad8c337149294cf1c2ce3d07048744be8e5cada08b5ecc990a56d99e9a088742c29f5e838975e539189389e23ed35964fb31ce29991c862a30a01016c9ef_1280.jpg",
      imageWidth: 4896,
      imageHeight: 3208,
      imageSize: 5103399,
      views: 379453,
      downloads: 107483,
      collections: 1683,
      likes: 528,
      comments: 87,
      user_id: 1195798,
      user: "1195798",
      userImageURL: ""
    },
    {
      id: 887443,
      pageURL: "https://pixabay.com/photos/flower-life-yellow-flower-crack-887443/",
      type: "photo",
      tags: "flower, life, yellow flower",
      previewURL: "https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg",
      previewWidth: 150,
      previewHeight: 116,
      webformatURL: "https://pixabay.com/get/g5dbdf1aa748ed7dbc2d033ec87c195760e1b88a7efc73d73566ed46233eb0ea019352f1bf2b20544e0e9cd136a60dd89_640.jpg",
      webformatWidth: 640,
      webformatHeight: 497,
      largeImageURL: "https://pixabay.com/get/g0dd1686ebb96d9833ce017de8ae1155ea3b8d7b6402875ac5048dba4ad5e17440c77dbf311776378bb0291e600c1471862621f075e3e9b3a86019f4855c4877a_1280.jpg",
      imageWidth: 3867,
      imageHeight: 3005,
      imageSize: 2611531,
      views: 298316,
      downloads: 178864,
      collections: 807,
      likes: 1063,
      comments: 180,
      user_id: 1298145,
      user: "klimkin",
      userImageURL: "https://cdn.pixabay.com/user/2017/07/18/13-46-18-393_250x250.jpg"
    },
    {
      id: 1127174,
      pageURL: "https://pixabay.com/photos/sunflower-flower-plant-petals-1127174/",
      type: "photo",
      tags: "sunflower, flower, plant",
      previewURL: "https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g2e847fbde827eb250ef235ee112cfe8e67c98d93bb8cd9014cb8f0edae2bcdec63adc5c553c6e81c8396b7c63a35aa89f0b00716809ad0aa744dd78e107eb857_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/ge92ea116796adb1b494fb73da9b1ed4a17e2738880726fd45ec94efe9ffab70767d645f865d6f0c578dc96a14f2119b2fbcdd2f788054a558fbd42b1770b294f_1280.jpg",
      imageWidth: 4752,
      imageHeight: 3168,
      imageSize: 3922163,
      views: 364543,
      downloads: 225946,
      collections: 962,
      likes: 951,
      comments: 129,
      user_id: 1445608,
      user: "mploscar",
      userImageURL: "https://cdn.pixabay.com/user/2016/01/05/14-08-20-943_250x250.jpg"
    },
    {
      id: 4269753,
      pageURL: "https://pixabay.com/photos/bike-bicycle-yellow-flower-4269753/",
      type: "photo",
      tags: "bike, bicycle, yellow",
      previewURL: "https://cdn.pixabay.com/photo/2019/06/12/16/59/bike-4269753_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g9fe365a3c1cb0794d4bbf6491ae58eb3e2e30614bf192d23ba371a73acddd0733a3900b63d2118eb5d89a26bd95cdc261ea33ba89117c98c4e922d0c347e93fe_640.jpg",
      webformatWidth: 640,
      webformatHeight: 425,
      largeImageURL: "https://pixabay.com/get/g49e41419afa76a42ede5670a17986c8224dfdf259fc7d3e7e4ecc2ecbf55de0f1cd7f67aaceb78a33bdc7d222f6b2be37f338843adaa5a1834cee3b7d2cce168_1280.jpg",
      imageWidth: 5956,
      imageHeight: 3960,
      imageSize: 3749727,
      views: 15928,
      downloads: 8988,
      collections: 1765,
      likes: 75,
      comments: 14,
      user_id: 12474261,
      user: "nahidhatamiz",
      userImageURL: "https://cdn.pixabay.com/user/2019/05/15/19-20-50-294_250x250.jpg"
    },
    {
      id: 1643794,
      pageURL: "https://pixabay.com/photos/sunflower-bee-macro-pollen-1643794/",
      type: "photo",
      tags: "sunflower, bee, macro",
      previewURL: "https://cdn.pixabay.com/photo/2016/09/04/12/05/sunflower-1643794_150.jpg",
      previewWidth: 150,
      previewHeight: 113,
      webformatURL: "https://pixabay.com/get/gedb5e0dad39c36f2c7788d7c8ada36cb8dd0962d28cbfac00871082cdeafc93a7969433d4b7f84eeb23ce4332d83b96fbd5c6e5b1ef03ac45f2242b26ae469cf_640.jpg",
      webformatWidth: 640,
      webformatHeight: 484,
      largeImageURL: "https://pixabay.com/get/g1b14db04b09ddb0fc84b916f22ca3136944164f7b9b14ff3597f2ca3d20f96eb97040e54a480d0c2795517f2fea5219e2adc662486bf73fd8e29400fc756c471_1280.jpg",
      imageWidth: 5285,
      imageHeight: 4000,
      imageSize: 5457910,
      views: 128646,
      downloads: 92365,
      collections: 1391,
      likes: 434,
      comments: 41,
      user_id: 686414,
      user: "Alexas_Fotos",
      userImageURL: "https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg"
    },
    {
      id: 3113318,
      pageURL: "https://pixabay.com/photos/sunflower-nature-flora-flower-3113318/",
      type: "photo",
      tags: "sunflower, nature, flora",
      previewURL: "https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/gf4ee1ed4fce3a8cc3ab5d1112d6ebe39d176aa30490915f497dba452102f47968ab072ebc81d0a8ddd49891c25ba53f02e983d293ee37605f18e20b35acb0847_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g33757da627cf6368a1656d73c6bf90dd3555ef0ca6dc462a942e1372214e9efd7526435b6c6f6e1b25246b3384daeac3e07cecef54fbfe124288e6a45e7185c3_1280.jpg",
      imageWidth: 2736,
      imageHeight: 1824,
      imageSize: 1026006,
      views: 551456,
      downloads: 404084,
      collections: 657,
      likes: 964,
      comments: 153,
      user_id: 7410713,
      user: "bichnguyenvo",
      userImageURL: "https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg"
    },
    {
      id: 190483,
      pageURL: "https://pixabay.com/photos/bike-bicycle-wheels-bicycle-wheels-190483/",
      type: "photo",
      tags: "bike, bicycle, wheels",
      previewURL: "https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/ge0b86ca18a40aae5ae7e50a85bcee8776e8036691e1b4a00452889717fd5847057de2e5477114b3644a39841b76a24c4_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/gb05722c1f258f543ea609c3b7ad67fa72f74b5ae02568af9c18b3b7a7ee80683163fe014f5f2d67c69d79e7bcf0c6068b212d13ae017f7c829d469c98e0e33f7_1280.jpg",
      imageWidth: 2160,
      imageHeight: 1440,
      imageSize: 2093738,
      views: 145308,
      downloads: 50382,
      collections: 1276,
      likes: 410,
      comments: 62,
      user_id: 55851,
      user: "danfador",
      userImageURL: ""
    },
    {
      id: 1144084,
      pageURL: "https://pixabay.com/photos/poppy-fields-landscape-nature-1144084/",
      type: "photo",
      tags: "poppy, fields, landscape",
      previewURL: "https://cdn.pixabay.com/photo/2016/01/16/22/03/poppy-1144084_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g6580df0dfaa98be0016fce46c240356bcaae4d2dfd6c1a9e06a9fa75f5a02021c27fc5a4507031d022f42a4c408cf0caf9eb94957fa3c8f4081bc3f9fef0c361_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/gdbe4bd63a4f94601cb21c19ba05014a9c8b18ea9692c2f7af9132d4f827891038843ab666ef76bfc24afff67ce0bbd67e773b06151fe55b670d763082c19748d_1280.jpg",
      imageWidth: 5760,
      imageHeight: 3840,
      imageSize: 3692207,
      views: 68932,
      downloads: 39435,
      collections: 1338,
      likes: 313,
      comments: 36,
      user_id: 1798295,
      user: "WenPhotos",
      userImageURL: "https://cdn.pixabay.com/user/2016/01/12/16-44-55-409_250x250.jpg"
    },
    {
      id: 3790834,
      pageURL: "https://pixabay.com/photos/hd-wallpaper-nature-wallpaper-3790834/",
      type: "photo",
      tags: "hd wallpaper, nature wallpaper, sunflowers",
      previewURL: "https://cdn.pixabay.com/photo/2018/11/02/19/04/sunflowers-3790834_150.jpg",
      previewWidth: 150,
      previewHeight: 98,
      webformatURL: "https://pixabay.com/get/g7d48aa584db0a5ef88f8f6cd92d18a4d49c637a1e0598974920b7c678c71f95965fd195ab69092621196cb5516d15e144fef11d2f597ae9dfda1763116fa2e3e_640.jpg",
      webformatWidth: 640,
      webformatHeight: 420,
      largeImageURL: "https://pixabay.com/get/g3f718efcee97bd0dc1415136f6b3297ccd9a04376a5fee99141f6e8fb5c2e4428eb5efe8478c78bcd90a82b80fa77db73a091746191296bbfa2a44a82aab8711_1280.jpg",
      imageWidth: 5284,
      imageHeight: 3472,
      imageSize: 4680771,
      views: 56239,
      downloads: 34441,
      collections: 1385,
      likes: 240,
      comments: 51,
      user_id: 165106,
      user: "suju-foto",
      userImageURL: "https://cdn.pixabay.com/user/2022/05/25/18-12-48-180_250x250.jpeg"
    },
    {
      id: 2333326,
      pageURL: "https://pixabay.com/photos/woman-model-portrait-yellow-flower-2333326/",
      type: "photo",
      tags: "woman, model, portrait",
      previewURL: "https://cdn.pixabay.com/photo/2017/05/22/07/20/woman-2333326_150.jpg",
      previewWidth: 100,
      previewHeight: 150,
      webformatURL: "https://pixabay.com/get/gb68f5b1c05ff5f67bf029e18e2673b34e132569a12cda1d4d6cbc78683a214c39bd24f142d245e33bac9a7aed612ad1b38f01c6c38810e542f04aff54fa08cc7_640.jpg",
      webformatWidth: 426,
      webformatHeight: 640,
      largeImageURL: "https://pixabay.com/get/g526af70da14d0a6a21ca2db318ef5f1b25a1d7ded87db7f07b6aabc467bd0ca29937ccc9e3b0a30402b7727e6312eb5568062753427c0dbfe1a56558899b6990_1280.jpg",
      imageWidth: 2592,
      imageHeight: 3888,
      imageSize: 2990930,
      views: 89374,
      downloads: 64394,
      collections: 1311,
      likes: 328,
      comments: 27,
      user_id: 3656355,
      user: "Engin_Akyurt",
      userImageURL: "https://cdn.pixabay.com/user/2018/09/20/08-02-23-312_250x250.jpg"
    },
    {
      id: 2404769,
      pageURL: "https://pixabay.com/photos/summer-field-nature-grain-2404769/",
      type: "photo",
      tags: "summer, field, nature",
      previewURL: "https://cdn.pixabay.com/photo/2017/06/15/10/25/summer-2404769_150.jpg",
      previewWidth: 150,
      previewHeight: 100,
      webformatURL: "https://pixabay.com/get/gfc8950c1444aa3c0b839b7811cc2badb1230e61031ce893cf12667bf852e75f8aaf63ac4188b370852ae8c3eacdddfaff54801cdb0a6dd1a437eec153ea16dcf_640.jpg",
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL: "https://pixabay.com/get/g7d74dfd7c223dd20bd4c22580a5aac4ef9418b29c92926f9a1c1b2c3c4915981dc6cb79fb735665407b28a4f5f228b13168eb1f972bb3e0ce7ae281923c134be_1280.jpg",
      imageWidth: 6016,
      imageHeight: 4016,
      imageSize: 4290219,
      views: 87448,
      downloads: 49918,
      collections: 1098,
      likes: 376,
      comments: 42,
      user_id: 4331363,
      user: "geraldfriedrich2",
      userImageURL: "https://cdn.pixabay.com/user/2017/02/22/12-32-00-453_250x250.jpg"
    },
    {
      id: 1972411,
      pageURL: "https://pixabay.com/photos/drip-yellow-petals-globules-water-1972411/",
      type: "photo",
      tags: "drip, yellow, petals",
      previewURL: "https://cdn.pixabay.com/photo/2017/01/11/17/27/drip-1972411_150.jpg",
      previewWidth: 150,
      previewHeight: 87,
      webformatURL: "https://pixabay.com/get/gd489743817ac5d188e8a02f2140bfcbefc50c8a4bf35b7d82aa2e36bbff542c9896a129b5f4dd40020cbe634996efa88178dd8706ba4263460c56ea55095c8ea_640.jpg",
      webformatWidth: 640,
      webformatHeight: 372,
      largeImageURL: "https://pixabay.com/get/gfc2196a87732a649eb6a5562cfd35c1ebc425f589bbe657af2e700e8693746e14a32d489c31a4683561e92aaa81d878e4f020e7a873e974f9e19147373ddab6c_1280.jpg",
      imageWidth: 4288,
      imageHeight: 2499,
      imageSize: 1510459,
      views: 132551,
      downloads: 108708,
      collections: 1056,
      likes: 408,
      comments: 61,
      user_id: 1777190,
      user: "susannp4",
      userImageURL: "https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg"
    },
    {
      id: 4217683,
      pageURL: "https://pixabay.com/photos/flower-petals-raindrop-rain-4217683/",
      type: "photo",
      tags: "flower, petals, raindrop",
      previewURL: "https://cdn.pixabay.com/photo/2019/05/20/21/34/flower-4217683_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/gbadec052d165daa4754b0f2043f0819a0de79e64f16149db12927669172a9cc1c2a1b32d50b0d2229105133f15e3cb596b7ed8e645669d51576bcf8dc11be00b_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g25feb9a5c628f9dd7f077f11d24f2ed94dc3036c0c084747d6186ba62dec029e69696ee2112ebaf177658a5621601b3ed4fffbba36289b53d98c1a98ef19b78b_1280.jpg",
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3816865,
      views: 309726,
      downloads: 285611,
      collections: 1143,
      likes: 259,
      comments: 117,
      user_id: 5602247,
      user: "JACLOU-DL",
      userImageURL: "https://cdn.pixabay.com/user/2019/06/26/14-23-27-979_250x250.jpg"
    },
    {
      id: 1319114,
      pageURL: "https://pixabay.com/photos/girl-flowers-model-lying-down-1319114/",
      type: "photo",
      tags: "girl, flowers, model",
      previewURL: "https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319114_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g799c6b454de9be8eb69a1ca784e163fde6d862309d3f59b53f49dc9383e3ecd98fdb800c29b5275fb86179ab4d8b3c1613b2a7b6dbede8a28b310f1f0f20b77f_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g7f7f38c19b9492ff17a6df29ac70f770b0afd0b213913a43368354166978be4b9cb4f517b7cb143156fb1e2339dcb61e2f20f9927ed3235412582347dfbe68a2_1280.jpg",
      imageWidth: 4272,
      imageHeight: 2848,
      imageSize: 3837334,
      views: 136157,
      downloads: 73877,
      collections: 944,
      likes: 404,
      comments: 39,
      user_id: 485024,
      user: "AdinaVoicu",
      userImageURL: "https://cdn.pixabay.com/user/2021/08/26/18-40-56-500_250x250.jpg"
    },
    {
      id: 1627193,
      pageURL: "https://pixabay.com/photos/sunflower-yellow-flower-pollen-1627193/",
      type: "photo",
      tags: "sunflower, yellow, flower",
      previewURL: "https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_150.jpg",
      previewWidth: 150,
      previewHeight: 99,
      webformatURL: "https://pixabay.com/get/g55c6d35e15ee7128f765f37576700840b733d2ec3d66206323fd69fa7088463dd4923dcfcd6fe2b14858a2ef0a81345c3d1b493836d60d5222d27f8338fffedf_640.jpg",
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL: "https://pixabay.com/get/g9f246532e51ef4d3c8c237d44a9b31ea5f689857c71de7673444f713322e616857c5875a58f7706033edea505d8fa594d90db6aa7ec7fa5b5c0eee0eb62298e4_1280.jpg",
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 5414839,
      views: 260672,
      downloads: 119683,
      collections: 686,
      likes: 619,
      comments: 117,
      user_id: 1834854,
      user: "ulleo",
      userImageURL: "https://cdn.pixabay.com/user/2022/02/27/09-13-19-744_250x250.jpg"
    },
    {
      id: 5219524,
      pageURL: "https://pixabay.com/photos/yellow-leaves-tree-flowers-blossom-5219524/",
      type: "photo",
      tags: "yellow leaves, tree, flowers",
      previewURL: "https://cdn.pixabay.com/photo/2020/05/25/17/12/yellow-leaves-5219524_150.jpg",
      previewWidth: 150,
      previewHeight: 100,
      webformatURL: "https://pixabay.com/get/g3bb5af0fba3a92853cb6acb8976945564101f0ce697c0d21d9d52b26022ad655ea976460be18b48f4c35f27b45d24e06ffab07904c91c41d5fb31ad4fbbdc6b3_640.jpg",
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL: "https://pixabay.com/get/g1cb178a7409eb3ae1c6edb0ed4ff3d59d7d05daca99a9a96d9c3d974ce7e59b8d9b37583a340aef5f88363908092445d02d8e855a4e8f0364d3699485150b04d_1280.jpg",
      imageWidth: 3999,
      imageHeight: 2666,
      imageSize: 2010562,
      views: 31274,
      downloads: 18898,
      collections: 1185,
      likes: 154,
      comments: 37,
      user_id: 13458823,
      user: "viarami",
      userImageURL: "https://cdn.pixabay.com/user/2019/08/29/18-08-11-822_250x250.jpg"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
