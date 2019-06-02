const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   userInfo: {},
  //   logged: false,
  //   takeSession: false,
  //   requestResult: ''
  data:{

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },

  bindBtn: function(e) {
    var that = this;
    var pages = getCurrentPages();   //当前页面
    var prevPage = pages[pages.length - 2];   //上一页面
    wx.getSetting({
      success: res => {
        console.log('success');
        if (res.authSetting['scope.userInfo']) {
          console.log('授权');
          // 调用云函数获取openid
          wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
              console.log('授权页面已经获取成功'+res.result.openid);
              app.globalData.openid = res.result.openid;
              console.log('授权页面已经更改了app.globalDate.openid'+app.globalData.openid);
              console.log(prevPage);
              prevPage.setData({
                isnavigateback: true
              });
              wx.navigateBack({
                delta: 1
              })
            },
            fail: res => {
              console.log('fail');
            }
          })
        }
        else {
          console.log('未授权');
          that.sleep(500);
          that.bindBtn();

        }
      },
      fail: res=>{
      }
    });

  }


})