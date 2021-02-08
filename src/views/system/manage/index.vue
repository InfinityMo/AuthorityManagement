<template>
  <div class="page">
    <div class="search-wrap">
      <el-form class="search-form-inline"
               ref="searchForm"
               label-width="70px">
        <el-col :span="8">
          <el-form-item label="系统名称：">
            <el-input v-model="queryFrom.shopName"
                      placeholder="请输入系统名称"
                      autocomplete="off">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"
                class="search-btn">
          <el-form-item>
            <el-button type="primary"
                       @click="queryHandel">查询</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="table-wrap">
      <div class="flex-between-center table-info">
        <h4>系统列表</h4>
        <el-button type="primary"
                   @click="addHandle">
          <icon type="icon-add-white-14"
                :padding="[0,5,0,0]" />新增系统
        </el-button>
      </div>
      <standard-table :dataSource="tableData"
                      :columns="columns"
                      :pagination="PAGING"
                      @tableChange="tableChange" />
    </div>
    <DialogView :modalTitle="'系统信息'"
                :viewId="viewId"
                :modalShow="viewShow"
                @viewModalCancel="viewModalCancel" />
  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { columnsData } from './columnsData.js'
import DialogView from './dialogView'
import { tableSearchForm } from './searchForm'

export default {
  mixins: [tableMixin],
  components: { DialogView },
  data () {
    return {
      searchForm: JSON.parse(JSON.stringify(tableSearchForm)),
      queryFrom: { RowGuid: '' },
      columns: columnsData(this.$createElement, this),
      tableData: [
        {
          id: '8n2h95n324',
          systemName: '权限管理系统',
          systemIdent: '8baef6123fda7egh4',
          systemDesc: 'thelian的权限管理系统',
          updateTime: '2020-01-30 18:08:09'
        }
      ],
      modalShow: false,
      viewShow: false,
      viewId: '',
      addEditId: '' // 编辑时存在id，新增时id为空
    }
  },
  watch: {
    'searchForm.RowGuid' (newVal, oldVal) {
      if (newVal.length && newVal.length > 0) {
        this.tipContent = this.selectOption.filter(item => item.value === this.searchForm.RowGuid[0])[0].label
      } else {
        this.tipContent = ''
      }
    }
  },
  created () {
    // this.getSelects()
  },
  mounted () {
    this.getTableData() // 获取列表数据
  },
  methods: {
    getTableData () {
      this.$request.post('./a')
    },
    getSelects () {
      this._getSelectData(1).then(res => {
        this.selectOption = res
      }) // 获取下拉框数据
    },

    // 新增
    addHandle () {
      this._getSelectData(6).then(res => {
        res.map(item => {
          this.brandArr.push({
            label: item.label,
            key: item.value
          })
        })
        this.addEditId = ''
        this.modalTitle = '新增店铺'
        this.modalShow = true
      })
    },
    toView (scoped) {
      const { row } = scoped
      this.viewShow = true
      this.viewId = row.id
    },
    viewModalCancel () {
      this.viewShow = false
    },
    editMoadl (scoped) {
      this._getSelectData(6).then(res => {
        res.map(item => {
          this.brandArr.push({
            label: item.label,
            key: item.value
          })
        })
        this.modalShow = true
        const { row } = scoped
        this.addEditId = row.RowGuid
        this.modalTitle = '编辑店铺'
      })
    },
    // modal确认
    modalConfirm () {
      this.modalShow = false
      this.brandArr = []
      this.selectOption = []
      this.getTableData()
      this.getSelects()
    },
    // moadl关闭
    modalCancel () {
      this.brandArr = []
      this.modalShow = false
    },
    deleteHandle (scoped) {
      const { row } = scoped
      this.$request.post('/shopDelete', {
        RowGuid: row.RowGuid
      }).then(res => {
        if (res.errorCode === 1) {
          this.$message.success('删除成功')
          // 删除时需判断是不是最后一页
          this._isLastPage()
          this.getTableData()
        } else {
          this.$message.error('删除失败')
        }
      })
    },
    queryHandel () {
      this.queryFrom = {
        RowGuid: this.searchForm.RowGuid[0] || ''
      }
      this.getTableData()
    },
    // 表格分页的变化
    tableChange (changeParams) {
      this.PAGING.pageSize = changeParams.pageSize
      this.PAGING.pageNum = changeParams.pageNum
      this.getTableData()
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/common/styles/page-table";
</style>
