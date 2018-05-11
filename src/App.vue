<template>
  <div id="myapp">

    <lz-header></lz-header>

    <div id="navbar_box">
      <div id="navbar">
        <div ><img src="./assets/img/home/lzph_home_logo.png" /></div>
        <div class=" text_right " id="navbar_tab">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <span><router-link to="/home" class="" >首页</router-link></span>
          <span><router-link to="/buy" class="">我要买票</router-link></span>
          <span><router-link to="/sell" class="">我要卖票</router-link></span>
          <span><router-link to="/safe" class="">安全保障</router-link></span>
          <span><router-link to="/about" class="">关于我们</router-link></span>
          <span><router-link to="/account" class="">我的账户</router-link></span>
        </div>
      </div>
    </div>
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view id="content"></router-view>
    
    <lz-footer></lz-footer>


  </div>
</template>

<script>
import footer from './components/footer'
import header from './components/header'

export default {
  components: {
    'lz-footer':footer,
    'lz-header':header
  },
  data () {
    return {
      
    }
  }
}


</script>
<style type="text/css">
  body{
    background: #f6f6f6;
    min-width: 1200px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", 微软雅黑, Tahoma, Arial, sans-serif;
  }
  a,a:hover,a:visited,a:link {
    text-decoration: none;
  }

  .text_right{
    text-align: right;
  }
  #navbar_box{
    width: 100%;
    background: #fff;
  }
  #navbar{
    height: 80px;
    line-height: 80px;
    width: 1120px;
    margin: 0 auto;
  }
  #navbar>div{
    display: inline-block;
    width: 48%;
  }
  .margin_x_16{
    margin:0 16px;
  }
  #navbar_tab a{
    font-size: 16px;
    color: #666666;
    padding: 0 8px;
    display: inline-block;
    height: 80px;
  }
  #navbar_tab span:first-child a{
    font-weight: 600;
    color: #004098;
  }
  #navbar_tab span:last-child a{
    border: 1px solid #004098;
    height: 30px;
    border-radius: 3px;
    line-height: 30px;
  }
  #navbar_tab .router-link-active{
    border-bottom: 2px solid #004098;
  }

  #content{
    min-height: 400px;
  }
  
  .text_size_30{
    font-size: 30px;
  }
  .border_right{
    border-right: 1px solid #7d8189;
    padding-right: 60px;
  }
  hr{
    border-top: 1px solid #7d8189;
  }
  .text_center{
    text-align: center;
  }
</style>

