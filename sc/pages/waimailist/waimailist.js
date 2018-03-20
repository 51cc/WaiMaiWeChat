// pages/waimailist/waimailist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryAy: [{"sec":0,"name":'距离最近',"type":"a","id":'1'},
      { "sec": 0, "name": '配送最低', "type": "a", "id": '2' },
      { "sec": 0, "name": '起送最低', "type": "a", "id": '3' }],
    dataAy: ['', '', '', '', '', '', '', '', '', '', '', '']

  },
  jumptodetail:function(e){
    wx.navigateTo({
      url: '../waimaidetail/waimaidetail',
    })
  },
selectIndex:function(e){
      var ay = [];
      for(var index in this.data.categoryAy)
    {
      var mDic = this.data.categoryAy[index];

      if (e.currentTarget.id == mDic.id) {
        mDic = { "name": mDic.name, "sec": "1", "id": mDic.id };
      }
      else {
        mDic = { "name": mDic.name, "sec": "0", "id": mDic.id };
      }
      ay.push(mDic);
    }

    this.setData({ categoryAy: ay });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})