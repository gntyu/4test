<template>
<div>
  <div class="filter_box">
    <div class="filter">
    	<ul class="content">
    		<li>
    			<div class="title">票面金额：</div>
    			<div class="condition">
    				<label @click="filter"><uiradio value="1" v-model="option.pmje"></uiradio><span>不限</span></label>
    				<label @click="filter"><uiradio value="2" v-model="option.pmje"></uiradio><span>小于100万</span></label>
    				<label @click="filter"><uiradio value="3" v-model="option.pmje"></uiradio><span>100-500万</span></label>
    				<label @click="filter"><uiradio value="4" v-model="option.pmje"></uiradio><span>大于500万</span></label>
    			</div>
    		</li>
    		<li>
    			<div class="title">到期期限：</div>
    			<div class="condition">
    				<label @click="filter"><uiradio value="1" v-model="option.dqqx" ></uiradio><span>不限</span></label>
    				<label @click="filter"><uiradio value="2" v-model="option.dqqx" ></uiradio><span>小于30天</span></label>
    				<label @click="filter"><uiradio value="3" v-model="option.dqqx"  ></uiradio><span>30-180天</span></label>
    				<label @click="filter"><uiradio value="4" v-model="option.dqqx" ></uiradio><span>大于180天</span></label>
    			</div>
    		</li>
    		<li>
    			<div class="title">议价方式：</div>
    			<div class="condition">
    				<label @click="filter"><uiradio value="1" v-model="option.yjfs" ></uiradio><span>不限</span></label>
    				<label @click="filter"><uiradio value="2" v-model="option.yjfs"></uiradio><span>一口价</span></label>
    				<label @click="filter"><uiradio value="3" v-model="option.yjfs"></uiradio><span>竞价</span></label>
    			</div>
    		</li>
    		<li>
    			<div class="title">交易状态：</div>
    			<div class="condition">
    				<label @click="filter"><uiradio value="1" v-model="option.jyzt"></uiradio><span>不限</span></label>
    				<label @click="filter"><uiradio value="2" v-model="option.jyzt"></uiradio><span>待交易</span></label>
    				<label @click="filter"><uiradio value="3" v-model="option.jyzt"></uiradio><span>交易中</span></label>
    				<label @click="filter"><uiradio value="4" v-model="option.jyzt"></uiradio><span>交易完成</span></label>
    			</div>
    		</li>
    	</ul>
    	<a class="emptyConditionBtn" @click="clear">清空筛选条件</a>
    </div>
  </div>
  <div class="result_box">
  	<div class="result">
  		<litable :thead="title" :tbody="products" :isPage="true"></litable>
  	</div>
  </div>
</div>
</template>

<script>
import uiradio from '@/components/uiradio'
import litable from '@/components/litable'
import { fetchGet } from 'xe-ajax' // 引入xe-ajax组件


export default {
	data(){
		return {
			option:{pmje:"1",dqqx:"1",yjfs:"1",jyzt:"1"},
			title:{},
			products:[]
		}
	},
	components:{
		uiradio,
		litable
	},
	methods:{
		clear(){
			this.option={pmje:1,dqqx:1,yjfs:1,jyzt:1}
		},
		init(){
			fetchGet('services/buy', {}).then(response => {
		        if (response.ok) {
		          response.json().then(data => {
		            console.log("data",data)
		            this.title = data.title
		            this.products = data.product
		          })
		        }
		    })
		},
		filter(){
			console.log('option',this.option)
			let arr=this.products
			let realAmount=option.pmje
			let endDate=option.dqqx
			let bargainType=option.yjfs
			let status=option.jyzt
			// for(let i=0;i<arr.length;i++){
			// 	if(Number(realAmount)==1&&Number(arr[i].realAmount)>100){
			// 		arr.
			// 	}
			// }
			let data1=[],data2=[],data3=[],data4=[]
			if(Number(realAmount)==1){
				arr.filter(function(e){
			        if(Number(e.realAmount) < 100){
			            data1.push(e)
			        }
			    })
			}else if(Number(realAmount)==2){
				arr.filter(function(e){
			        if(Number(e.realAmount) <= 500){
			            data1.push(e)
			        }
			    })
			}else if(Number(realAmount)==3){
				arr.filter(function(e){
			        if(Number(e.realAmount) > 500){
			            data1.push(e)
			        }
			    })
			}
			this.products=data1
			
		}
	},
	created () {
	   this.init()
	}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.filter_box,.result_box{
		width: 100%;
	}
	.filter,.result{
		width: 1120px;
		margin:0 auto;
		background: #fff;
		padding: 23px 0;
		position: relative;
	}
	.result_box{
		margin-bottom: 30px;
	}
	.filter{
		margin: 30px auto;
	}
	.content li{
	    position: relative;
	    padding: 12px 0 13px 155px;
	}
    .title{
	    color: #707178;
	    font-size: 14px;
	    line-height: 24px;
	    position: absolute;
	    left: 40px;
	    top: 12px;
    }
    .condition label{
    	font-weight: 300;
	    margin-right: 35px;
	    color: #404758;
	    font-size: 14px;
	    line-height: 1;
	    cursor: pointer; 
    }
    .condition>label>label{
    	margin-right: 15px;
    }
    .emptyConditionBtn {
	    display: block;
	    width: 116px;
	    height: 32px;
	    border: solid 1px #004098;
	    background: #ffffff;
	    color: #004098;
	    font-size: 12px;
	    line-height: 32px;
	    text-align: center;
	    position: absolute;
	    right: 33px;
	    bottom:30px;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    border-radius: 3px;
	}

</style>