<template>
	<div id="footer_box" >
    <div id="footer">
      <div class="footer_left">
          <div>
              <p> <router-link to="/home">新手指引</router-link></p>
              <p> <router-link to="/about">关于我们</router-link></p>
              <p> <router-link to="/about">联系我们</router-link></p>
          </div>
          <div >
            <p> <router-link to="/safe">平台公告</router-link></p>
            <p> <router-link to="/safe">行业资讯</router-link></p>
            <p> <router-link to="/abouts">政策法规</router-link></p>
          </div>  
      </div>
      <div class="footer_right">
        <div class="footer_sao">
          <img src="@/assets/img/headfoot/lzph_home_erweima.png" />
          <p >扫一扫 关注我们</p>
        </div>
        <div class="contactUs">
          <div >
            <div class="text_right"><img src="@/assets/img/headfoot/lzph_home_tell.png" /></div>
            <div ><p>客服热线</p><p class="text_size_30">400-900-7917</p></div>
          </div>
          <div >
            <div class=" text_right"><img src="@/assets/img/headfoot/lzph_home_time.png" /></div>
            <div ><p>周一至周五 09：30-18：30</p></div>
          </div>
        </div>
      </div>

   
  </div>
  <hr/>
  <p class="text_center">Copyright2016-2018 商会网（北京）投资发展有限公司 京ICP备18022944号-1</p>
</div>
  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a,a:hover{
     color: #7d8189;
  }
	#footer_box{
	    width: 100%;
	    background-color: #1e232e;
	    padding: 20px 0 ;
	    color: #7d8189;
	    font-size: 14px;
	 }
   #footer_box>p{
      margin: 20px 0;
   }
   #footer{
      width: 1120px;
      margin: 30px auto;
      height: 125px;
   }

   .footer_left,.footer_right{
      width: 48%;
      display: inline-block;
      float: left;
      height: 125px;
   }

  .footer_left>div{
      padding: 0 15px;
   }

   .footer_left>div,.footer_right>div{
      display: inline-block;
     
   }
   .footer_right img{
    vertical-align: middle;
   }

   .footer_left>div p{
      margin-bottom: 20px; 

   }
   .footer_sao{
    text-align: center;

   }
   .contactUs,.footer_sao{
      float: left;
   }
   .contactUs{
      height: 120px;
      margin-left: 40px;
      border-left: 1px solid #7d8189;
      padding-left: 40px;
   }
   .contactUs>div>div{
      display: inline-block;
   }
   .contactUs>div:last-child{
       margin-top: 15px;
   }
  
   .contactUs>div>div:first-child{
    float: left;
   }
   .contactUs>div>div:last-child{
      padding-left: 30px;
   }
   .contactUs>div:last-child>div:last-child{
    position: relative;
    top: 10px;
   }



   hr{
    clear: both;
   }


</style>
