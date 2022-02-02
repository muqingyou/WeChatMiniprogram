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
    controls: [],
    longitude: 0,
    latitude: 0,
    speed: 0,
    accuracy: 0,
    province: "",
    city: "",
    district: "",
    showview: true,
    suggestion: [],
    backfill: "",
    selectedId: 0,
    nearList: [],
    suggestion: [],
    scale: 16,
    markers: [
      {
        id:1,
        latitude: 30.568996229,
        longitude: 103.955601454,
        iconPath: '/icons/mark.png',
        callout:{
          display:'BYCLICK',
          content:'成都双流国际机场发生了洪灾',
          bgColor:'#ffffff',
          color: 'rgb(255,0,0)',
          fontSize:15,
          borderColor:'rgb(255,0,0)',
          borderWidth:1,
          borderRadius:10,
          padding:2
        }
      },
      {
        id:2,
        latitude: 30.644531,
        longitude: 104.04995,
        iconPath: '/icons/mark.png',
        callout:{
          display:'BYCLICK',
          content:'武侯祠大街\n',
          bgColor:'#ffffff',
          color:'rgb(255,0,0)'
        }
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KZNBZ-IQ26J-JY7FW-KHM22-IGCKH-4IBWH' //这里自己的key秘钥进行填充
    });
    wx.showModal({
      title: '提示',
      content: '点击右下角，回到当前位置。点击地点上报，上报绿色图标位置。',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    var that = this
    // wx.showLoading({
    //   title: "定位中",
    //   mask: true
    // })

    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [
            {
              id: 1,
              iconPath: '/icons/maker.png',   //  大头针图片
              position: {
                left: res.windowWidth / 2 - 11,
                top: res.windowHeight / 2 - 70,
                width: 26,
                height: 45
              },

              clickable: true
            },
            {
              id: 2,
              iconPath: '/icons/location.png', // 左下角定位图片
              position: {
                left: 20,
                top: res.windowHeight - 100,
                width: 40,
                height: 40
              },
              clickable: true
            },
          ],
        })
      }
    })
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

  },

  getLocal: function (latitude, longitude) {
    let that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
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

  bindregionchange: function (e) {
    var that = this
    if (e.type == "begin") {
      console.log("begin");
    } else if (e.type == "end") {
      console.log("end");
      var mapCtx = wx.createMapContext("ofoMap")
      mapCtx.getCenterLocation({
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          that.getLocal(latitude, longitude)
          that.setData({
            latitude:latitude,
            longitude:longitude
          })
        }
      })
    }
  },

  bindcontroltap: function (e) {
    switch (e.controlId) {
      // 当点击图标location.png的图标，则触发事件movetoPositioon()
      case 2:
        this.movetoPosition();
        break;
    }

  },

  submit:function(){
    console.log(this.data.latitude,this.data.longitude)
    getApp().globalData.longitude=this.data.longitude
    getApp().globalData.latitude=this.data.latitude
    console.log(getApp().globalData.latitude,getApp().globalData.longitude)
    wx.switchTab({
      url: '/pages/thingsLoad/thingsLoad',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  movetoPosition: function () {
    this.mapCtx.moveToLocation();
  },

  //触发关键词输入提示事件
  getsuggest: function (e) {
    var _this = this;
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: '上海', //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size: 8,
      success: function (res) {//搜索成功后的回调
        console.log(res);
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({
          showview: false
        })
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sug

        });
      },
      fail: function (error) {
        console.error(error + "失败");
        _this.setData({
          showview: true
        })
      },
      complete: function (res) {
        console.log(res);

      }
    });
  },

  //方法回填
  backfill: function (e) {
    console.log("点击");
    this.setData({
      showview: true
    })
    var id = e.currentTarget.id;
    for (var i = 0; i < this.data.suggestion.length; i++) {
      if (i == id) {
        this.setData({
          backfill: this.data.suggestion[i].title,
          latitude: this.data.suggestion[i].latitude,
          longitude: this.data.suggestion[i].longitude
        });
        this.nearby_search();
        return;
      }
    }
  },

  // 根据关键词搜索附近位置
  nearby_search: function () {
    var self = this;

    // 调用接口
    qqmapsdk.search({
      keyword: self.data.detail,  //搜索关键词
      //boundary: 'nearby(' + self.data.latitude + ', ' + self.data.longitude + ', 1000, 16)',
      location: self.data.latitude + ',' + self.data.longitude,
      page_size: 20,
      page_index: 1,
      success: function (res) { //搜索成功后的回调
        //console.log(res.data)
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            province: res.data[i].ad_info.province,
            city: res.data[i].ad_info.city,
            district: res.data[i].ad_info.district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        self.setData({
          selectedId: 0,
          nearList: sug,
          suggestion: sug
        })
        self.addMarker(sug[0]);
      },
      fail: function (res) {
        //console.log(res);
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },

  navigate: function (e){
    console.log(e.detail)//获得标记id
    wx.navigateTo({
      url: '',
      success: (result) => {
        
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
    var that = this;
    console.log("onShow");
    that.mapCtx = wx.createMapContext("ofoMap");
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