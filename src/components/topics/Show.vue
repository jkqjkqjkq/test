<template>
  <div class="show">
      
      <!-- 分类 -->
      <div class="tab">
        <span class="cur" v-if="item&&item.top">置顶</span>
        <span class="cur" v-else-if="item&&item.good">精华</span>
        <span v-else>{{tabs[item&&item.tab]}}</span>
        <!-- 标题 -->
        <a>{{item&&item.title}}</a>
      </div>
      
  		<ul class="detail_intro">
        <!-- 发布时间 -->
        <li>· 发布于 {{item&&item.create_at}}</li>
        <!-- 作者 -->
        <li>· 作者 {{item&&item.author.loginname}}</li>
        <!--浏览 -->
        <li>· {{item&&item.visit_count}} 次浏览</li>
        <!-- 最后一次编辑 -->
        <li>· 最后一次编辑是 {{item&&item.last_reply_at}}</li>
        <!-- 来自 -->
        <li>· 来自 {{tabs[item&&item.tab]}}</li>
      </ul>
      
      
      <!-- 正文 -->
      <div class="detail_content" v-html="item&&item.content">
      </div>
      <!-- 回复 -->
      <!-- 回复数量 -->
      <div class="reply_count">{{item&&item.reply_count}} 回复</div>
   

      <ul class="item_replies">
        <li class="item_reply" v-for="item in item&&item.replies">
          <div class="reply_img">
            <img v-lazy="item&&item.author.avatar_url" alt="">
            <div class="reply_span">
              <span class="author_name">{{item.author.loginname}}</span>
              <span class="create_time">{{item.create_at}}</span>
              <span v-if="item.ups.length==0"></span>
              <span class="Ups" v-else><i class="iconfont icon-icon_good"></i>{{item.ups.length}} 赞</span>
            </div>
          </div>
          <div class="replies_content" v-html="item.content"></div>
        </li>
      </ul>
  </div>
</template>

<script>
	  //引入 取数据的模块
	import {getTopicData} from '@/getdata/getTopic.js'
  import {getTime} from '@/getdata/getTopic.js'
  import InfiniteLoading from 'vue-infinite-loading';
  import loading from '@/components/Loading';

export default {
  name: 'Show',
  data () {
    return {
      item:null,
      page:1,
      isShow:true,
      tabs:{
        job:'招聘',
        ask:'问答',
        share:'分享',
        dev:'测试'
      },

    }
  },
  mounted: function(){
  	var id=this.$route.params.id;
    
  	getTopicData(id).then((response)=>{
  		console.log(response);
       response.data.data.last_reply_at=getTime(response.data.data.last_reply_at)
        response.data.data.create_at=getTime(response.data.data.create_at)
        for(var i = 0;i<response.data.data.replies.length; i++){
         response.data.data.replies[i].create_at=getTime(response.data.data.replies[i].create_at)
      }
  		this.item=response.data.data;
  	})
  },
  methods:{
    infiniteHandler($state){
      setTimeout(()=>{
        var id=this.$route.params.id;
        getTopicData(id).then((response)=>{
          
          this.item=this.item.replies.concat(response.data.data.replies);
          if(response.data.data.replies.length==0){
            isShow=false;
            return;
          }
          $state.loaded();
        });
      },500);
    },
  },
  components:{
   InfiniteLoading,loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
// 引入 公共样式
  @import '../../assets/sass/base.scss';
	.show{
    width: 95%;
		margin: rem(130px) auto;
    // 分类
    .tab{
        display:inline-block;
      .cur{
        background:#80BD01;
        color:#ffffff;
      }
      span{
        display:inline-block;
        width:rem(80px);
        height:rem(50px);
        border-radius:rem(8px);
        font-size:rem(30px);
        text-align:center;
        line-height:rem(50px);
        margin-left:rem(20px);
        margin-right:rem(20px);
        background:#eee;
        color:#222;
      }
      a{
        font-size:rem(45px);
        font-weight: bold;
      }
    }
    ul.detail_intro{
      margin-top: rem(20px);
      margin-bottom: rem(30px);
      color:#999;
      font-size:rem(25px);
      li{
        display:inline-block;
        margin-top: rem(10px);
      }
    }
    // 正文
    .detail_content{
      width:100%;
      border-top:rem(0.5px) solid #ccc;
      padding-top: rem(20px);
      p{
        color:black;
        line-height:rem(60px);
        font-size:rem(30px);
        padding:rem(10px);
        img{
          width:95%;
          margin: rem(40px) 2.5%;
        }
      }
      h3{
        font-size:rem(40px);
        font-weight:bold;
        margin-top: rem(30px);
        margin-bottom: rem(30px);
      }
      a{
        word-break: break-word;
        white-space: pre-wrap;
      }
      ul{
        margin-top: rem(30px);
        list-style: square;
        li{
          font-size:rem(30px);
          padding: rem(20px);
        }
      }
    }
    // 回复
    .reply_count{
      font-size:rem(40px);
      width:96%;
      height:rem(80px);
      margin:rem(20px) auto;
      background:#eee;
      border-radius:rem(20px);
      line-height:rem(80px);
      padding-left: rem(20px);
      font-weight:bold;
      font-family: '宋体';
    }
    ul.item_replies{
      li.item_reply{
        width:100%;
        border-top:rem(1px) solid #ccc;
        // 回复头像 名字 时间 赞
        .reply_img{
          display:flex;
          margin-top: rem(20px);
          margin-bottom: rem(20px);
          img{
            width:rem(60px);
            height:rem(60px);
            margin-right: rem(20px);
          }
          .reply_span{
            display: inline-block;
            width:rem(400px);
            height:rem(60px);
            line-height:rem(60px);
            .create_time{
              color:blue;
            }
            .Ups{

              i{
                font-size:rem(40px);
                line-height:rem(70px);
              }
            }
          }
        }
        // 回复正文
        .replies_content{
          width:100%;
          font-size:rem(30px);
          margin-bottom: rem(30px);
          h1{
            font-weight:normal;
            font-size:rem(30px);
          }
          img{
            width:rem(380px);
            height:rem(260px);
            margin-top:rem(20px);
          }
          a{
            word-break: break-word;
            white-space: pre-wrap;
          }
          p{
            word-break: break-word;
            white-space: pre-wrap;
            margin-bottom:rem(20px);
          }
        }
      }
    }
	}
</style>
