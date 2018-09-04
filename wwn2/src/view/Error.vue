<template>
  <div class="error">
    <div class='header'>
      <p>江苏润和校园信息录入系统</p>
    </div>
    <div class="tips">
      <img src="../assets/images/error.png" />
      <p>啊哦!</p>
     <p>{{message}}</p>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted: function () {
    this.message = this.$route.params.msg
  }
}
</script>

<style lang="scss">
  .error {

    .header {
      width: 100%;
      height: 80px;
      background-color: #545fa5;
      background-image: url('../assets/images/head.png');
      background-repeat: no-repeat;
      background-size: 88px 60px;
      background-position: 40px 12px;
      text-align: center;

    }
    .header p {
      margin-top: 0px;
      color: white;
      line-height: 80px;
      font-size: 20px;
    }
    .tips {
      padding: 100px 27px 27px;
    }
    .tips img {
      width: 65%;
      margin-left: 18%;
    }
    .tips p:nth-child(2) {
      text-align: center;
      color: #eb7c7c;
      font-size: 25px;
    }
    .tips p:nth-child(3) {
      text-align: center;
      color: #9E9E9E;
    }
  }

</style>
