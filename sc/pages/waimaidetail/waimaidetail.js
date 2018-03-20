// pages/waimaidetail/waimaidetail.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sumNum:0,
    show:false,
    currentNum:0,
    maincolor:'',
    sAy:['','',''],
    yidianAy: ['', '', '', '','', ''],
    fenleiAy: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    prods: ['', '', '', '', '', '', '', ''],
    comments: ['', '', '', '', '', '', '', '', '', ''],
    categoryAy: [{ "sec": 1, "name": '点菜', "type": "a", "id": '1' },
    { "sec": 0, "name": '评价', "type": "a", "id": '2' },
    { "sec": 0, "name": '商家', "type": "a", "id": '3' }],
    dataAy: ['', '', '', '', '', '', '', '', '', '', '', '']
  },
  scroll:function(e){
    console.log(e.detail);
    var ay = [];
    for (var index in this.data.categoryAy) {
      var mDic = this.data.categoryAy[index];

      if (index==e.detail.current)
      {
        this.setData({ currentNum: index });
        mDic = { "name": mDic.name, "sec": "1", "id": mDic.id };
      }
      else {
        mDic = { "name": mDic.name, "sec": "0", "id": mDic.id };
      }
      ay.push(mDic);
    }

    this.setData({ categoryAy: ay });

  },
  addNum:function(e){
    var num = this.data.sumNum;
    num = num+1;
    this.setData({sumNum:num});
  },
  hiddenview:function(){
    this.setData({ show: false });

  },
  showdetail:function(){
    this.setData({show:true});
  },
  jumptosuborder:function(){
    wx.navigateTo({
      url: '../waimaisuborder/waimaisuborder',
    })
  },
  selectIndex: function (e) {
    var ay = [];
    for (var index in this.data.categoryAy) {
      var mDic = this.data.categoryAy[index];

      if (e.currentTarget.id == mDic.id) {
        this.setData({ currentNum:index});
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
  
    var that = this;

    util.requestUrl(getApp().globalData.setUrl + 'getMyList',
      { 'orderNo': getApp().globalData.subCode },
      function (res) {

        console.log(res);

        that.setData({ maincolor: res.data.color });
      });
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