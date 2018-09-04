<template>
  <div class='register'>
    <div class='header'>
      <p>江苏润和校园信息录入系统</p>
    </div>

    <div class="pannel">
      <div class="title">
        <img src='../assets/images/geren.png'>
        <p>基本信息(*必填)</p>
      </div>
      <div class="content">
        <div class="row-item">
          <span class="title_name">*姓名
            <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
          </span>
          <mt-field label="" placeholder="请输入姓名" v-model.trim='name' name='name' v-validate="'required|name_check'"></mt-field>

        </div>
        <div class="row-item">
          <span class="title_name">*性别
            <span v-show="errors.has('gender')" class="text-style" v-cloak> {{ errors.first('gender') }} </span>
          </span>
          <mt-radio v-model.trim="gender" :options="['男', '女']" name='gender' class="genderRadio" v-validate="'required'">
          </mt-radio>
        </div>
        <div class="row-item">
          <span class="title_name">*出生年月
            <span v-show="errors.has('birth')" class="text-style" v-cloak> {{ errors.first('birth') }} </span>
          </span>
          <mt-field label="" placeholder="请输入出生年月" name="birth" v-model.trim='birth' @click.native="open('picker2')" readonly v-validate="'required'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*毕业院校
            <span v-show="errors.has('university')" class="text-style" v-cloak> {{ errors.first('university') }} </span>
          </span>
          <mt-field label="" placeholder="请输入毕业院校" v-model.trim='university' name="university" v-validate="'required|university_check'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*专业
            <span v-show="errors.has('majors')" class="text-style" v-cloak> {{ errors.first('majors') }} </span>
          </span>
          <mt-field label="" placeholder="请输入专业" v-model.trim='majors' name="majors" v-validate="'required|majors_check'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*籍贯
            <span v-show="errors.has('native')" class="text-style" v-cloak> {{ errors.first('native') }} </span>
          </span>
          <mt-field label="" placeholder="请输入籍贯" name="native" v-model.trim='native' @click.native="openNativePop" readonly v-validate="'required'"></mt-field>
        </div>
        <div class="row-item radio">
          <span class="title_name">*婚姻状况
            <span v-show="errors.has('marital_status')" class="text-style" v-cloak> {{ errors.first('marital_status') }} </span>
          </span>
          <mt-radio v-model.trim="marital_status" :options="['未婚', '已婚']" class="maritalRadio" name="marital_status" v-validate="'required'">
          </mt-radio>
        </div>
        <div class="row-item radio">
          <span class="title_name">*学历
            <span v-show="errors.has('education')" class="text-style" v-cloak> {{ errors.first('education') }} </span>
          </span>
          <mt-radio v-model.trim="education" :options="['一本', '二本','专科']" name="education" v-validate="'required'" class="educationRadio">
          </mt-radio>
        </div>
        <div class="row-item">
          <span class="title_name">*毕业日期
            <span v-show="errors.has('graduation_date')" class="text-style" v-cloak> {{ errors.first('graduation_date') }} </span>
          </span>
          <mt-field label="" placeholder="请输入毕业日期" v-model.trim='graduation_date' name="graduation_date" @click.native="open('picker1')"
            readonly v-validate="'required'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*身份证号
            <span v-show="errors.has('card_id')" class="text-style" v-cloak> {{ errors.first('card_id') }} </span>
          </span>
          <mt-field label="" placeholder="请输入身份证号" v-model.trim='card_id' name="card_id" v-validate="'required|ID_check'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*联系电话
            <span v-show="errors.has('contact_number')" class="text-style" v-cloak> {{ errors.first('contact_number') }} </span>
          </span>
          <mt-field label="" placeholder="请输入联系电话" v-model.trim='contact_number' name="contact_number" v-validate="'required|phone'"></mt-field>
        </div>
        <div class="row-item">
          <span class="title_name">*电子邮箱
            <span v-show="errors.has('email_address')" class="text-style" v-cloak> {{ errors.first('email_address') }} </span>
          </span>
          <mt-field label="" placeholder="请输入电子邮箱" v-model.trim='email_address' name="email_address" v-validate="'required|email'"></mt-field>
        </div>
      </div>
    </div>

    <div class="pannel">
      <div class="title">
        <img src='../assets/images/nengli.png'>
        <p>个人能力</p>
      </div>
      <div class='content'>
        <div class="row-item radio">
          <span class="title_name">*请选择笔试题类型：
            <span v-show="errors.has('skill')" class="text-style" v-cloak> {{ errors.first('skill') }} </span>
          </span>
          <mt-radio v-model.trim="skill" :options="['Java', 'C']" name="skill" v-validate="'required'" class="skillRadio">
          </mt-radio>
        </div>
        <div class="row-item radio">
          <span class="title_name">英语水平</span>
          <mt-radio v-model.trim="english_level" :options="['CET-6', 'CET-4','其他']" class="englishRadio">
          </mt-radio>
        </div>
        <div class="row-item radio">
          <span class="title_name">计算机水平</span>
          <mt-radio v-model.trim="computer_level" :options="['优', '良','中等','差']" class="computerRadio">
          </mt-radio>
        </div>
      </div>
    </div>
    <div class="pannel">
      <div class="title">
        <img src='../assets/images/shijian.png'>
        <p>社会实践学习</p>
      </div>
      <div class='content'>
        <mt-field placeholder="200字符以内" type="textarea" rows="8" v-model.trim="experience" name="experience" v-validate="'max:200'"></mt-field>
      </div>
    </div>
    <span v-show="errors.has('experience')" class="text-style" v-cloak> {{ errors.first('experience') }} </span>
    <div class="pannel">
      <div class="title">
        <img src='../assets/images/pingjia.png'>
        <p>自我评价</p>
      </div>
      <div class='content'>
        <mt-field placeholder="200字符以内" type="textarea" rows="8" v-model.trim="self_evaluation" name="self_evaluation" v-validate="'max:200'"></mt-field>
      </div>
    </div>
    <span v-show="errors.has('self_evaluation')" class="text-style" v-cloak> {{ errors.first('self_evaluation') }} </span>
    <div class="submit">
      <mt-button type="primary" size="large" @click="toOverview">预览</mt-button>
    </div>

    <mt-datetime-picker ref="picker2" type="date" @confirm="birthChange" @cancel="cancel('picker2')" :startDate="startDate" :endDate="endDate"
      :closeOnClickModal="false">
    </mt-datetime-picker>
    <mt-datetime-picker ref="picker1" type="date" @confirm="graduationChange" @cancel="cancel('picker1')" :startDate="graduationStartDate"
      :endDate="endDate" :closeOnClickModal="false">
    </mt-datetime-picker>

    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4" :closeOnClickModal="false">
      <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5" :show-toolbar="true">
        <span class='navtive_btn' @click="closeNative">取消</span>
        <span class="navtive_btn" @click="confirmNative">确认</span>
      </mt-picker>
    </mt-popup>
  </div>

