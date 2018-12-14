<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航 -->
    <nav class="footer">
      <ul>
        <router-link to="/" tag="li" :class="resPath=='index'?'mo':''">
          <span class="iconfont icon-shouye2"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/evm" tag="li" :class="resPath=='evm'?'mo':''">
          <span class="iconfont icon-zhuce"></span>
          <p>注册</p>
        </router-link>
        <router-link to="/me" tag="li" :class="resPath=='me'?'mo':''">
         <span class="iconfont icon-wodedangxuan"></span>
          <p>登录</p>
        </router-link> 
      </ul>      
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  //计算属性
  computed:{
    resPath:function(){
      var arr = this.$route.path.split('/');
      return arr[1];
    }
  }
}
</script>

<style lang="scss">
  // 引入 公共样式
  @import './assets/sass/base.scss';

  // 底部导航
  nav.footer{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: rem(120px);
    background: #555;
    ul{
      display: flex;
      
      li{
        width: 33.33%;
        height:rem(120px);
        color:#fff;
        font-weight: bold;
        span{
          display: block;
          font-size: rem(70px);
          text-align: center;
        }
        p{
          text-align: center;
          font-size: rem(30px);
          line-height: rem(30px);
        }
        &.mo{
          background: #111;
          color: #00f5ff;

        }
      
      }
    }
  }


</style>
