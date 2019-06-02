Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    current:0,
    swiper_height:0,
    swiper_item_length:[11,4],
    kinds:['建筑','卫生间'],
    structures:['凹形遗址','丙组基址','文字博物馆','车马坑','仿殷大殿','妇好墓','甲骨碑廊','甲骨碑林','甲骨窖穴','甲组基址','乙组基址'],
    wcs: ['门东卫生间', '门西卫生间', '丙组基址卫生间', '甲骨碑林卫生间'],
    positions: [
      { id: 0, latitude: 36.1221555409, longitude: 114.3251252174 },
      {
        id: 1,
        latitude: 36.1216572245,
        longitude: 114.3232584000,
      },
      {
        id: 2,
        latitude: 36.1216572245,
        longitude: 114.3232584000,
      },
      {
        id: 3,
        latitude: 36.12131,
        longitude: 114.32613,
      },
      {
        id: 4,
        latitude: 36.1215228951,
        longitude: 114.3250125647,
      },
      {
        id: 5,
        latitude: 36.1231694969,
        longitude: 114.3247443438,
      },
      {
        id: 6,
        latitude: 36.1209942420,
        longitude: 114.3223893642,
      },
      {
        id: 7,
        latitude: 36.1223635330,
        longitude: 114.3242132664,
      },
      {
        id: 8,
        latitude: 36.1227058520,
        longitude: 114.3255007267,
      },
      {
        id: 9,
        latitude: 36.1206909148,
        longitude: 114.3251466751,
      },
      {
        id: 10,
        latitude: 36.1240837792,
        longitude: 114.3253129721,
      },
      {
        id: 11,
        latitude: 36.1235378109,
        longitude: 114.3245190382,
      },
      {
        id: 12,
        latitude: 36.1201275898,
        longitude: 114.3257206678,
      },
      {
        id: 13,
        latitude: 36.1201102566,
        longitude: 114.3245404959,
      },
      {
        id: 14,
        latitude: 36.1220125461,
        longitude: 114.3223947287,
      },
      {
        id: 15,
        latitude: 36.1225065272,
        longitude: 114.3260747194,
      }
    ],
  },
  onLoad: function (e) {
    var that = this;
    that.setData({
      swiper_height:that.data.swiper_item_length[that.data.current]*46
    })
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current
    })
    that.setData({
      swiper_height: that.data.swiper_item_length[that.data.current] * 46
    })
  },
  bindKinds: function(e){
    // console.log(e);
    this.setData({
      current:e.currentTarget.dataset.index
    })
  },
  bindStructures: function(options){
    var that = this;
    var pages = getCurrentPages();   //当前页面
    var prevPage = pages[pages.length - 2];   //上一页面
    prevPage.setData({
      scale: 18,
      latitude: that.data.positions[parseInt(options.currentTarget.dataset.index)+1].latitude,
      longitude: that.data.positions[parseInt(options.currentTarget.dataset.index)+1].longitude
    });
    wx.navigateBack({
      delta: 1
    })
  },
  bindWcs: function (options) {
    var that = this;
    var pages = getCurrentPages();   //当前页面
    var prevPage = pages[pages.length - 2];   //上一页面
    prevPage.setData({
      scale: 18,
      latitude: that.data.positions[parseInt(options.currentTarget.dataset.index) + 12].latitude,
      longitude: that.data.positions[parseInt(options.currentTarget.dataset.index) + 12].longitude
    });
    wx.navigateBack({
      delta: 1
    })
  }
})