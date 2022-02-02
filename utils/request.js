
import config from './config'
export default(url,data={},method='GET')=>{
    return new Promise((resolve,reject)=>{
        // wx.request({
        //     url: '',
        //     data: {},
        //     header: {'content-type':'application/json'},
        //     method: 'GET',
        //     dataType: 'json',
        //     responseType: 'text',
        //     success: (result) => {
                
        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });
          
        wx.request({
            url:config.host+url,
            data,
            method,
            header:{
                //同步，保证执行完再下面
                cookie:wx.getStorageSync('cookies')?
                    wx.getStorageSync('cookies').find(item=>
                    item.indexOf('MUSIC_U')!==-1):''          
            },
            success: (result) => {
                console.log('成功：',result);
                resolve(result);
            },
            fail: (err) => {
                console.log('失败：',err);
                reject(err);
            }
        })
    })
    
    
}