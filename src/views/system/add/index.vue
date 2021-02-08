<template>
  <div class="page">
    <div class="add-wrap">
      <Step :stepsData="stepsData"
            class="step"
            :active='active' />
      <div :key="randomKey">
        <step-one @stepOne="stepOne"
                  @stepOneFinsh="stepOneFinsh"
                  @isConfigMenu="isConfigMenu"
                  v-show="active===0" />
        <step-two @stepTwo="stepTwo"
                  @stepTwoBack="stepTwoBack"
                  v-show="active===1" />
        <step-three v-show="active===2"
                    @stepThreeContinue="stepThreeContinue" />
      </div>
    </div>
  </div>
</template>
<script>
import Step from '@/components/steps'
import StepOne from './steps/stepOne'
import StepTwo from './steps/stepTwo'
import StepThree from './steps/stepThree'
import { createUUID } from '@/common/utils/funcStore'
export default {
  components: {
    Step,
    StepOne,
    StepTwo,
    StepThree
  },
  data () {
    return {
      stepsData: ['基本信息', '菜单设置', '完成'],
      active: 0,
      randomKey: createUUID()
    }
  },
  computed: {

  },
  created () {
    // this.getSelects()
  },

  methods: {
    stepOne (data) {
      this.active++
      // backTop()
    },
    isConfigMenu (configFlag) {
      if (configFlag) {
        this.stepsData = ['基本信息', '菜单设置', '完成']
      } else {
        this.stepsData.splice(1, 1)
      }
    },
    stepOneFinsh () {
      this.active = 2
    },
    stepTwo (data) {
      this.active++
      // backTop()
    },
    stepTwoBack () {
      this.active--
      // backTop()
    },
    stepThreeContinue () {
      this.active = 0
      this.randomKey = createUUID()
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/common/styles/page-table";
@import "./add";
</style>
