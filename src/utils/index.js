 export const format_publishTime = (publish_time) =>{
    if(!publish_time) return
    publish_time = publish_time * 1
    const now = Date.parse(new Date())  ;
    const null_dian = (new Date(new Date().toDateString()).getTime()) //当天0点
    if(now - publish_time < 60000*2){
      return '刚刚'
    }
    if(publish_time > null_dian){//说明明是今天发布的
      const time = (now - publish_time)/1000/3600
      if( time >= 1){
        return parseInt(time) + ' 小时前'
      }else{
        return parseInt(time*60)  + ' 分钟前'
      }
    }else{
      if(null_dian - publish_time < 86400000){
        return '昨天 '+ new Date(publish_time).toLocaleTimeString()
      }
      else if(parseInt((now - publish_time)/(60*60*24*1000) + 1) <= 5){
        return parseInt((now - publish_time)/(60*60*24*1000) + 1) + '天前'
      }
      else{
        return new Date(publish_time).toLocaleString()
      }
    }
  }
  /* 检测小程序更新
  *
  * @since 1.0.0
  * @returns {void}
  */
 export function getUpdate() {
   const updateManager = uni.getUpdateManager()
 
   updateManager.onUpdateReady(function () {
     uni.showModal({
       title: '更新提示',
       content: '新版本已经准备好，是否重启应用？',
       success(res) {
         if (res.confirm) {
           updateManager.applyUpdate()
         }
       }
     })
   })
 }