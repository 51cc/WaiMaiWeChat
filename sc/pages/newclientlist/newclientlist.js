// pages/newclientlist/newclientlist.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText:'',
    pId:'',
    sType:'',
    categoryAy:[],
    clientsAy: []
  },
  jumptodetail:function(e){
    wx.navigateTo({
      url: '../newclientdetail/newclientdetail?pId='+e.currentTarget.id,
    })
  },

  bindKeyInput:function(e){
    console.log(e);

    this.setData({searchText:e.detail.value});
  
  },
  
  jumptosearchPro:function(){



    var that = this;

    var paraDic =
      {
        NAME: this.data.searchText,
        currentPage: 0,
        showCount: 1000,
        SORTING: this.data.sType,
        CODE: getApp().globalData.subCode,
        TYPE_ID: this.data.pId
      };
    this.setData({ searchText:''});

    util.requestUrl(getApp().globalData.baseUrl + 'nParList',
      paraDic, function (res) {

        console.log(res);

        if (res.data.status == '200') {

          that.setData({ clientsAy: res.data.dataList });
        }
      });
  },
  
  selectIndex:function(e){

    console.log(e);

    var sType = e.currentTarget.dataset.type;

    this.setData({ sType: sType});


    var that = this;

    var paraDic =
      {
        currentPage: 0,
        showCount: 1000,
        SORTING: sType,
        CODE: getApp().globalData.subCode,
        TYPE_ID: this.data.pId
      };

    util.requestUrl(getApp().globalData.baseUrl + 'nParList',
      paraDic, function (res) {

        console.log(res);

        if (res.data.status == '200') {

          that.setData({ clientsAy: res.data.dataList });
        }
      });




    var ay = [];
    for (var index in this.data.categoryAy)
    {
      var mDic = this.data.categoryAy[index];

      if (e.currentTarget.id == mDic.id)
      {
        mDic = { "name": mDic.name, "sec": "1", "id": mDic.id};
      }
      else
      {
        mDic = { "name": mDic.name, "sec": "0", "id": mDic.id };
      }
      ay.push(mDic);
    }

    this.setData({ categoryAy:ay});

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    var paraDic = 
    {
      currentPage:0,
      showCount:1000,
      SORTING:'',
      CODE: getApp().globalData.subCode,
      TYPE_ID:options.cId
    };
    this.setData({ pId: options.cId});

    util.requestUrl(getApp().globalData.baseUrl + 'nParList',
      paraDic, function (res) {
        
        console.log(res);
        
        if (res.data.status == '200') 
        {
          
          that.setData({ clientsAy:res.data.dataList});
        }


        if (res.data.ifSorting=='1')
        {
            for(var index in res.data.sorting)
            {
              
                var mDic = { "name": res.data.sorting[index].title, "sec": "0", "id": index, 'type': res.data.sorting[index].type  };           
                that.data.categoryAy.push(mDic);
              
            }

            that.setData({ categoryAy: that.data.categoryAy});
        }
        else
        {

        }
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