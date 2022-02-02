// pages/thingsLoad/thingsLoad.js
const recorderManager = wx.getRecorderManager()
// var innerAudioContext = wx.createInnerAudioContext()没区别啊
const innerAudioContext = wx.createInnerAudioContext()
var tempFilePath=""
const app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js')
var qqmapsdk;
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'KZNBZ-IQ26J-JY7FW-KHM22-IGCKH-4IBWH' // 必填
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxWord: 400,
    currentWord: 0,
    tempFilePaths: [],
    play: false,
    canUseHeith: 0,
    areaHeith: 0,
    useHeith: 0,
    longitude:0,
    latitude:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KZNBZ-IQ26J-JY7FW-KHM22-IGCKH-4IBWH' //这里自己的key秘钥进行填充
    });
    wx.showLoading({
      title: "定位中",
      mask: true
    });

    
  },

  getLocal: function (latitude, longitude) {
    let that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log("获得地点",JSON.stringify(res)); 
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let district = res.result.ad_info.district
        that.setData({
          province: province,//省
          city: city,//市
          district: district,//区

        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },

  // bindregionchange: function (e) {
  //   var that = this
  //   if (e.type == "begin") {
  //     console.log("begin");
  //   } else if (e.type == "end") {
  //     var mapCtx = wx.createMapContext("ofoMap")
  //     mapCtx.getCenterLocation({
  //       success: function (res) {
  //         var latitude = res.latitude
  //         var longitude = res.longitude
  //         console.log(latitude,longitude)
  //         that.getLocal(latitude, longitude)
  //       }
  //     })
  //   }
  // },

  toMap:function(){
    wx.switchTab({
      url: '/pages/map/index',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },


  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },

  limitWord: function (e) {
    var that = this;
    var value = e.detail.value;
    var wordLength = parseInt(value.length); //解析字符串长度转换成整数。
    if (that.data.maxWord < wordLength) {
      return;
    }
    that.setData({
      currentWord: wordLength
    });
    //console.log(e.detail.value)
  },

  loadpic: function () {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          tempFilePaths: that.data.tempFilePaths.concat(res.tempFilePaths),
        })
      }
    });

  },

  previewImg: function (e) {
    var that = this;
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      //当前显示图片
      current: this.data.tempFilePaths[index],
      //所有图片
      urls: this.data.tempFilePaths
    })
  },


  deleteImg: function (e) {
    var that = this;
    var imgs = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      tempFilePaths: imgs,
    });
  },

  start: function () {

    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
    wx.showToast({
          title: '正在录音',
          icon: 'none',
          duration: 10000
        })
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },


  //停止录音
  stop: function () {
    wx.hideToast();
    recorderManager.stop();
    recorderManager.onStop((res) => {
      // if (res.duration < 2000) {
      //   wx.showToast({
      //     title: '录音时间太短，请长按录音',
      //     icon: 'none',
      //     duration: 1000
      //   })
      // } else {
        this.tempFilePath = res.tempFilePath
        wx.showToast({
          title: '录音已完成',
          icon: 'none',
          duration: 1000
        })
      //}
    })
  },

  tapTip: function () {
    wx.showToast({
      title: '请长按说话',
      icon: 'none',
      duration: 2000
    })
  },

  //播放声音
  play: function () {
    if(this.tempFilePath === undefined){
      wx.showToast({
        title:'还没有录音',
        icon:'none',
        duration:1000
      })
    }
    else{
      innerAudioContext.src = this.tempFilePath
      if(this.data.play == 0){
        this.setData({
          play:true
        })
        innerAudioContext.play()
        innerAudioContext.onPlay(() => {
          wx.showToast({
            title:'正在播放录音',
            icon:'none',
            duration:10000
          })
        })
      }
      else{
        innerAudioContext.pause()
        innerAudioContext.onPause(() => {
          wx.showToast({
            title:'播放已暂停',
            icon:'none',
            duration:1000
          })
          this.setData({
            play:false
          })
        })
      }
      innerAudioContext.onEnded(() => {
        wx.hideToast()
        wx.showToast({
          title:'播放已结束',
          icon:'none',
          duration:1000
        })
        this.setData({
          play:false
        })
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
    var that = this;
    console.log("onShow");
    that.mapCtx = wx.createMapContext("ofoMap");

    //如果从地图页面获取到了上报的经纬度
    var latitude = getApp().globalData.latitude
    var longitude = getApp().globalData.longitude
    console.log(latitude,longitude)
    if(latitude==undefined||longitude==undefined){
      wx.getLocation({
        type: 'wgs84',
        //定位成功，更新定位结果
        success: function (res) {
  
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
          //经纬度转化为地址
          that.getLocal(latitude, longitude)
          that.setData({
            longitude: longitude,
            latitude: latitude,
            speed: speed,
            accuracy: accuracy,
            //markers:that.data.markers+[{latitude:latitude,longitude: longitude,iconPath: '/icons/mark.png'}]
          })
          
  
        },
        //定位失败回调
        fail: function () {
          wx.showToast({
            title: "定位失败",
            icon: "none"
          })
        },
  
        complete: function () {
          //隐藏定位中信息进度
          wx.hideLoading()
        }
  
      })
    }
    else{
      //经纬度转化为地址
      that.getLocal(latitude, longitude)
      that.setData({
        longitude: longitude,
        latitude: latitude,
        //markers:that.data.markers+[{latitude:latitude,longitude: longitude,iconPath: '/icons/mark.png'}]
      })
      console.log(this.data.longitude)
      wx.hideLoading()
    }


    //this.movetoPosition();
    that.mapCtx.getCenterLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getLocal(latitude, longitude)
      }
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