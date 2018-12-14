<template>
  <div class="loading">
  	<img src="../../static/images/loading.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
  // 引入 公共样式
  @import '../assets/sass/base.scss';
  .loading{
  	img{
  		width: 100%;
  		margin-top: rem(300px);
  	}
  }


</style>
