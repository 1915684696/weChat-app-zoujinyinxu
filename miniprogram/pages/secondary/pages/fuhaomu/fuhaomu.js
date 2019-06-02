// miniprogram/pages/introduce/introduce.js
const app = getApp()
Page({

  data: {
    src: 'http://120.78.152.98/zoujinyinxu/musics/fuhaomu.mp3',
    currentTime: 0,
    duration: 0,
    result: '00:00',
    isOpen: false,/**是否播放 */

    //点赞的信息
    openid: '',
    xin_src: '../../resources/images/xin.png',
    xin_num: 123,
    isfavor: false,
    structId: 6,
    isnavigateback: false
  },
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
    this.setData({
      isOpen: true
    })
  },
  audioPause: function () {
    this.audioCtx.pause()
    this.setData({
      isOpen: false
    })
  },

  updata(e) {
    var that = this;
    // console.log(e.detail);
    // console.log((e.detail.currentTime / 100).toFixed(2))
    let duration = e.detail.duration.toFixed(2) * 100,
      currentTime = e.detail.currentTime.toFixed(2) * 100;
    that.setData({
      duration: duration,
      currentTime: currentTime
    })
    that.formatSeconds(currentTime / 100);
  },
  formatSeconds: function (e) {
    var min = e / 60;
    min = min.toFixed(0);
    var second = e % 60;
    second = second.toFixed(0);
    var result = '0';
    if (second < 10) {
      result = result + min.toString() + ':0' + second.toString();
    }
    else {
      result = result + min.toString() + ':' + second.toString();
    }
    this.setData({
      result: result
    })
  },
  sliderChange(e) {
    var that = this;
    that.setData({
      currentTime: e.detail.value
    })
    that.audioSeek(e.detail.value)
  },
  audioSeek: function (currentTime) {
    this.audioCtx.seek(currentTime / 100)
  },

  onLoad: function (e) {
    var that = this;
    this.audioCtx = wx.createAudioContext('myAudio')


    //获取景点id
    console.log("onLoad,id确定" + that.data.structId);
    //获取该景点点赞总数
    app.getFavorNum(that.data.structId,
      function (res) {
        that.setData({
          xin_num: res.data[0].num
        })
        console.log('onLoad,点赞总数计算完成');
      }
    );
    if (app.globalData.openid && app.globalData.openid != '') {
      that.setData({
        openid: app.globalData.openid
      });
      console.log('onLoad,已获取openid');
      app.getInfoFromStorate(that.data.openid, that.data.structId,
        function (res) {
          console.log('onLoad,该用户是否曾为该景点点赞已知晓');
          if (res.data.length) {
            that.setData({
              isfavor: true,
              xin_src: '../../resources/images/redxin.png'
            })
          }
        }
      )
    }
  },
  onShow() {
    var that = this;
    if (that.data.isnavigateback) {
      if (app.globalData.openid && app.globalData.openid != '') {
        that.setData({
          openid: app.globalData.openid
        });
        console.log('onShow,已获取openid');
        app.getInfoFromStorate(that.data.openid, that.data.structId,
          function (res) {
            console.log('onLoad,该用户是否曾为该景点点赞已知晓');
            if (res.data.length) {
              that.setData({
                isfavor: true,
                xin_src: '../../resources/images/redxin.png'
              })
            }
          }
        )
      }
    }
  },
  touchtap: function () {
    var that = this;
    if (!that.data.openid) {
      wx.navigateTo({
        url: '../../../shouquan/shouquan',
      })
    } else if (!that.data.isfavor) {
      that.setData({
        xin_num: this.data.xin_num + 1,
        xin_src: '../../resources/images/redxin.png',
        isfavor: true
      })
      app.favorStruct(that.data.openid, that.data.structId,
        function () {
          //点赞成功
        }
      )
    }
    else {
      wx.showToast({
        title: '您已经点过了',
        image: '../../resources/images/smile.png',
        duration: 500
      })
    }
  },
})