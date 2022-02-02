// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList:[
      {
        id: "1",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      },
      {
        id: "2",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      },
      {
        id: "3",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      },
      {
        id: "4",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      },
      {
        id: "5",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      },
      {
        id: "6",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        title: "张三",
        date:"2021-04-03",
        addr: "川大",
        intro: "据统计，全世界每年发生地震大约500万次。其中，绝大多数地震很小，不用灵敏仪器便觉察不到，约占地震总数的99%，其余的1%，约5万次，才会被人们感觉出来。一般情况下，5级以上地震就能够造成破坏，习惯上称为破坏性地震，平均每年发生约1000次；7级以上强震平均每年18次；8级以上大震每年发生1—2次。",
        start:true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  handleItem:function(e){
    wx.navigateTo({
      url: '/pages/comDetail/comDetail',
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