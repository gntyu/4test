<template>
 <div class="table_box ">
    <ul>
      <li v-for="(td,key) in thead" :value="key">{{ td }}</li>
    </ul>
    <ul v-for="(item,index) in currentArr" v-if="index<lineNumber">
      <li v-for="(value,key) in item" :value="key"> {{ value }}</li>
    </ul>
    <div v-if="tbody.length<1" class="noData">暂时没有数据！</div>
    <div class="pagination" v-if="isPage&&tbody.length>1">
      <div class="page">
        <span @click="pageto(0)">首页</span>
        <span @click="pageto(currentPage-1)" class="prev"><i></i></span>
        <span v-for="(arr,idx) in newArr" v-if="idx<8" :class="{current:pages[idx]}" @click="pageto(idx)" >{{ idx+1 }}</span>
        <span @click="pageto(currentPage+1)"class="next"><i></i></span>
        <span class="last" @click="pageto(newArr.length-1)">尾页</span>
        <span class="sum">共{{ newArr.length }}页</span>
      </div>
    </div>
    
    <div v-if="!isPage&&tbody.length>lineNumber" class="getmoredata"><router-link to="/buy" class="">查看更多票据>></router-link> </div>

</div>

</template>


<script>
export default {
  name:'li-table',//radio组件名称
  // model: {//自定义 v-model的  prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
  //   prop: 'vmodel',
  //   event: 'change'
  // },
  props:{
    thead:{
      type:Object,
      require:true
    },
    tbody:{
      type:Array,
      require:true,
    },
    lineNumber:{//显示多少行数据
      type:Number,
      default:8
    },
    isPage:{//是否有分页
      type:Boolean,
      default:false
    }
    // vmodel:{//这里的model指的是上面定义的v-model的prop
    //   type:[String,Number],
    //   require:true
    // },

  },
  data(){
    return {
      newArr:[],
      currentArr:[],
      currentPage:0,
      pageNo:0,
      pages:[true,false,false,false,false,false,false,false]//固定最多显示八个页码号
    }
  },
  watch:{
  //因为tbody是父组件y异步ajax请求到的数据
  //需要watch监控到了才能进行数据处理
  //thead 不需要数据处理,异步得到的数据及时更新到dom
    'tbody':function(arr){
      let lineNo=this.lineNumber
      //console.log("arr",arr)
      this.pageNo=Math.ceil(arr.length/lineNo)
      this.currentArr=arr.slice(0,lineNo)
      for(let i=0;i<this.pageNo;i++){
        this.newArr.push(arr.slice(i*lineNo,(i+1)*lineNo))
      }
    }
  },
  mounted (){//当dom渲染完成
    //this.countPage()
    // if(this.checked===true)
    //   this.updateVal();
  },
  methods:{
    pageto (idx){
      if(idx>=0&&idx<=this.newArr.length-1){
        this.pages=[false,false,false,false,false,false,false,false]
        this.pages[idx]=true
        this.currentArr=this.newArr[idx]
        this.currentPage=idx
      }
      //console.log('idx:',idx)       
    }
    // updateVal:function(){//当用户点击radio时,触发change事件更新v-model
    //   this.$emit('change',this.$refs.radio.value);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table_box ul{
    display: flex;
    width: 100%;
    padding: 18px 20px 18px 26px;
    font-weight: normal;
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    border-bottom: 1px dashed #ebebeb;
  }
  .table_box ul:first-child{
    font-size: 16px;
    font-weight: 600;
    padding: 22px 20px 22px 26px;
    border-bottom: 1px solid #ebebeb;
  }

  li{
    display: list-item;
    flex: 1;
  }
  /*.table_box ul li:nth-child(1) {
      width: 90px;
  }
  .table_box ul li:nth-child(2) {
      width: 222px;
  }
  .table_box ul li:nth-child(3) {
      width: 112px;
  }
  .table_box ul li:nth-child(4) {
      width: 130px;
  }
  .table_box ul li:nth-child(5) {
      width: 106px;
  }
  .table_box ul li:nth-child(6) {
      width: 104px;
  }
  .table_box ul li:nth-child(7) {
      width: 80px;
  }*/
  .getmoredata {
    cursor: pointer;
    width: 180px;
    height: 30px;
    margin: 10px auto;
    margin-top: 11px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #174097;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
  }
  .noData{
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 14px;
    color: #174097;
    margin:10px;
  }

  .getmoredata a{
    color: #174097;
  }
  .pagination {
    width: 100%;
    background: #ffffff;
    text-align: center;
  }
  .page {
    height: 26px;
    display: inline-block;
  }
  .page span {
    display: block;
    float: left;
    display: inline;
    padding: 0 9px;
    height: 26px;
    line-height: 26px;
    color: #9d9d9d;
    font-size: 12px;
    margin: 0 3px;
    background: #f3f4f6;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    cursor: pointer;
  }
  .page span.current {
    background: #004098;
    color: #ffffff;
  }
  .prev i {
    background: url(../assets/img/common/dan_left.png) no-repeat center center;
  }

  .prev i, .next i {
      width: 10px;
      height: 15px;
      display: block;
      margin: 5px auto;
  }
  .next i {
    background: url(../assets/img/common/dan_right.png) no-repeat center center;
  }

</style>