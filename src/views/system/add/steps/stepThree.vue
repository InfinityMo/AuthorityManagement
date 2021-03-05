<template>
  <div class="step-success">
    <img src="@/assets/img/icons/add-success.png">
    <h3>{{isEditStep ? '编辑':'新增'}}成功</h3>
    <p>可在系统管理中查看已{{isEditStep ? '编辑':'新增'}}的系统 </p>
    <div class="btn-group"
         v-if="!isEditStep">
      <el-button type="primary"
                 @click="continueAdd">继续新增</el-button>
      <el-button @click="toView">查看系统</el-button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    isEditStep: {
      type: Boolean,
      default: false
    }
  },
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
