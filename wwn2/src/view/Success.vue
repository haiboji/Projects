<template>
  <div class="success">
    <div class='header'>
      <p>江苏润和校园信息录入系统</p>
    </div>
    <div class="tips">
      <img src="../assets/images/success.png" />
      <p style="color:#67C23A;">成功!</p>
      <p>信息已提交成功,感谢您的耐心,静候佳音!</p>
      <p>(考试系统账号，密码为身份证后9位)</p>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">
  .success {
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
      height: 100%;
    }
    .tips img {
      width: 65%;
      margin-left: 18%;
    }
    .tips p:nth-child(2) {
      text-align: center;
      color: #67C23A;
      font-size: 25px;
    }
    .tips p:nth-child(3){
      text-align: center;
      color: #9E9E9E;
    }
    .tips p:nth-child(4){
      text-align: center;
      font-weight: bold;
      color: #FF5722;
    }
  }

</style>
