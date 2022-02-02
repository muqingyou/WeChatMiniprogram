// pages/commuityDetail/comDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList:[
      {
        id:1,
        name:"活动详情"
      },
      {
        id:2,
        name:"已参与人员"
      },
    ],
    navID:1,
    item:{
      title:"活动",
      intro:"主人公詹姆斯·卡兹本是北达科他州的一个贫穷的农家子弟，自幼梦想做个出人头地的大人物。经过一番努力，他终于步步高升，并更名为杰伊·盖茨比。他在一个军训营里任中尉时，爱上了南方的大家闺秀黛茜·费。可是当他戴着军功勋章在战争结束后从海外归来时，黛茜已嫁给一位来自芝加哥的、体格健壮、富有但举止粗鲁的纨绔子弟汤姆·布坎农，沉醉于爱情梦幻中的盖茨比艰苦创业，由一个贫穷的军官奋斗成为百万富翁。他在长岛西端买下了一幢豪华别墅，与住在东端的布坎农夫妇隔海湾相望。他的府第每晚灯火通明，成群的宾客饮酒纵乐。他唯一的愿望是希望看到分别了五年的情人黛茜，当他们重逢时，盖茨比以为时光可以倒流，重温旧梦，但久而久之，他发现黛茜远不像他梦想的人，可是这种醒悟还没多久，黛茜开车碾死了丈夫的情妇，汤姆嫁祸于盖茨比，盖茨比终于被害，黛茜居然没来送葬：叙述者尼克由此看透了上层社会有钱人的冷酷残忍和居心险恶，离开纽约，回到了中西部的故乡。"
    },
    member:[
      {
        id:1,
        name:"张三啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:2,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:3,
        name:"张三",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
        
      },
      {
        id:4,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:5,
        name:"张三",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:6,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:7,
        name:"张三",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:8,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:9,
        name:"张三",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:10,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:11,
        name:"张三",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        id:12,
        name:"李四",
        ava:"https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7"
      },
    ],
    useHeith:0,
    canUseHeith: 0,
    scrollViewHeith:0,
    haveCommit:0,
    curID:12
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const eventChannel = this.getOpenerEventChannel()
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log(data['id'])
    // })

    let that=this;
    let qSearch = wx.createSelectorQuery();
    qSearch.select('.img').boundingClientRect()
    qSearch.exec(function (res) {
        that.setData({
            useHeith: that.data.useHeith + res[0].height
        })
        console.log(that.data.useHeith)
        // nav高度
        let qKillOrder = wx.createSelectorQuery();
        qKillOrder.select('.nav').boundingClientRect()
        let result = qKillOrder.exec(function (resk) {
            that.setData({
                useHeith: that.data.useHeith + resk[0].height
            })
            console.log(that.data.useHeith)
            // bottom高度
            let qBannerType = wx.createSelectorQuery();
            qBannerType.select('.bottom').boundingClientRect()
            qBannerType.exec(function (resb) {
                that.setData({
                    useHeith: that.data.useHeith + resb[0].height
                })
                console.log(that.data.useHeith)
                // // title高度
                // let titleH = wx.createSelectorQuery();
                // titleH.select('.title').boundingClientRect()
                // titleH.exec(function (rest) {
                //     that.setData({
                //         useHeith: that.data.useHeith + rest[0].height
                //     })
                //     console.log(that.data.useHeith)
                //     // jianjie高度
                //     let jianjieH = wx.createSelectorQuery();
                //     jianjieH.select('.jianjie').boundingClientRect()
                //     jianjieH.exec(function (resj) {
                //         that.setData({
                //             useHeith: that.data.useHeith + resj[0].height
                //         })
                //     console.log(that.data.useHeith)
                    wx.getSystemInfo({
                          success: function (res) {
                              that.setData({
                                  canUseHeith: res.windowHeight,
                                  scrollViewHeith: res.windowHeight - that.data.useHeith-10
                              })
                              console.log(that.data.canUseHeith)
                              console.log(that.data.scrollViewHeith)
                          },
                    })
                  //})
                //})
            })
        })
    })//这一串都是为了设置scrollview高度
    
  },

  changeNav:function(event){
    let navID = event.currentTarget.id;
    this.setData({
      navID:navID*1
    })
    //this.onShow();
  },

  handleCommit:function(){
    if(this.data.haveCommit==0){
      wx.getUserProfile({
        desc: '用于报名', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            member:this.data.member.concat({id:this.data.curID+1,name:res.userInfo.nickName,
              ava:res.userInfo.avatarUrl}),
            curID:this.data.curID+1,
          }, function() {
            this.setData({
              haveCommit:1
            })
            wx.showToast({
              title: '成功报名',
              icon: 'success',
              duration: 2000
            })
          })
        }
      })
    }
    else{
      wx.showToast({
        title: '您已报名过该活动',
        icon: 'none',
        duration: 2000
      })
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