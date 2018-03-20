// aaafirst.js
var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    clients_category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    clients_indots:0,
    huatiquan:'',
    kanjia:'',
    yaoqing:'',
    maidan:'',
    show:false,
    sheight: 0.0,
    swidth: 0.0,
    newCounponDic:{},
    uiAy:[],
    //搜索类型  0 搜商品  1 搜商家
    searchType:'0',
    //轮播图数据
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    lbtAy: [],

    //搜索
    city: "定位中",
    searchText:'',

    //快捷入口
    kjAy:[
      { 'icon': '../../Asset/wkuaijie/k3.png', 'name': '优惠券','id':'0' },
      { 'icon': '../../Asset/wkuaijie/k1.png', 'name': '卡券', 'id': '1' },
      { 'icon': '../../Asset/wkuaijie/k2.png', 'name': '资讯', 'id': '2' },
      { 'icon': '../../Asset/wkuaijie/k5.png', 'name': '视频', 'id': '3' },
      { 'icon': '../../Asset/wkuaijie/k8.png', 'name': '拼团', 'id': '4' },
      { 'icon': '../../Asset/wkuaijie/k4.png', 'name': '限时抢购', 'id': '5' },
      { 'icon': '../../Asset/wkuaijie/k6.png', 'name': '全部商品', 'id': '6' },
      { 'icon': '../../Asset/wkuaijie/k7.png', 'name': '全部商家', 'id': '7' }],

    //推荐分类1  推荐分类3  推荐分类4
    flAy: [],
    //推荐分类2
    flAy2: ['#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd', '#f685c3', '#ff755e', '#f5be40', '#9fd468', '#48cfae', '#4fc0e8', '#ac92eb', '#aab2bd',],
    
    //推荐商品
    products: [],
    //拼团活动
    ptAy:[],
    //限时抢购
    xsAy: [
    ],
    //推荐商家
    tjAy:[],
    //推荐商家1
    tjAy1:[],
    //优惠券1   优惠券2
    yhqAy:[],
    //卡券
    kqAy:[],
    //资讯1
    zxAy:[
    ],
    
    //视频
    spAy:[],
    //广告图
    ggtAy:[],
    //预约
    yuyueAy:[],
    //活动
    huodongAy:[] 


    
  },
  // 外卖
  jumptowaimailist:function(){
    wx.navigateTo({
      url: '../waimailist/waimailist',
    })
  },

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: getApp().globalData.appName, // 分享标题
      desc: '', // 分享描述
      path: 'pages/aaafirst/aaafirst' // 分享路径
    }
  }
})