</template>
<script>
// import $ from 'jquery'
// import axios from 'axios'
import {
  Toast
} from 'mint-ui'
const address = {
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山',
    '潮州', '揭阳', '云浮'
  ],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],

  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江',
    '神农架林区'
  ],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中',
    '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'
  ],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州',
    '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'
  ],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县',
    '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'
  ],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州',
    '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'
  ],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县',
    '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市'
  ]
}
export default {
  data () {
    return {
      /* ---------监听函数，处理滚动穿透用的-------------- */
      handler: function (e) {
        e.preventDefault()
      },
      startDate: new Date('1990/1/1'),
      endDate: new Date('2050/12/31'),
      graduationStartDate: new Date('2010/1/1'),
      reqParam: {},
      name: '',
      gender: '',
      birth: '',
      marital_status: '',
      native: '',
      native_province: '',
      native_city: '',
      university: '',
      majors: '',
      education: '',
      graduation_date: '',
      card_id: '',
      contact_number: '',
      email_address: '',
      skill: '',
      english_level: '',
      computer_level: '',
      experience: '',
      self_evaluation: '',
      popupVisible4: false,
      buttonBottom: 0,
      addressSlots: [{
        flex: 1,
        values: Object.keys(address),
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: address['江苏'],
        className: 'slot3',
        textAlign: 'center'
      }]
    }
  },
  // beforeMount: function () {
  //   // 进去注册页面之前需要校验注册页面是否能访问.这里需要同步做请求，所以引用jqueyr
  //   let _this = this
  //   $.ajax({
  //     type: 'post',
  //     url: 'api/HRManagement/getStatus',
  //     data: '',
  //     async: false,
  //     success: function (res) {
  //       if (res.code === '200') {
  //         _this.$router.push({
  //           name: 'register',
  //           path: '/'
  //         })
  //       } else {
  //         _this.$router.push({
  //           name: 'error',
  //           path: '/error',
  //           params: {
  //             msg: res.message
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  mounted: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    // this.req = this.$route.params.Data
    this.req = JSON.parse(localStorage.getItem('reqParam'))
    if (this.req) {
      this.name = this.req.name || ''
      this.gender = this.req.gender || ''
      this.birth = this.req.birth || ''
      this.marital_status = this.req.marital_status || ''
      this.native = this.req.native || ''
      this.native_province = this.req.native_province || ''
      this.native_city = this.req.native_city || ''
      this.university = this.req.university || ''
      this.majors = this.req.majors || ''
      this.education = this.req.education || ''
      this.graduation_date = this.req.graduation_date || ''
      this.card_id = this.req.card_id || ''
      this.contact_number = this.req.contact_number || ''
      this.email_address = this.req.email_address || ''
      this.skill = this.req.skill || ''
      this.english_level = this.req.english_level || ''
      this.computer_level = this.req.computer_level || ''
      this.experience = this.req.experience || ''
      this.self_evaluation = this.req.self_evaluation || ''
    }
  },
  methods: {
    toOverview () {
      let _this = this
      let reqParams = {
        name: this.name,
        gender: this.gender,
        birth: this.birth,
        marital_status: this.marital_status,
        native: this.native,
        native_province: this.native_province,
        native_city: this.native_city,
        university: this.university,
        majors: this.majors,
        education: this.education,
        graduation_date: this.graduation_date,
        card_id: this.card_id,
        contact_number: this.contact_number,
        email_address: this.email_address,
        skill: this.skill,
        english_level: this.english_level,
        computer_level: this.computer_level,
        experience: this.experience,
        self_evaluation: this.self_evaluation
      }

      localStorage.setItem('reqParam', JSON.stringify(reqParams))
      // 表单校验都通过后，页面才能跳转
      this.$validator.validateAll().then((result) => {
        if (result) {
          _this.$router.push({
            name: 'overview',
            path: '/overview',
            params: {
              Data: reqParams
            }
          })
        } else {
          Toast({
            message: '请完善信息内容！',
            position: 'center',
            duration: 3000
          })
        }
      })
    },
    // 点击输入框日期时间，触发打开弹出时间框
    open (picker) {
      // 根据picker类型，选择打开对应的弹出层
      this.$refs[picker].open()
      // 解决滚动穿透问题
      this.closeTouch()
    },
    // 出生日期弹出框关闭时，打开滚动
    cancel (picker) {
      this.$refs[picker].close()
      // 清空出生日期或者毕业日期的时间
      // if (picker === 'picker1') {
      //   this.graduation_date = ''
      // } else if (picker === 'picker2') {
      //   this.birth = ''
      // }
      // 打开滚动，很重要
      this.openTouch()
    },
    // 出生弹出框打开后，选择日期收，点击确认按钮触发该方法
    birthChange (value) {
      // value 就是默认获取到的时间，但是需要转换一下
      var d = new Date(value)
      var birthdate = (d.getFullYear()) + '/' +
          (d.getMonth() + 1) + '/' +
          (d.getDate())
      this.birth = this.formatDate(birthdate)
      // 打开滚动，很重要，不打开关闭后原来的页面就无法滚动
      this.openTouch()
    },
    // 毕业时间弹出框打开后，选择日期收，点击确认按钮触发该方法
    graduationChange (value) {
      var d = new Date(value)
      var birthdate = (d.getFullYear()) + '/' +
          (d.getMonth() + 1) + '/' +
          (d.getDate())
      this.graduation_date = this.formatDate(birthdate)
      // 打开滚动，很重要，不打开关闭后原来的页面就无法滚动
      this.openTouch()
    },
    // 日期格式转换：2015/8/6   ==>  2015-08-06
    formatDate (selectedDate) {
      if (typeof selectedDate === 'string') {
        if (selectedDate.indexOf('/') > -1) {
          var arrs = selectedDate.split('/')
          if (arrs.length === 3) {
            if (parseFloat(arrs[1]) < 10) {
              arrs[1] = '0' + arrs[1]
            }
            if (parseFloat(arrs[2]) < 10) {
              arrs[2] = '0' + arrs[2]
            }
            return arrs[0] + '-' + arrs[1] + '-' + arrs[2]
          }
        }
      }
    },
    // 点击籍贯input框时触发该方法，把popupVisible4设置为true就打开，false关闭
    openNativePop () {
      this.popupVisible4 = true
      this.closeTouch()
    },
    // 籍贯弹出框滚动选择地址时触发的方法,当页面初始化刚进来时也调用了此方法
    onAddressChange (picker, values) {
      // 刷新城市
      picker.setSlotValues(1, address[values[0]])
      this.native_province = values[0]
      this.native_city = values[1]
    },
    // 籍贯弹出框确认触发的事件，其实与关闭是同样逻辑
    confirmNative: function () {
      this.native = (this.native_province === this.native_city) ? this.native_province : this.native_province.concat(
        '/').concat(this.native_city)
      this.popupVisible4 = false
      this.openTouch()
    },
    // 籍贯关闭框确认触发的事件
    closeNative: function () {
      this.popupVisible4 = false
      this.openTouch()
    },
    // 阻止默认事件
    closeTouch: function () {
      document.getElementsByTagName('body')[0].addEventListener('touchmove',
        this.handler, {
          passive: false
        }) // 阻止默认事件
    },
    // 打开默认事件
    openTouch: function () {
      document.getElementsByTagName('body')[0].removeEventListener('touchmove',
        this.handler, {
          passive: false
        }) // 打开默认事件
    }
  }
}

