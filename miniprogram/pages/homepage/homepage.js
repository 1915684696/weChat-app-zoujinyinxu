const app = getApp()
Page({
  data: {
    isGuide:true,
    isRoute:false,
    windowWidth:0,
    windowHeight:0,
    scale:17,
    navigatePath: ["",
      "../secondary/pages/aoxingyizhi/aoxingyizhi", 
      "../secondary/pages/bingzujizhi/bingzujizhi",
      "../secondary/pages/bowuguan/bowuguan",
      "../secondary/pages/chemakeng/chemakeng",
      "../secondary/pages/fangyindadian/fangyindadian",
      "../secondary/pages/fuhaomu/fuhaomu", 
      "../secondary/pages/jiagubeilang/jiagubeilang",
      "../secondary/pages/jiagubeilin/jiagubeilin",
      "../secondary/pages/jiagujiaoxue/jiagujiaoxue",
      "../secondary/pages/jiazujizhi/jiazujizhi",
      "../secondary/pages/yizujizhi/yizujizhi"
    ],
    latitude: 36.1221555409,
    longitude: 114.3251252174,

    openid:'',
    //扫码打卡专用数据
    scanCodes:'',
    isnavigateback: false,



    positionid:0,
    position: [{ latitude: 36.1221555409, longitude: 114.3251252174 }, { latitude: 0, longitude: 0 }],
    positions:[
      {id:0, latitude: 36.1221555409, longitude: 114.3251252174 },
      {
        id: 1,
        latitude: 36.1216572245,
        longitude: 114.3232584000, },
      {
        id: 2,
        latitude: 36.1216572245,
        longitude: 114.3232584000,},
      {
        id: 3,
        latitude: 36.12131,
        longitude: 114.32613,},
      {
        id: 4,
        latitude: 36.1215228951,
        longitude: 114.3250125647,},
      {
        id: 5,
        latitude: 36.1231694969,
        longitude: 114.3247443438, },
      {
        id: 6,
        latitude: 36.1209942420,
        longitude: 114.3223893642,},
      {
        id: 7,
        latitude: 36.1223635330,
        longitude: 114.3242132664,},
      {
        id: 8,
        latitude: 36.1227058520,
        longitude: 114.3255007267,},
      {
        id: 9,
        latitude: 36.1206909148,
        longitude: 114.3251466751, },
      {
        id: 10,
        latitude: 36.1240837792,
        longitude: 114.3253129721,},
      {
        id: 11,
        latitude: 36.1235378109,
        longitude: 114.3245190382, },
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

    markers: [
      {
        iconPath: '../../images/icon_jiagujiaoxue.png',
        id: 9,
        latitude: 36.1206909148,
        longitude: 114.3251466751,
        width: 21,
        height: 30,
        callout: {
          content: "甲骨窖穴",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
    {
      iconPath: '../../images/icon_bowuguan.png',
        id: 3,
        latitude: 36.12131,
        longitude: 114.32613,
        width: 20,
        height: 30,
        callout: {
          content: "文字博物馆",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_chemakeng.png',
        id: 4,
        latitude: 36.1215228951,
        longitude: 114.3250125647,
        width: 29,
        height: 30,
        callout: {
          content: "车马坑",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_fuhaomu.png',
        id: 6,
        latitude: 36.1209942420,
        longitude: 114.3223893642,
        width: 30,
        height: 30,
        callout: {
          content: "妇好墓",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_fangyindadian.png',
        id: 5,
        latitude: 36.1231694969,
        longitude: 114.3247443438,
        width: 30,
        height: 20,
        callout: {
          content: "仿殷大殿",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_aoxingyizhi.png',
        id: 1,
        latitude: 36.1208772445,
        longitude: 114.3256777525,
        width: 30,
        height: 30,
        callout: {
          content: "凹形宫殿遗址",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_jiagubeilin.png',
        id: 8,
        latitude: 36.1227058520,
        longitude: 114.3255007267,
        width: 30,
        height: 26,
        callout: {
          content: "甲骨碑林",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_jiazujizhi.png',
        id: 10,
        latitude: 36.1240837792,
        longitude: 114.3253129721,
        width: 30,
        height: 18,
        callout: {
          content: "甲组基址",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_yizujizhi.png',
        id: 11,
        latitude: 36.1235378109,
        longitude: 114.3245190382,
        width: 30,
        height: 16,
        callout: {
          content: "乙组基址",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_jiagubeilang.png',
        id: 7,
        latitude: 36.1223635330,
        longitude: 114.3242132664,
        width: 28,
        height: 30,
        callout: {
          content: "甲骨碑廊",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/icon_bingzujizhi.png',
        id: 2,
        latitude: 36.1216572245,
        longitude: 114.3232584000,
        width: 30,
        height: 20,
        callout: {
          content: "丙组基址",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/wc.png',
        id: 12,
        latitude: 36.1201275898, 
        longitude: 114.3257206678,
        width: 15,
        height: 15,
        callout: {
          content: "门东卫生间",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/wc.png',
        id: 13,
        latitude: 36.1201102566, 
        longitude: 114.3245404959,
        width: 15,
        height: 15,
        callout: {
          content: "门西卫生间",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/wc.png',
        id: 14,
        latitude: 36.1220125461, 
        longitude: 114.3223947287,
        width: 15,
        height: 15,
        callout: {
          content: "丙组基址卫生间",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      },
      {
        iconPath: '../../images/wc.png',
        id: 15,
        latitude: 36.1225065272, 
        longitude: 114.3260747194,
        width: 15,
        height: 15,
        callout: {
          content: "甲骨碑林卫生间",
          color: "black",
          fontsize: "14",
          borderRadius: "10",
          bycolor: "#ffffff",
          padding: "10",
          display: "ALWAYS"
        }
      }

    ],
    polyline: [{
      points: [{
        longitude: 114.3249847426,
        latitude: 36.1198675923
      },
      {
        longitude: 114.3249857426,
        latitude: 36.1200799236
      },
      {
        longitude: 114.3251574039,
        latitude: 36.1200829235
      },
      {
        longitude: 114.3251842260,
        latitude: 36.1210202414
      },
      {
        longitude: 114.3254056248,
        latitude: 36.1210495731
      },
      {
        longitude: 114.3263543980,
        latitude: 36.1213019012
        },
        {
          longitude: 114.3262088299,
          latitude: 36.1218435519,
        },
        {
          longitude: 114.3261712790,
          latitude: 36.1225325261,
        },
        {
          longitude: 114.3257689476,
          latitude: 36.1225671913,
        },
        {
          longitude: 114.3257850409,
          latitude: 36.1227248502,
        },
        {
          longitude: 114.3254953623,
          latitude: 36.1227205171,
        },
        {
          longitude: 114.3252056837,
          latitude: 36.1226581874,
        },
        {
          longitude: 114.3242293596,
          latitude: 36.1227145182,
        },
        {
          longitude: 114.3241703510,
          latitude: 36.1219128829,
        },
        {
          longitude: 114.3245995045,
          latitude: 36.1219172161,
        },
        {
          longitude: 114.3247282505,
          latitude: 36.1205869166,
        },
        {
          longitude: 114.3247443438,
          latitude: 36.1200755903,
        }
      ],
      color: "#ff6600",
      width: 4,
      dottedLine: false,
      arrowLine: true,
      borderColor: "black",
      borderWidth: 5
    }]
  },
  regionchange(e) {
    // console.log(e.type)
  },
  markertap(e) {
    // console.log(e.markerId)
  },
  callouttap:function(options){
    var that = this;
    wx.navigateTo({
      url: that.data.navigatePath[options.markerId]
    })
  },
  bindIntroduce:function(){
    wx.navigateTo({
      url: '../primary/pages/introduce/introduce',
    })
  },
  bindMylocation: function () {
    var that = this;
    if (that.data.positionid == 0) {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          that.setData({
            latitude: latitude,//纬度
            longitude: longitude,//经度
          })
        }
      });
      that.setData({
        positionid:1
      })
    }
    else {
      that.setData({
        latitude: 36.1221555409,
        longitude: 114.3251252174,
        positionid:0
      })

    }
  },
  bindDaohang: function () {
    wx.openLocation({
      latitude: 36.1229485076,
      longitude: 114.3245673180,
      name: "殷墟宫殿宗庙遗址",
    })
  },
  bindHuodong: function () {
    wx.navigateTo({
      url: '../primary/pages/activity/activity',
    })
  },
  bindSousuo:function(){
    wx.navigateTo({
      url: '../primary/pages/sousuo/sousuo',
    })
  },
  bindRoute: function(){
    this.setData({
      isRoute: true
    })
  },
  bindMoreroute: function(){
    this.setData({
      polyline: [{
        points: [{
          longitude: 114.3249847426,
          latitude: 36.1198675923
        },
        {
          longitude: 114.3249857426,
          latitude: 36.1200799236
        },
        {
          longitude: 114.3251574039,
          latitude: 36.1200829235
        },
        {
          longitude: 114.3251842260,
          latitude: 36.1210202414
        },
        {
          longitude: 114.3254056248,
          latitude: 36.1210495731
        },
        {
          longitude: 114.3261122704,
          latitude: 36.1212399026
        },
        {
          longitude: 114.3254056248,
          latitude: 36.1210495731
        },
        {
          longitude: 114.3251842260,
          latitude: 36.1210202414
        },
        {
          longitude: 114.3252217770,
          latitude: 36.1216528913
        },
        {
          longitude: 114.3252700567,
          latitude: 36.1218435519
        },
        {
          longitude: 114.3251413107,
          latitude: 36.1219128829
        },
        {
          longitude: 114.3253290653,
          latitude: 36.1240554470
        },
        {
          longitude: 114.3245834112,
          latitude: 36.1240781123,
        },
        {
          longitude: 114.3242830038,
          latitude: 36.1237717978,
        },
        {
          longitude: 114.3241918087,
          latitude: 36.1220558779,
        },
        {
          longitude: 114.3223303556,
          latitude: 36.1220038797,
        },
        {
          longitude: 114.3223571777,
          latitude: 36.1210939064,
        },
        {
          longitude: 114.3229687214,
          latitude: 36.1210419076,
        },
        {
          longitude: 114.3246960640,
          latitude: 36.1210332411,
        },
        {
          longitude: 114.3247443438,
          latitude: 36.1200755903,
        }
        ],
        color: "#ff6600",
        width: 4,
        dottedLine: false,
        arrowLine: true,
        borderColor: "black",
        borderWidth: 5
      }],
      isRoute: false

    })
  },
  bindEasyroute: function(){
    this.setData({
      polyline: [{
        points: [{
          longitude: 114.3249847426,
          latitude: 36.1198675923
        },
        {
          longitude: 114.3249857426,
          latitude: 36.1200799236
        },
        {
          longitude: 114.3251574039,
          latitude: 36.1200829235
        },
        {
          longitude: 114.3251842260,
          latitude: 36.1210202414
        },
        {
          longitude: 114.3254056248,
          latitude: 36.1210495731
        },
        {
          longitude: 114.3263543980,
          latitude: 36.1213019012
        },
        {
          longitude: 114.3262088299,
          latitude: 36.1218435519,
        },
        {
          longitude: 114.3261712790,
          latitude: 36.1225325261,
        },
        {
          longitude: 114.3257689476,
          latitude: 36.1225671913,
        },
        {
          longitude: 114.3257850409,
          latitude: 36.1227248502,
        },
        {
          longitude: 114.3254953623,
          latitude: 36.1227205171,
        },
        {
          longitude: 114.3252056837,
          latitude: 36.1226581874,
        },
        {
          longitude: 114.3242293596,
          latitude: 36.1227145182,
        },
        {
          longitude: 114.3241703510,
          latitude: 36.1219128829,
        },
        {
          longitude: 114.3245995045,
          latitude: 36.1219172161,
        },
        {
          longitude: 114.3247282505,
          latitude: 36.1205869166,
        },
        {
          longitude: 114.3247443438,
          latitude: 36.1200755903,
        }
        ],
        color: "#ff6600",
        width: 4,
        dottedLine: false,
        arrowLine: true,
        borderColor: "black",
        borderWidth: 5
      }],
      isRoute:false

    })
  },


  clearRoutebar: function(){
    this.setData({
      isRoute: false
    })
  },
  cleanGuide: function(){
    this.setData({
      isGuide: false
    })
  },
  onLoad: function (options) {
    var that = this;

    wx.getStorage({       //获取缓存判断是否是第一次进入，需不需要加载引导页面
      key: 'isGuide',
      success(res) {
        that.setData({
          isGuide:false
        })
      },
      fail(){
        wx.setStorage({
          key: 'isGuide',
          data: 'false',
        })
      }
    });

    if(options.is==1){      //通过参数判断是否是由搜索界面跳转回的
      that.setData({
        scale:18
      });
      that.setData({
        latitude:that.data.positions[options.index].latitude,
        longitude:that.data.positions[options.index].longitude
      })
    }
    else if (options.is == 2) {
      that.setData({
        scale: 18
      });
      that.setData({
        latitude: that.data.positions[parseInt(options.index)+11].latitude,
        longitude: that.data.positions[parseInt(options.index)+11].longitude
      })
    }
  },
  onShow: function () {
    console.log('运行了onShow');
    var that = this;
    console.log(app.globalData.openid);
    if (app.globalData.openid && app.globalData.openid != '') {
      that.setData({
        openid: app.globalData.openid
      });
    } else {
        // 由于onLaunch与onLoad异步，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.openIdCallback = openId => {
          if (openId != '') {
            that.setData({
              openid: app.globalData.openid
            });
            console.log('onLoad,openid已通过回调函数获取')
          }
        }
     }
    if(that.data.isnavigateback){       //是否扫码登录成功，跳回的则成功，
      if(that.data.openid){
        that.attentance();
      }
      else{
        that.setData({
          isnavigateback:false
        })
      }
    }
  },
  bindScan: function () {
    var that = this;
    wx.scanCode({
      success(res) {
        console.log(res.result);
        that.setData({
          scanCode:res.result
        });
        if (that.data.openid) {
          app.attendStruct(that.data.scanCode);
        }
        else{
          wx.navigateTo({
            url: '../shouquan/shouquan',
          })
        }
      }
    })
  },
  bindRecords(){
    wx.navigateTo({
      url: '../myattendances/myattendances',
    })
  },
})
