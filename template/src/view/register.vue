<template>
  <div @click="aaa" class="regist">
    <mt-radio
  title="单选框列表"
  :value.sync="value"
  :options="['选项A', '选项B', '选项C']">
</mt-radio>

  </div>
</template>

<script>
// import { Radio } from 'mint-ui'
export default {
  name: 'register',
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    console.log('1111')
  },
  methods: {
    aaa () {

    }
  }
  // components: {
  //   Radio
  // }
}
</script>

<style lang="scss">
.regist {
  height: 500px;
  background-image: url('../assets/images/a.jpg');
}

</style>
