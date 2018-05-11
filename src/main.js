// The Vue build version to load with the `import` command
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'  //router 在单独的文件配置，在此只需直接引入


// 第三方库 -bootstrap
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min.js'  

//reset.less
import './assets/css/reset.less'  

// 自定义组件
//import btnGroup from './btngroup.vue'           // btngroup组件

// 注册全局组件
//Vue.component('btn-group', btnGroup)

// 启动前端虚拟服务  //只需要在主入口文件引用mock，这样编译生产包时通过环境变量控制只对开发环境生效
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

Vue.config.productionTip = false

new Vue({
  el: '#myapp',
  router,
  components: { App },
  template: '<App/>'
})
