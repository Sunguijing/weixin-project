// pages/cart/cart.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartageList: [],   //默认列表里面的数据
    selectAll: true,   //默认全选是否选中
    selectNum: 0,       //默认总价
    cartageList:[],
    goodsList: [
      { name: "山东肚脐橙", price: 8.8, img: '/image/s1.png', weight: "500g", id: 1001 },
      { name: "湖南冰糖橙", price: 18.8, img: '/image/s2.png', weight: "500g", id: 1002 },
      { name: "麻涌香蕉", price: 2.8, img: '/image/s4.png', weight: "500g", id: 1003 },
      { name: "冰糖心苹果", price: 6.8, img: '/image/s5.png', weight: "500g", id: 1004 },
      { name: "山东水梨", price: 5.8, img: '/image/s6.png', weight: "500g", id: 1005 },
      { name: "山东冰糖橙", price: 11.8, img: '/image/s2.png', weight: "500g", id: 1006 },
      { name: "湖南苹果", price: 18.8, img: '/image/s1.png', weight: "500g", id: 1007 }
    ]
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("全局变量购物车数据：", app.globalData.cartInfo);
    console.log(options);
    let cartageList = this.data.cartageList;
    let goodsList = this.data.goodsList;
    cartageList = goodsList.filter( item => item.id == options.id );
    console.log(cartageList);
    this.setData({
      cartageList: cartageList
    })

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
    this.setData({
      // cartageList:[
      //   { selected: true, img: "/image/s5.png", name:"新鲜芹菜 半斤",num:3,price: 0.03},
      //   { selected: true, img: "/image/s6.png", name: "精品大米 500g", num: 1, price: 2.5 }
      // ]
      
    });
    this.getSelectAll();
  },

  /**页面点击事件**/
  selectBox(e){  // 点击选择
    const index = e.currentTarget.dataset.index;
    let cartageList = this.data.cartageList;
    let selected = cartageList[index].selected;
    cartageList[index].selected = !selected;
    this.setData({
      cartageList: cartageList
    })
    this.getSelectAll();
  },
  reduce(e){   //数量减少
    const index = e.currentTarget.dataset.index;
    let cartageList = this.data.cartageList;
    let num = cartageList[index].num;  
    if(num==1) num = 1;
    else num--;
    cartageList[index].num = num;
    this.setData({
      cartageList: cartageList
    })
    this.getSelectAll();
  },
  add(e){  //数量增加
    const index = e.currentTarget.dataset.index;
    let cartageList = this.data.cartageList;
    let num = cartageList[index].num;
    num++;
    cartageList[index].num = num;
    this.setData({
      cartageList: cartageList
    })
    this.getSelectAll();
  },
  delete(e){  // 删除
    const index = e.currentTarget.dataset.index;
    let cartageList = this.data.cartageList;
    cartageList.splice(index,1);
    this.setData({
      cartageList: cartageList
    })
    this.getSelectAll();
  },
  // 设置全选
  setSelected(){
    let selectAll = this.data.selectAll;
    let cartageList = this.data.cartageList;
    let number = 0;
    console.log(selectAll);
    if(!selectAll){
      cartageList.map((item, index) => {
        item.selected = true
      })
    }else{
      cartageList.map((item, index) => {
        item.selected = false
      })
    }
    this.setData({
      selectAll: !selectAll,
      cartageList: cartageList
    })
    this.getSelectAll();
  },
  // 设置总价
  getSelectAll(){
    let selectNum = 0;
    let selectAll = this.data.selectAll;
    let cartageList = this.data.cartageList;
    let num = 0;
    cartageList.map((item,index) =>{
      if (item.selected){
        num++;
        selectNum += item.price * item.num;
      }
    })
    if (num == cartageList.length && num != 0){
      selectAll = true;
    }else{
      selectAll = false;
    }
    this.setData({
      selectAll: selectAll,
      selectNum: selectNum.toFixed(2)
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