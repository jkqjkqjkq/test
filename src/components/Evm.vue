<template>
  <div class="evm">
    <div class="header">
      <img src="../../static/images/2018-11-30_203958.png" alt="">
    </div>
    <div class="auth">
      <div class="auth1">
        <div class="auth2">
           <img src="https://avatars0.githubusercontent.com/oa/72806?s=120&u=edd4b1f1b0a583daeeaf69ccf62e621b1b36e680&v=4" alt="">
        </div>
        <div class="auth3">
          <div class="auth4">
                <p>Sign in to GitHub </p>
                <p>to continue to cnode</p>
          </div>
        </div>

        <div class="auth5">
          <div class="auth6">
               <p>Username or email address</p>
               <input type="text">
          </div>
        </div>
        <div class="auth7">
          <div class="auth8">
               <span>Password</span>
               <span>Forgot password?</span>
               <input type="password">
               <button>Sgin in</button>
          </div>
        </div>
           <div class="autn9">
              <div class="autn10">
                New to GitHub? Create an account.
                
              </div>
           </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入公共的样式
   @import '../assets/sass/base.scss';
   .evm{
    background: #f9f9f9;
   }
   .header{
      width: 100%;
      display: flex;
      justify-content: center;
      margin:rem(60px) 0;
   }
   .auth{
    width: 100%;
    display: flex;
    justify-content: center;
   }
   .auth1{
    width: 90%;
    height: rem(750px);
    border: rem(2px) solid #ccc;
    border-radius: rem(10px);
    background: #fff;

  
  
   }
   .auth2{
       display: flex;
    justify-content: center;
    width: 100%;
     img{
      width:rem(125px);
      height: rem(125px);
      margin:rem(25px) 0;
    }
   }
   .auth3{
    width: 100%;
    display: flex;
    justify-content: center;
    .auth4{
      width: 90%;
      padding-bottom: rem(50px);
      border-bottom:rem(2px) solid #ccc;
      p{
        text-align: center;
        font-size: rem(35px);
      }
    }
   }

  .auth5{
    margin-top: rem(40px);
    width: 100%;
    display: flex;
    justify-content: center;
    .auth6{
      width: 90%;
      input{
        width: 100%;
        height: rem(60px);
         margin-top: rem(10px);
          margin-bottom: rem(20px);
          border-radius:rem(15px);
      }
    }
   }

     .auth7{
    width: 100%;
    display: flex;
    justify-content: center;
    .auth8{
      width: 90%;
      input{
        width: 100%;
        height: rem(60px);
         margin-top: rem(10px);
          margin-bottom: rem(20px);
          border-radius:rem(15px);
      }
      span:nth-child(2){
        float: right;
        color:#0366D6;
      }
      button{
        width: 100%;
        background: #2FBF50;
        height:rem(90px);
        border-radius: rem(15px);
      }
    }
   }
   .autn9{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: rem(50px);
     .autn10{
       width: 100%;
       height: rem(90px);
        border: rem(2px) solid #ccc;
        border-radius: rem(10px);
        background: #fff;
        display: flex;
      justify-content: center;
      align-items: center;
     }
   }
    
  
</style>
