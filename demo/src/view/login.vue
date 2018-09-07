<template>
  <div class="login">
    <mu-row justify-content="center" class="touxiang">
      <mu-avatar :size="size">
        <img src="@/assets/images/touxiang3.jpg">
      </mu-avatar>
    </mu-row>
    <div justify-content="center" class="account">
      <input type="text" name="account" placeholder="用户名" />
    </div>
    <div justify-content="center" class="pwd">
      <input type="password" name="pwd" placeholder="密码" />
    </div>
    <div class="btn" @click="login">登录</div>
    <div class="bottom">
      <div class='forgetPwd'>忘记密码?</div>
      <div class="register">立即注册</div>
    </div>
  </div>
</template>

<script>
// import { Radio } from 'mint-ui'
export default {
  name: 'register',
  data () {
    return {
      size: 120
    }
  },
  mounted () {
    console.log('1111')
  },
  methods: {
    login () {
      this.$router.push({
        name: 'home',
        path: '/home'
      })
    }
  }
  // components: {
  //   Radio
  // }
}

</script>

<style lang="scss">
  .login {
    height: 100%;
    background: url("../assets/images/login2.jpg") no-repeat;
    padding-top: 30%;
    padding-right: 12%;
    padding-left: 12%;

    input {
      background-color: transparent;
      text-indent: 5px;
      height: 40px;
      width: 100%;
      color: #00ffc6;
      border: none;
      outline: none;
      border-bottom: 1px solid #03A9F4;
    }

    .account {
      margin-top: 20%;
    }

    .pwd {
      margin-top: 10%;
    }

    .btn {
      line-height: 50px;
      text-align: center;
      background-color: red;
      height: 50px;
      width: 100%;
      border-radius: 17px;
      margin-top: 25%;
      color: white;
      background-color: #34ebcf;
      letter-spacing: 5px
    }
    .title{
      color:#00ffc6;
    }
    .bottom {
      height: 50px;
      width: 100%;
      color: white;
      margin-top: 20%;
      div {
        text-decoration: underline;
      }
      div:nth-child(1) {
        float: left;
      }
      div:nth-child(2) {
        float: right;
      }
    }
  }

</style>
