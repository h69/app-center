var util = require('../../utils/util');

Page({
  onLoad: function () {
    this.setData({
      hidden: true
    });
  },
  onShareAppMessage: function () {
    return {
      title: '安全扫码',
      path: '/pages/qrcode/index'
    };
  },
  onOutputListener: function () {
    wx.setClipboardData({
      data: this.data.output,
      success: function () {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        });
      }
    });
  },
  onScanListener: function () {
    var $this = this;
    
    wx.scanCode({
      success: function (data) {
        $this.setData({
          output: data.result,
          hidden: false
        });

        wx.showToast({
          title: '扫码成功',
          icon: 'success'
        });
      },
    });
  }

});
