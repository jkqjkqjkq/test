<template>
 <div class="all">
  <!-- loading -->
  <loading v-if="!items.length"></loading>

   <ul class="items">
    <li class="item" v-for='item in items'>  
      <img v-lazy="item.author.avatar_url" alt="">
      <div class="tab">
        <div class="mo" v-if="item.top">置顶</div>
        <div class="mo" v-else-if="item.good">精华</div>
        <div v-else>{{tabs[item.tab]}}</div>
      </div>
      <router-link :to="'/Index/show/'+item.id"tag='div' class="title">{{item.title}}</router-link>
      <div >{{item.last_reply_at}}</div>
    </li>

   </ul>
   <!-- 上下滑动的组件 -->
    <infinite-loading v-if="isShow" @infinite="infiniteHandler"></infinite-loading>
 </div>
</template>

<script>
  //引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
//引入 Loading 组件
import loading from '@/components/Loading'; 
//引入 分页滑动组件
import InfiniteLoading from 'vue-infinite-loading';
//引入时间模块
import {getTime} from '@/getdata/getTopic.js';

export default {
  name: 'All',
  data () {
    return {
     //主题列表
     items:[],
     page:1,
     //loading图片是否显示
     isShow:true,

     tabs:{
      job:'招聘',
      ask:'问答',
      share:'分享',
      dev:'测试'

     }
    }
  },
  //钩子函数
  mounted: function(){
    getTopics({tab:'all',limit:20,page:this.page}).then((response)=>{
      for(var i = 0;i<response.data.data.length; i++){
         response.data.data[i].last_reply_at=getTime(response.data.data[i].last_reply_at)
      }
      this.items=response.data.data;
    });
  },
//分页加载函数
  methods:{
    infiniteHandler($state){
      setTimeout(()=>{
        getTopics({tab:'all',limit:20,page:++this.page}).then((response)=>{
          for(var i = 0;i<response.data.data.length; i++){
         response.data.data[i].last_reply_at=getTime(response.data.data[i].last_reply_at)
      }
          this.items=this.items.concat(response.data.data);
          if(response.data.data.length==0){
            isShow=false;
            return;
          }
          $state.loaded();
        });
      },500);
    },
  },
  //加载组件
   components:{
    //Loading 组件
    loading,InfiniteLoading
   }

}
</script>
<style scoped lang="scss">
// 引入公共的样式
   @import '../../assets/sass/base.scss';
   //引入主题列表样式
    @import '../../assets/sass/itemlist.scss';
    .all{
      margin-top:rem(90px);
      margin-bottom: rem(130px);
    }
   
  
</style>

