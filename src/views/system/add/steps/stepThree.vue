<template>
  <div class="step-success">
    <img src="@/assets/img/icons/add-success.png">
    <h3>新增成功</h3>
    <p>可在系统管理中查看已新增的系统 </p>
    <div class="btn-group">
      <el-button type="primary"
                 @click="continueAdd">继续新增</el-button>
      <el-button @click="toView">查看系统</el-button>
    </div>
  </div>
</template>
<script>

export default {

  data () {
    return {}
  },
  created () {

  },
  methods: {
    continueAdd () {
      this.$emit('stepThreeContinue')
    },
    toView () {
      this.$router.push('/system/manage')
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepThree.less";
</style>
