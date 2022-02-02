// pages/phones/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone_list: [
      {
        id: "1",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "地震灾害预防、地震应急救援、地震灾后过渡性安置和恢复重建"
      },
      {
        id: "2",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "阿奎那"
      },
      {
        id: "3",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "阿奎那"
      },
      {
        id: "4",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "阿奎那"
      },
      {
        id: "5",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "阿奎那"
      },
      {
        id: "6",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        position: "xxxx职位",
        name: "张三",
        phone: "1233546",
        address: "阿奎那"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  call: function (e) {
    let arr = this.data.phone_list
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]['id'])
      if (arr[i]['id'] == e.currentTarget.id) {
        wx.makePhoneCall({
          phoneNumber: arr[i]['phone'],
        })
        break
      }
    }

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