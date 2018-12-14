<template>
  <div class="index">
    <nav class="top">
      <ul>
        <router-link to="/index/" tag="li" class="mo">全部</router-link>
        <router-link to="/index/good" tag="li">精华</router-link>
        <router-link to="/index/share" tag="li">分享</router-link>
        <router-link to="/index/ask" tag="li">问答</router-link>
        <router-link to="/index/job" tag="li">招聘</router-link>
        <router-link to="/index/dev" tag="li">客户端</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入 公共样式
  @import '../assets/sass/base.scss';
 // 顶部导航
  nav.top{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: rem(90px);
    background: #555;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: rem(90px);
      li{
        font-size: rem(40px);
        font-family: '楷体';
        padding: rem(8px) rem(18px);
        border-radius: rem(10px);
        font-weight: bold;
        color:#fff;
        &.router-link-exact-active{
           background: #111;
          color: #00f5ff;        
        }
      }
    }
  }

</style>
