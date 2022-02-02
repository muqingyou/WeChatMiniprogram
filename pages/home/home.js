// pages/home/home.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[
      {
        bannerID: "1",
        pic: "/icons/swiper1.png",
      },
      {
        bannerID: "2",
        pic: "/icons/swiper2.png",
      },
      {
        bannerID: "3",
        pic: "/icons/swiper3.png",
      },
    ],
    navID:1,
    groupList:[
      {
        id:1,
        name:'火灾'
      },
      {
        id:2,
        name:'洪灾'
      },
      {
        id:3,
        name:'泥石流'
      },
    ],
    // navGroupList:[
    //   {
    //     id:1,
    //     name:"火灾"
    //   },
    //   {
    //     id:2,
    //     name:"泥石流"
    //   },
    //   {
    //     id:3,
    //     name:"洪灾"
    //   },
    // ],
    phone_list: [
      {
        id: "1",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害"
      },
      {
        id: "2",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害防震减灾就是防御和减轻地震灾害减轻地震灾害"
      },
      {
        id: "3",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害防震减灾就是防御和减轻地震灾害"
      },
      {
        id: "4",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害防震减灾就是防御和减轻地震灾害"
      },
      {
        id: "5",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害防震减灾就是防御和减轻地震灾害"
      },
      {
        id: "6",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "防震减灾就是防御和减轻地震灾害防震减灾就是防御和减轻地震灾害"
      }
    ],
    useHeith:0,
    canUseHeith: 0,
    scrollViewHeith:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // let bannerListData = await request('/banner',{type:2});
    // bannerListData=bannerListData.data;
    // this.setData({
    //   bannerList:bannerListData.banners
    // });
    // this.getGroupListData()


    // let that=this;
    // //nav
    // let qSearch = wx.createSelectorQuery();
    // qSearch.select('.nav').boundingClientRect()
    // qSearch.exec(function (res) {
    //     that.setData({
    //         useHeith: that.data.useHeith + res[0].height
    //     })
    //     console.log(that.data.useHeith)
    //     // banners高度
    //     let qKillOrder = wx.createSelectorQuery();
    //     qKillOrder.select('.banners').boundingClientRect()
    //     let result = qKillOrder.exec(function (resk) {
    //         that.setData({
    //             useHeith: that.data.useHeith + resk[0].height
    //         })
    //         console.log(that.data.useHeith)
    //         // menu高度
    //         let qBannerType = wx.createSelectorQuery();
    //         qBannerType.select('.menu').boundingClientRect()
    //         qBannerType.exec(function (resb) {
    //             that.setData({
    //                 useHeith: that.data.useHeith + resb[0].height
    //             })
    //             console.log(that.data.useHeith)
    //             wx.getSystemInfo({
    //                   success: function (res) {
    //                       that.setData({
    //                           canUseHeith: res.windowHeight,
    //                           scrollViewHeith: res.windowHeight - that.data.useHeith-20
    //                       })
    //                       console.log(that.data.canUseHeith)
    //                       console.log(that.data.scrollViewHeith)
    //                   },
    //             })
    //         })
    //     })
    // })//这一串都是为了设置scrollview高度
  },

  changeNav:function(event){
    let navID = event.currentTarget.id;
    this.setData({
      navID:navID*1
    })
    this.getItemList(this.data.navID);
  },

  async getGroupListData(){
    let groupListData = await request('/video/group/list');
    groupListData=groupListData.data
    this.setData({
      groupList:groupListData.data.slice(0,3),
      navID:groupListData.data[0].id
    })
    this.getItemList(this.data.navID);
  },
  async getItemList(navID){
    let itemListData = await request('/video/group',{id:navID})
    itemListData=itemListData.data
    console.log(itemListData)
  },

  handleListItem:function(e){
    wx.navigateTo({
      url: '/pages/itemDetail/itemDetail',
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', {id:e.currentTarget.id})
      },
      fail: () => {},
      complete: () => {}
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