</script>
<style lang="scss">
  .register {
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

    .pannel {
      margin: auto;
      width: 95%;
      border: 1px solid #9e9e9e;
      background-color: white;
      border-radius: 11px;
      margin-top: 70px;
      padding-bottom: 25px;
    }

    .pannel .title {
      position: relative;
    }

    .pannel .title img {
      top: -75px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      width: 60px;
      height: 60px;
    }

    .pannel .title p {
      margin-top: 45px;
      border-bottom: 1px solid #9e9e9e;
      margin-bottom: 7px;
      padding-bottom: 17px;
      text-align: center;
    }

    .row-item {
      box-sizing: border-box;
      padding: 4px 0px;
    }

    .row-item .mint-field {
      border-radius: 9px;
      border: 1px solid #03A9F4;
      width: 90%;
      margin: auto;
      min-height: 40px;
    }

    .row-item .title_name {
      line-height: 30px;
      height: 30px;
      display: block;
      text-align: left;
      padding-left: 6%;
    }
    .row-item .title_name span,
    .text-style {
      color: #ff5722;
      margin-left: 3%;
    }
    .row-item .genderRadio .mint-cell:nth-child(2),
    .row-item .skillRadio .mint-cell:nth-child(2),
    .row-item .maritalRadio .mint-cell:nth-child(2),
    .row-item .educationRadio .mint-cell:nth-child(2),
    .row-item .englishRadio .mint-cell:nth-child(2),
    .row-item .computerRadio .mint-cell:nth-child(2),
    .row-item .computerRadio .mint-cell:nth-child(4) {
      width: 50%;
      float: left;
      border: none;
    }

    .mint-radiolist .mint-cell {
      background-image: none
    }
    .mint-radiolist .mint-cell .mint-cell-wrapper {
      background-image: none
    }
    .submit {
      width: 90%;
      margin: auto;
      padding: 50px 0px;
    }
    .mint-popup-4 {
      width: 100%;
      .picker-slot-wrapper,
      .picker-item {
        backface-visibility: hidden;
      }
    }
    .navtive_btn {
      display: inline-block;
      line-height: 40px;
      text-align: center;
      color: #26a2ff;
      width: 50%;
      height: 40px;
      float: left;
      border-bottom: 1px solid #ccc4c4;
    }
  }

</style>
