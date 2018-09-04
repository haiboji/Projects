<template>
  <div class='overview'>
    <div class='header'>
      <p>江苏润和校园信息录入系统</p>
    </div>
    <div class="checkTip">
      <p>请再次检查信息是否正确，并确认后提交</p>
    </div>
    <div class="pannel">
      <div class="title">
        <p>基本信息(*必填)</p>
      </div>
      <div class="content">
        <div class="row">
          <span class="left">*姓名</span>
          <span class="right">{{reqParam.name}}</span>
        </div>

        <div class="row">
          <span class="left">*性别</span>
          <span class="right">{{reqParam.gender}}</span>
        </div>
        <div class="row">
          <span class="left">*出生年月</span>
          <span class="right">{{reqParam.birth}}</span>
        </div>

        <div class="row">
          <span class="left">*毕业院校</span>
          <span class="right">{{reqParam.university}}</span>
        </div>
        <div class="row">
          <span class="left">*专业</span>
          <span class="right">{{reqParam.majors}}</span>
        </div>
        <div class="row">
          <span class="left">*籍贯</span>
          <span class="right">{{reqParam.native}}</span>
        </div>
        <div class="row">
          <span class="left">*婚姻状况</span>
          <span class="right">{{reqParam.marital_status}}</span>
        </div>
        <div class="row">
          <span class="left">*学历</span>
          <span class="right">{{reqParam.education}}</span>
        </div>
        <div class="row">
          <span class="left">*毕业日期</span>
          <span class="right">{{reqParam.graduation_date}}</span>
        </div>
        <div class="row">
          <span class="left">*身份证号</span>
          <span class="right">{{reqParam.card_id}}</span>
        </div>
        <div class="row">
          <span class="left">*联系电话</span>
          <span class="right">{{reqParam.contact_number}}</span>
        </div>
        <div class="row">
          <span class="left">*电子邮箱</span>
          <span class="right">{{reqParam.email_address}}</span>
        </div>
      </div>
    </div>

    <div class="pannel">
      <div class="title">
        <p>个人能力</p>
      </div>
      <div class='content'>
        <div class="row">
          <span class="left">*笔试题类型</span>
          <span class="right">{{reqParam.skill}}</span>
        </div>
        <div class="row">
          <span class="left">英语水平</span>
          <span class="right">{{reqParam.english_level}}</span>
        </div>
        <div class="row">
          <span class="left">计算机水平</span>
          <span class="right">{{reqParam.computer_level}}</span>
        </div>
      </div>
    </div>
    <div class="pannel">
      <div class="title">
        <p>社会实践学习</p>
      </div>
      <div class='content'>
        <p class="textContent">
          {{reqParam.experience}}
        </p>
      </div>
    </div>
    <div class="pannel">
      <div class="title">
        <p>自我评价</p>
      </div>
      <div class='content'>
        <p class="textContent">
          {{reqParam.self_evaluation}}
        </p>
      </div>
    </div>
    <div class="btn_box">
      <mt-button type="primary" size="large" @click="post">确认并提交</mt-button>
      <mt-button type="primary" size="large" @click="back" class="back">有点问题，再修改</mt-button>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      reqParam: ''
    }
  },
  mounted: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    this.reqParam = this.$route.params.Data
    if (!this.reqParam) {
      this.reqParam = JSON.parse(localStorage.getItem('reqParam'))
    }
    // 过滤表情符号字符
    this.reqParam.experience = this.reqParam.experience.replace(
      /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g,
      '')
    this.reqParam.self_evaluation = this.reqParam.self_evaluation.replace(
      /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g,
      '')
  },
  methods: {
    post () {
      let _this = this
      // 发送 POST 请求
      axios({
        method: 'post',
        url: 'api/HRManagement/insertStudent',
        data: this.reqParam
      }).then((res) => {
        if (res.data.code === '200') {
          // localStorage.removeItem('reqParam')
          _this.$router.push({
            name: 'success',
            path: '/success'
          })
        } else {
          _this.$router.push({
            name: 'error',
            path: '/error',
            params: {
              msg: res.data.message
            }
          })
        }
      })
    },
    back () {
      let _this = this
      _this.$router.push({
        name: 'register',
        path: '/',
        params: {
          Data: this.reqParam
        }
      })
    }
  }
}

</script>
<style lang="scss">
  .overview {
    background-color: rgba(0, 0, 0, 0.1);
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

    .checkTip {
      padding: 10px;
      width: 95%;
      text-align: center;
      background-color: #7ea5d8;
      margin: auto;
      margin-top: 15px;
      border-radius: 5px;
    }
    .pannel {
      margin: auto;
      width: 95%;
      border: 1px solid #9e9e9e;
      background-color: white;
      border-radius: 11px;
      margin-top: 15px;
      padding-bottom: 25px;
    }

    .pannel .title p {
      margin-top: 15px;
      border-bottom: 1px solid #9e9e9e;
      margin-bottom: 7px;
      padding-bottom: 17px;
      text-align: center;
    }
    .row {
      height: 40px;
      line-height: 40px;
    }

    .row .left {
      padding-left: 20px;
      font-size: 13px;
      display: inline-block;
      width: 40%;
      height: 40px;
      line-height: 40px;
      color: darkgrey;
    }

    .row .right {
      font-size: 13px;
      display: inline-block;
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-weight: bold;
    }

    .textContent {
      padding: 10px;
      font-weight: bold;
      font-size: 13px;
      height: arto;
    }
    .btn_box {
      width: 90%;
      margin: auto;
      padding: 50px 0px;
    }
    .btn_box .back {
      margin-top: 30px;
      background-color: #9e9e9e
    }
  }

</style>
