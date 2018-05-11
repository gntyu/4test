import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Buy from '@/page/buy'
import Sell from '@/page/sell'
import Safe from '@/page/safe'
import About from '@/page/about'
import Account from '@/page/account'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '*', redirect: '/home'},//不存在的路径重定向到home
    {path: '/home', component: Home},
    {path: '/buy', component: Buy},
    {path: '/sell', component: Sell},
    {path: '/safe', component: Safe},
    {path: '/about', component: About},
    {path: '/account', component: Account},
  ],
  // methods: {
  //   goBack () {
  //     window.history.length > 1
  //       ? this.$router.go(-1)
  //       : this.$router.push('/')
  //   }
  // }
})
