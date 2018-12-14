<template>
  <div class="me">
   
      <div class="me1">
      <img src="../../static/images/2018-11-30_215426.png" alt="">
        <div class="me2">
          <div class="me3">
            <span>主页</span>
            <span> / 登录</span>   
          </div>
          <div class="me4">
             <p>用户名</p>
             <input type="text">

              <p>密码</p>
             <input type="password">
            
           <div class="me5">
            <button>登录</button>
            <button>通过GitHub登录</button>
            <span>忘了密码了？</span>
             
           </div>
          </div>

          
        </div>
        
      </div>
  </div>
</template>

<script>

export default {
  name: 'Me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入 公共样式
  @import '../assets/sass/base.scss';
  .me{
    width: 100%;
    height: rem(1500px);
    background: #E1E1E1;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      height: 2.46667rem;
    }
  }
  .me1{
    width: 98%;
    .me2{
      margin-top: rem(40px);
      width: 100%;
      height: rem(700px);
      background:#fff;
      .me3{
        width: 100%;
        height: rem(70px);
        background: #f4f4f4;
        display: flex;
        align-items: center;
        span:nth-child(1){
          margin-left:rem(10px);
          color: #33ff33;
        }
        span{
          font-size:rem(30px);
        }
      }
    }
  }
  .me4{
    width: 100%;
    margin-top:rem(55px);
    p{
      font-size: rem(28px);
      margin-left: rem(20px);
       margin-top: rem(35px);
    }
    input{
      width: 75%;
      height: rem(50px);
      border-radius: rem(10px);
      margin-top: rem(25px);
       margin-left: rem(20px);
    }
  }
  .me5{
    margin-top:rem(70px);
    width: 100%;
    button:nth-child(1){
      width: rem(110px);
      height: rem(70px);
      margin-left: rem(30px);
      background: #0088CC;
      border-radius: rem(10px);
      color: #fff;
    }
     button:nth-child(2){
     width: rem(310px);
      height: rem(70px);
      margin-left: rem(18px);
      background: #5BC0DE;
      color: #fff;
      border-radius: rem(18px);
    }
    span{
      margin-left: rem(15px);
    }
  }


</style>
