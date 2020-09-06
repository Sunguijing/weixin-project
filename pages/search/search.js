// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: ['山东肚脐橙', '湖南冰糖橙', '麻涌香蕉', '冰糖心苹果',"山东水梨","山东冰糖橙","湖南苹果"],
    showList: [],
    showTab: false,
    historyList: [],
    inputVal: '',
    goodsList:[],
    showGoodsTab: false,
    recommendList: ['山东肚脐橙', '湖南冰糖橙', '麻涌香蕉', '冰糖心苹果']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getStorage({
      key: "history",
      success:function(result){
        _this.setData({
          historyList: result.data
        })
      }
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
    
  },
  // 输入框事件
  searchCon(e){
    let reg = /^[\u4E00-\u9FA5]+$/;
    let value = e.detail.value;
    let showTab = this.data.showTab;
    let searchList = this.data.searchList;
    if (reg.test(value) && e.detail.value.length>=2){
      console.log(value);
      searchList = searchList.filter(item => item.indexOf(value)>-1);
      
      if (searchList.length > 0) showTab = true;
    }else{
      showTab = false;
    }
    this.setData({
      showList: searchList,
      showTab: showTab
    })
  },
  // 下拉框选择事件
  selectVal(e){
    let name = e.currentTarget.dataset.value;
    let historyList = this.data.historyList;
    let inputVal = this.data.inputVal;
    let goodsList = [
      { name: "山东肚脐橙", price: 8.8, img: '/image/s1.png', weight: "500g" },
      { name: "湖南冰糖橙", price: 18.8, img: '/image/s2.png', weight: "500g" },
      { name: "麻涌香蕉", price: 2.8, img: '/image/s4.png', weight: "500g" },
      { name: "冰糖心苹果", price: 6.8, img: '/image/s5.png', weight: "500g" },
      { name: "山东水梨", price: 5.8, img: '/image/s6.png', weight: "500g" },
      { name: "山东冰糖橙", price: 11.8, img: '/image/s2.png', weight: "500g" },
      { name: "湖南苹果", price: 18.8, img: '/image/s1.png', weight: "500g" },
    ];
    let showGoodsTab = this.data.showGoodsTab;
    inputVal = name;
    // 出现相应的商品
    goodsList = goodsList.filter(item=> item.name == name);
    if (goodsList.length > 0) showGoodsTab =true;
    else showGoodsTab = false
    // 处理搜索记录
    historyList = historyList.filter(item => item != name);
    historyList.unshift(name);
    if (historyList.length>9){
      historyList.pop();
    }
    wx.setStorage({
      key: "history",
      data: historyList
    })
    this.setData({
      historyList: historyList,
      inputVal: inputVal,
      showTab: false,
      showGoodsTab: showGoodsTab,
      goodsList: goodsList
    })
  },
  // 取消搜索
  cancelSearch(){
    let showGoodsTab = this.data.showGoodsTab;
    showGoodsTab = false;
    this.setData({
      showGoodsTab: showGoodsTab
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