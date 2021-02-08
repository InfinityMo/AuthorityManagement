<template>
  <el-dialog :title="modalTitle"
             :top="offestTop"
             :destroy-on-close="true"
             :visible.sync="modalShow"
             width="800px"
             :before-close="modalCancel">
    <div class="content-wrap">
      <ul>
        <li class="flex-item-center"><label>系统名称：</label><span>{{systemInfo.sysName}}</span></li>
        <li class="flex-item-center"><label>系统描述：</label><span>{{systemInfo.sysDesc}}</span></li>
        <li class="flex-item-center"><label>系统标识：</label><span>{{systemInfo.sysIdentify}}</span></li>
        <li class="flex-item-center"><label>系统角色：</label>
          <ol class="flex-item-center">
            <li v-for="(item,index) in systemInfo.sysRole"
                :key="index">
              <span>{{item}}</span>
              <i v-show="index!==systemInfo.sysRole.length-1">、</i>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- <div slot="footer"
         class="dialog-footer">
      <el-button @click="modalCancel">取 消</el-button>
      <el-button type="primary"
                 @click="modalConfirm">确 定</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
import tableMixin from '@/mixins/dealTable'

export default {
  mixins: [tableMixin],
  props: {
    modalTitle: {
      type: String,
      required: true
    },
    offestTop: {
      type: String,
      default: '50px'
    },
    modalShow: {
      type: Boolean,
      required: true,
      default: false
    },
    viewId: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      systemInfo: {
        sysName: '联恩小店后台系统',
        sysDesc: '该系统用来管理联恩小店小程序的所有信息，包括商品信息，用户信息，签到信息，积分系统，登陆系统等其他系统',
        sysIdentify: '7en423frjuirw2r4232nrewrw',
        sysRole: ['上传专员', '数据编辑专员', '表格下载专员', '数据查询对比专员']
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    modalCancel () {
      this.$emit('viewModalCancel')
    }
  }
}
</script>

<style lang="less" scoped>
@import "./systemInfo";
</style>
