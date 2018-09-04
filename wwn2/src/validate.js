import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

// 配置中文
Validator.addLocale(zh)

const config = {
  locale: 'zh_CN'
}

Vue.use(VeeValidate, config)

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '邮箱格式错误',
      required: () => '必填字段',
      max: () => '200字符以内'
    },
    attributes: {
      // email: '邮箱',
      // password: '密码',
      // name: '姓名',
      // phone: '手机',
      // university: '毕业院校'
    }
  }
}

Validator.updateDictionary(dictionary)

// 名字校验
Validator.extend('name_check', {
  messages: {
    // zh_CN: field => field + '2~4个中文字符'
    zh_CN: () => '20字符以内的中文或英文'
  },
  validate: value => {
    // return /^[\u4E00-\u9FA5]{2,4}$/.test(value)
    return /^[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z]{1,20}$/.test(value)
  }
})
// 学校中文字符校验
Validator.extend('university_check', {
  messages: {
    // zh_CN: field => field + '2~个中文字符'
    zh_CN: () => '4~20个中文字符'
  },
  validate: value => {
    return /^[\u4E00-\u9FA5]{4,20}$/.test(value)
  }
})
// 专业
Validator.extend('majors_check', {
  messages: {
    // zh_CN: field => field + '2~个中文字符'
    zh_CN: () => '20个中文，数字或字母以内'
  },
  validate: value => {
    return /^[\u4E00-\u9FA5a-zA-Z0-9]{1,20}$/.test(value)
  }
})
// 省份证号
Validator.extend('ID_check', {
  messages: {
    // zh_CN: field => field + '2~个中文字符'
    zh_CN: () => '身份证号格式有误'
  },
  validate: value => {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
  }
})
// 手机号校验
Validator.extend('phone', {
  messages: {
    zh_CN: () => '手机格式错误'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
