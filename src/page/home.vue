<template>
  <div >
    <div class="banner">
      <slider :pages="pages" :sliderinit="sliderinit">
      </slider>
    </div>
    <div class="point_box ">
      <div class=" point">
        <div class="one">
          <img src="@/assets/img/home/lzph_home_zijinanquan.png" />
          <p><b>资金安全</b><br/>
            <span>接入兴业执剑人系统资金银行监管，先打款、再背书
            </span>
          </p>
        </div>
        <div class="one">
          <img src="@/assets/img/home/lzph_home_zijin.png" />
          <p><b>资金安全</b><br/>
            <span>接入兴业执剑人系统资金银行监管，先打款、再背书
            </span>
          </p>
        </div>
        <div class="one">
          <img src="@/assets/img/home/lzph_home_gaoxiao.png" />
          <p><b>资金安全</b><br/>
            <span>接入兴业执剑人系统资金银行监管，先打款、再背书
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="main_box">
      <div class="main">
        <div class="left_box"></div>
        <!-- <div class="right_box ">
          <ul>
              <li>票据类型</li>
              <li>承兑人</li>
              <li>金额(万元)</li>
              <li>汇票到期日</li>
              <li>剩余天数</li>
              <li>议价方式</li>
              <li>操作</li>
            </ul>
            <ul v-for="(item,index) in products" v-if="index<8">
              <li>电商</li>
              <li>{{ item.acceptanceEnterprise }}{{ index }}</li>
              <li>{{ item.realAmount }}</li>
              <li>{{ item.endDate }}</li>
              <li>{{ item.days }}</li>
              <li>{{ item.bargainType }}</li>
              <li>{{ item.status }}</li>
            </ul>
          <div v-if="products.length>8" class="getmoredata"><router-link to="/buy" class="">查看更多票据>></router-link> </div>
        </div> -->
        <litable :thead="title" :tbody="products" :isPage="false"></litable>
      </div>
    </div>
    <div class="steps_box">
      <div class="steps">
        <img src="@/assets/img/home/lzph_home_jylc.png" />
      </div>
    </div>
    <div class="news_box">
      <div class="news">
        <div class="platform_news">
          <p>平台动态<span><router-link to="/sell" >更多>></router-link></span></p>
          <div class="content">
            <p><img src="@/assets/img/home/lzph_home_hyzx01.png" /></p>
            <ul>
              <router-link to="/sell" v-for="(item1,index) in platform_news" :key="index" v-if="index<5" ><li class="one_new"><span>{{ item1.title }}</span><span class="content_time">{{ item1.sendDate}}</span></li></router-link>
            </ul>
          </div>
        </div>
        <div class="profession_news">
          <p>行业资讯<span><router-link to="/sell" >更多>></router-link></span></p>
          <div class="content">
            <p><img/></p>
            <ul>
              <router-link to="/sell" v-for="(item2,index) in profession_news" :key="index" v-if="index<5" ><li class="another_new"><span>{{ item2.title }}</span><span class="content_time">{{ item2.sendDate}}</span></li></router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="partner_box">
      <div class="partner">
        <p class="lhp-tit">合作伙伴</p>
        <p><img src="@/assets/img/home/lzph_home_hzhb.png" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGet } from 'xe-ajax' // 引入xe-ajax组件
import slider from 'vue-concise-slider'// 引入slider组件

import litable from '@/components/litable'

export default {
  data(){
    return{
      title:{},
      products:[],
      platform_news:[],
      profession_news:[],
      img_arr:[],
      pages:[],
      sliderinit:{ //滑动配置[obj]
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:5000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动vertical
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
      }
    }

  },
  components:{
      slider,litable
  },
  methods:{
    init () {
      fetchGet('services/home', {id: 123}).then(response => {
        if (response.ok) {
          response.json().then(data => {
            //console.log("data",data)
            this.title=data.title
            this.products = data.product
            this.platform_news = data.platformNews
            this.profession_news = data.professionNews
            this.img_arr=data.imgArr
            this.slide()
          })
        }
      })
    },
    slide () {
      let imgs=this.img_arr;
      for(let i=0;i<imgs.length;i++){
        let oneAddr=require("@/assets/img/home/"+imgs[i])//试验多次 require(变量)会报错，require(字符串路径)，require(字符串路径+变量) 都没问题
        //console.log("oneAddr:",oneAddr)
        let oneUrl = 'url('+oneAddr+') no-repeat'
        this.pages.push({title:'',style:{background:oneUrl}})
      }
    }
  },
  created () {
    //console.log('this:',this)
    this.init()
  }
  

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .banner{
    width: 100%;
    height: 350px;
  }

  .point_box,.partner_box{
    width: 100%;
    background-color: #fff;
  }
  .main_box,.steps_box,.news_box{
     width: 100%;
  }
  .main,.point,.steps,.news,.partner{
    width: 1120px;
    margin: 0 auto;

  }
  .point{
    height: 154px;
    padding: 30px 0;

  }
  .main{
    height: 528px;
    margin: 12px auto;
    display: flex;
    background-color: #fff;
  }
  .main>div{
    display: inline-block;
  }
  .one {
    display: inline-block;
    width: 33%;
  }
  .one img{
    float: left;
    width: 82px;
  }
  .one p{
    width: 60%;
    float: left;
    margin: 14px 0 0 20px;
  }
  .one p b{
    font-size: 16px;
  }
  .one p span{
    position: relative;
    top: 8px;
  }
  
  .left_box {
    width: 212px;
    height: 528px;
    position: relative;
    background: url(../assets/img/home/lzph_home_contbg.png) no-repeat;
    background-size: 100% 100%;
  }
 
  .table_box{
    width:862px;
    margin:0 auto;
  }
  .steps{
    margin: 12px auto;
    padding: 0;
    text-align: center;
  }
  .news{
    display: flex;
    margin: 12px auto;
    padding: 0 30px;
    padding-bottom: 44px;
    background-color: #fff;
  }
  .platform_news{
      margin-right: 50px;
      flex: 1;
  }
  .profession_news{
      flex: 1;
  }
  a{
    color: #999999;
  }
  .platform_news>p, .profession_news>p {

    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    border-bottom: 1px solid #dcdcdc;
    position: relative;
  }
  .platform_news>p span, .profession_news>p span {
    cursor: pointer;
    font-size: 14px;
    color: #999999;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  .content{
    margin-top: 14px;
    display: flex;
  }
  .content a{
    color: #333333;
  }
  .content ul{
    position: relative;
    flex: 1;
  }
  .platform_news .content ul{
    margin-left: 14px;
  }
  .profession_news li:before{
    width: 5px;
    height: 5px;
    content: " ";
    background-color: #bfbfbf;
    border-radius: 50%;
    position: absolute;
    top: 12px;
    left: -12px;
    z-index: 333;

  }
  .one_new,.another_new {
    display: flex;
    line-height: 28px;
    position: relative;
  }
  .another_new span:first-child{
    width: 380px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .one_new span:first-child{
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content_time{
    position: absolute;
    right: 0;
  }
  .partner{
        padding-bottom: 56px;
  }
  .lhp-tit {
    display: block;
    width: 1090px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 16px;
    padding-left: 30px;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
    border-bottom: 1px solid #dcdcdc;
}






</style>