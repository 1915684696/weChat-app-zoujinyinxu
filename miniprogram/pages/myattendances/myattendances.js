const app = getApp()
Page({
  data: {
    openid: '',
    attendanceNum: 11,
    records:[],
    array: ['','凹形遗址', '丙组基址', '文字博物馆', '车马坑','仿殷大殿','妇好墓','甲骨碑廊','甲骨碑林','甲骨窖穴','甲组基址','乙组基址'],
    isAttend:[0,0,0,0,0,0,0,0,0,0,0,0]
  },

  onShow: function () {
    console.log('运行了onShow');
    var that = this;
    console.log(app.globalData.openid);
    if (app.globalData.openid && app.globalData.openid != '') {
      that.setData({
        openid: app.globalData.openid
      });
      app.getAttendances(
        function (res) {
          console.log(res);
          that.setData({
            records: res.data,
          });
          var isAttend = that.data.isAttend;
          for (var i = 0; i < res.data.length; i++) {
            isAttend[res.data[i].structId] = 1;
          }
          that.setData({
            isAttend: isAttend
          });
        }
      );
    }
  },
})