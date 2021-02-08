<template>
  <div class="from-wrap clearfix">
    <el-form label-width="110px"
             ref="stepFrom"
             :model="stepOneForm"
             :rules="stepOneFormRules"
             class="form">
      <el-form-item label="系统名称："
                    prop="systemName">
        <el-input v-model="stepOneForm.systemName"
                  maxlength="8"
                  show-word-limit
                  placeholder="请输入系统名称"></el-input>
      </el-form-item>
      <el-form-item label="系统标识："
                    prop="systemIdent">
        <el-input v-model="stepOneForm.systemIdent"
                  maxlength="20"
                  show-word-limit
                  placeholder="请输入系统标识"></el-input>
      </el-form-item>
      <el-form-item label="是否配置菜单：">
        <el-radio-group v-model="stepOneForm.isConfigMenu">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="系统描述：">
        <el-input type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  resize="none"
                  placeholder="请输入系统描述"
                  v-model="stepOneForm.systemDesc"
                  maxlength="50"
                  show-word-limit>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="next"
               v-if="isNext">下一步</el-button>
    <el-button type="primary"
               @click="finish"
               v-else>完成</el-button>
  </div>
</template>
<script>
import { stepOneForm, stepOneFormRules } from './formData'
export default {

  data () {
    return {
      stepOneFormRules: stepOneFormRules,
      stepOneForm: Object.assign({}, stepOneForm)
    }
  },
  watch: {
    'stepOneForm.isConfigMenu' (newVal, oldVal) {
      this.$emit('isConfigMenu', newVal)
    }
  },
  computed: {
    isNext () {
      return !!this.stepOneForm.isConfigMenu
    }
  },
  created () {
    // this.getWareType()
  },
  methods: {

    getWareType () {
      this.$request.mock('mockData/mock.json?t=' + new Date().getTime()).then(res => {

      })
    },
    finish () {
      this.$refs.stepFrom.validate((valid) => {
        if (valid) {
          this.$emit('stepOneFinsh')
        } else {
          return false
        }
      })
    },
    next () {
      this.$refs.stepFrom.validate((valid) => {
        if (valid) {
          this.$emit('stepOne', this.stepOneForm)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepOne.less";
</style>
