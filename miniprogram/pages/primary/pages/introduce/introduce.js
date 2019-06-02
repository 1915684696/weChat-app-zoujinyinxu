// miniprogram/pages/introduce/introduce.js
Page({

  data: {
    poster: 'http://120.78.152.98/zoujinyinxu/images/datu.jpg',
    name: '',
    author: '',
    src: 'http://120.78.152.98/zoujinyinxu/musics/introduce.mp3',
    currentTime: 0,
    duration: 0,
    result: '00:00',
    isOpen: false,/**是否播放 */
  },
  // audioPlay() {
  //   this.audioCtx.play()
  // },
  // audioPause() {
  //   this.audioCtx.pause()
  // },
  // audio14() {
  //   this.audioCtx.seek(14)
  // },
  // audioStart() {
  //   this.audioCtx.seek(0)
  // },
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
turntoOpentime:function(){
  wx.navigateTo({
    url: '../openTime/openTime',
  })
},
turntoTraffic:function(){
  wx.navigateTo({
    url: '../traffic/traffic',
  })
},
turntoKnown:function(){
  wx.navigateTo({
    url: '../known/known',
  })
},
phoneCall:function(){
  wx.makePhoneCall({
    phoneNumber: '0372-3932171',
  })
},
  onLoad: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    // var that = this;
    // wx.setNavigationBarTitle({
    //   title: that.data.name
    // });
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
})