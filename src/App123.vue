<template>
  <div id="myapp">
    <div id="header">
      <ul class="flex_ul">
        <li><span>客服热线 400-900-9017</span><span>|</span><span>工作时间：09:30 - 18:30（工作日）</span></li>
        <li><span>您好，欢迎来到量子票号</span></li>
      </ul>
     
      
    </div>
    <div id="navbar">
      <ul class="flex_ul">
        <li><img src="./assets/img/lzph_home_logo.png" /></li>
        <li>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/home">首页</router-link>
          <router-link to="/buy">我要买票</router-link>
          <router-link to="/sell">我要卖票</router-link>
          <router-link to="/safe">安全保障</router-link>
          <router-link to="/about">关于我们</router-link>
          <router-link to="/account">我的账户</router-link>
        </li>
      </ul>


    </div>
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view id="content"></router-view>

    <div id="footer">
      <div class="footer_left">
        <ul>
          <li> <router-link to="/home">新手指引</router-link></li>
          <li> <router-link to="/about">关于我们</router-link></li>
          <li> <router-link to="/about">联系我们</router-link></li>
          <li> <router-link to="/safe">平台公告</router-link></li>
          <li> <router-link to="/safe">行业资讯</router-link></li>
          <li> <router-link to="/abouts">政策法规</router-link></li>
        </ul>
      </div>
      <div class="footer_right">
        <div class="img_attention"></div>
        <div class="contactUs"></div>
      </div>
    </div>

  </div>
</template>

<script>


export default {

  components: {
   
  },
  data () {
    return {
      msg:'欢迎来到VUE！',
      one:true
    }
  }
}


</script>
<style type="text/css">
  body{
    background: #f6f6f6;
  }
  #header,#navbar,#footer{
    width: 100%;
    margin: 0 auto;
  }
  #navbar,#navbar ul{
    background: #fff;
    height: 80px;
  }
  #content{
    width:1120px;
    min-height: 200px;
    margin: 0 auto;
  }
  #footer{
    display: flex;
  }

  .flex_ul{
    list-style: none;
    display: flex;
    width:1120px;
    margin: 0 auto;

  }
  .flex_ul>li{
     flex: 1;
  }
  .flex_ul li:last{
    text-align: right;
  }


  #footer>div{
    flex: 1;
  }
  .footer_right{
     display: flex;
  }
  .footer_right>div{
    flex: 1;
  }
</style>

