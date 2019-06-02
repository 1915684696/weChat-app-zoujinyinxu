//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'zoujinyinx-531ec4',
        traceUser: true,
      })
    }
    var that = this;
    this.globalData = {
      openId: ''
    }
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          console.log('onLaunch,用户已授权');
          console.log('onLaunch,globalData.openid:' + that.globalData.openid+'，放心，即将获取');
          // 调用云函数获取openid
          wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
              that.globalData.openid = res.result.openid;
              console.log('onLaunch,已获取globalData.openid: ' + that.globalData.openid);
              if (that.openIdCallback) {
                that.openIdCallback(res.result.openId);
              }
            },
            fail: res=>{
              console.log('fail');
            }
          })
        }
      }
    })
  },


  //查询景点的景点id   景点名
  getStructId:function(structName,callback){
    const db = wx.cloud.database();
    db.collection('structs').where({
      structName:structName
    }).get({
      success:callback
    })
  },

  //查询某景点点赞总数 景点id
  getFavorNum:function(structId,callback){
    const db = wx.cloud.database();
    db.collection('favorsum').where({
      structId:structId
    }).get({
      success:callback
    })
  },

  //查询openid用户是否在id景点点赞， openid,景点id，回调函数
  getInfoFromStorate: function (userId, structId, callback) {
    const db = wx.cloud.database();
    db.collection('favor').where({
      _openid: userId,
      structId: structId
    }).get({
      success: callback
    })
  },
  //某用户为景点点赞   openid，structureId
  favorStruct: function(userId,structId,callback){
    const db = wx.cloud.database();
    var _id;
    db.collection('favorsum').where({
      structId: structId
    }).get({
        success(res) {
          wx.cloud.callFunction({
            // 云函数名称
            name: 'update',
            // 传给云函数的参数
            data: {
              tablename: 'favorsum',
              id: res.data[0]._id,
              num: res.data[0].num
            },
            success: function (res) {
              console.log(res)
            },
            fail: console.error
          })
        }
      })
    db.collection('favor').add({
      data:{
        structId:structId
      },
      success:callback
    })
  },

  //查询用户是否已在该景点打卡
  getInfoIsAttended(structId,callback){
    var that = this;
    const db  =wx.cloud.database();
    db.collection('attendances').where({
      _openid: that.globalData.openId,
      structId:structId
    }).get({
      success(res) {
        console.log('曾为' + structId + '景点打卡记录:');
        console.log(res);
        callback(res.data.length);
      }
    })
  },

  //某用户记录打卡   openid，structureId
  attendStruct: function (scanCode) {
    var that = this;
    const db = wx.cloud.database();
    db.collection('structs').where({  //判断二维码是否正确
      scanCode:scanCode
    }).get({
      success(res){
        if(res.data.length==1){
          console.log('二维码正确');
          var structId = res.data[0].structId;
          that.getInfoIsAttended(structId,
            function(res){
              console.log('曾经打卡数量：'+res);
              if (res) { //判断此次打卡是否为重复打卡
                console.log('重复打卡');
                wx.showToast({
                  title: '您已经打过一次卡了',
                  image: '/images/cry.png',
                  duration: 1000
                })
                return -1;
              }
              else {                                       //二维码正确，非重复打卡
                console.log('非重复打卡,景点id:' + structId);
                console.log(that.getNowFormatDate());
                var attendTime = that.getNowFormatDate();
                db.collection('attendances').add({
                  data: {
                    structId: structId,
                    attendTime: that.getNowFormatDate()
                  },
                  fail:console.error
                })
                wx.showToast({
                  title: '打卡成功',
                  image: '/images/smile.png',
                  duration: 1000
                })
              }
            }
          )
        }
        else {
          wx.showToast({
            title: '二维码不正确哦',
            image: '/images/cry.png',
            duration: 500
          })
          return 0;
        }
      }
    })
  },
  //获取当前时间
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
  },
  //查询用户的打卡记录
  getAttendances(callback){
    var that = this;
    console.log(that.globalData.openid);
    const db = wx.cloud.database();
    db.collection('attendances').where({
      _openid:that.globalData.openid
    }).get({
      success(res){
        callback(res);
      }
    })
  },
})
