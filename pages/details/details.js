// pages/details/details.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: [],
    goodsIndex: 1,
    goodsList: [
      { name: "山东肚脐橙", price: 8.8, img: '/image/s1.png', weight: "500g", id: 1001 },
      { name: "湖南冰糖橙", price: 18.8, img: '/image/s2.png', weight: "500g", id: 1002 },
      { name: "麻涌香蕉", price: 2.8, img: '/image/s4.png', weight: "500g", id: 1003 },
      { name: "冰糖心苹果", price: 6.8, img: '/image/s5.png', weight: "500g", id: 1004 },
      { name: "山东水梨", price: 5.8, img: '/image/s6.png', weight: "500g", id: 1005 },
      { name: "山东冰糖橙", price: 11.8, img: '/image/s2.png', weight: "500g", id: 1006 },
      { name: "湖南苹果", price: 18.8, img: '/image/s1.png', weight: "500g", id: 1007 }
    ],
    showGoodsInfo: {},
    goodsNumber: 1,
    showCartAnimate: false,
    cartNum: 0,
    showCartNum: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let goods = this.data.goodsList;
    goods = goods.filter(item => item.id == options.info)[0];
    console.log(goods);
    this.setData({
      showGoodsInfo: goods
    })
  },
  // 跳转tab页面
  // tipCartPage:function(){
  //   // this.globalData.cartInfo = 
  //   wx.reLaunch({
  //     url: '/pages/cart/cart'
  //   })
  // },

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
  // tab栏设置
  selectIndex(e){
    let goodsIndex = this.data.goodsIndex;
    goodsIndex = e.currentTarget.dataset.index;
    this.setData({
      goodsIndex: goodsIndex
    })
  },
  // 数量减
  reduceCount(){
    let num = this.data.goodsNumber;
    num--;
    if(num<1) num = 1;
    this.setData({
      goodsNumber: num
    })
  },
  // 数量加
  addCount(){
    let num = this.data.goodsNumber;
    num++;
    this.setData({
      goodsNumber: num
    })
  },
  // 加入购物车
  addToCart(){
    let _this = this;
    let cartNum = this.data.cartNum;
    let goodsNumber = this.data.goodsNumber;
    let showGoodsInfo = this.data.showGoodsInfo;
    let appArr = app.globalData.cartInfo;
    let exArr = [];
    setTimeout(item =>{
      cartNum += goodsNumber;
      appArr.push({ id: showGoodsInfo.id, number: cartNum });
      appArr.filter((item,index)=>{
        // return appArr.indexOf(item) == index
         
        // appArr.forEach((ele, j) => {
        //   if(item.id != ele.id){
        //     exArr.push(item);
        //   }else{
        //     item.id = item.number + ele.number;
        //   }
        // })
      })
      console.log(appArr);
      // appArr = exArr;
      wx.setStorage({
        key: 'cartInfo',
        data: function () {
          let cartInfoArr = [];
          cartInfoArr.push({ id: showGoodsInfo.id, number: cartNum });
        }
      })
      _this.setData({
        showCartAnimate: true,
      })
      setTimeout(item => {
        _this.setData({
          showCartNum: true,
          cartNum: cartNum
        })
      },500)
    },350)
      this.setData({
        showCartAnimate: false
      })
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