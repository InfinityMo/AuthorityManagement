<template>
  <div class="from-wrap clearfix">
    <div class="menu-wrap">
      <div class="top-title flex-item-center">
        <div class="flex-between-center menu-title">
          <h4>菜单</h4>
          <el-button type="primary"
                     class="flex-item-center">
            <icon type="icon-add-white-14"
                  :padding="[0,5,0,0]" />添加菜单
          </el-button>
        </div>
        <div class="flex-item-center menu-detail">
          <h4>菜单详情</h4>
          <p>（配置完菜单信息后请点击“保存”再进行其他操作） </p>
        </div>
      </div>
      <div class="menu-content">
        <div class="left-tree">
          <el-tree :data="treeData"
                   node-key="id"
                   default-expand-all
                   draggable
                   :allow-drop="allowDrop"
                   :allow-drag="allowDrag"
                   :expand-on-click-node="false">
            <span class="custom-tree-node"
                  slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span class="icon-delete">
                <icon type="icon-delete-14"
                      :padding="[0,15,0,10]"
                      @click.native="() => remove(node, data)" />
              </span>
            </span>
          </el-tree>
        </div>
        <div class="right-from">
          <el-form :model="menuForm"
                   :rules="menuFormRules"
                   ref="menuForm"
                   class="menu-form"
                   label-width="82px">
            <div class="menu-item">
              <el-form-item label="菜单名称："
                            prop="menuName">
                <el-input v-model="menuForm.menuName"
                          placeholder="请输入菜单名称"
                          autocomplete="off">
                </el-input>
              </el-form-item>
              <el-form-item label="菜单标识："
                            prop="menuIdent">
                <el-input v-model="menuForm.menuIdent"
                          placeholder="请输入菜单标识"
                          maxlength=10
                          autocomplete="off">
                </el-input>
              </el-form-item>
            </div>
            <div class="menu-item">
              <el-form-item label="菜单路径："
                            prop="menuPath">
                <el-input v-model="menuForm.menuPath"
                          placeholder="请输入菜单路径"
                          maxlength=100
                          autocomplete="off">
                </el-input>
              </el-form-item>
              <el-form-item label="icon名称："
                            prop="menuIcon">
                <el-input v-model="menuForm.menuIcon"
                          placeholder="请输入icon名称"
                          maxlength=20
                          autocomplete="off">
                </el-input>
              </el-form-item>
            </div>
            <div class="menu-item">
              <el-form-item label="父级菜单："
                            prop="menuParent">
                <el-select v-model="menuForm.menuParent"
                           placeholder="请选择父级菜单">
                  <el-option v-for="item in menuOptions"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
          <div class="btn-group">
            <el-button @click="deleteHandle">删除</el-button>
            <el-button type="primary"
                       @click="submitForm">保存</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group btn-process">
      <el-button @click="back">上一步</el-button>
      <el-button type="primary"
                 @click="complete"
                 :disabled="treeData.length<=0">完成</el-button>
    </div>
  </div>
</template>
<script>
import { menuForm, menuFormRules } from './stepTwoForm'
export default {
  data () {
    return {
      menuForm: Object.assign({}, menuForm),
      menuFormRules: menuFormRules,
      menuOptions: [{ value: '0', label: '主菜单' }],
      treeData: [],
      // treeData: [{
      //   id: 1,
      //   label: '一级 1',
      //   children: [{
      //     id: 4,
      //     label: '二级 1-1',
      //     children: [{
      //       id: 9,
      //       label: '三级 1-1-1'
      //     }, {
      //       id: 10,
      //       label: '三级 1-1-2'
      //     }]
      //   }]
      // }, {
      //   id: 2,
      //   label: '一级 2',
      //   children: [{
      //     id: 5,
      //     label: '二级 2-1'
      //   }, {
      //     id: 6,
      //     label: '二级 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: '一级 3',
      //   children: [{
      //     id: 7,
      //     label: '二级 3-1'
      //   }, {
      //     id: 8,
      //     label: '二级 3-2'
      //   }]
      // }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {

  },
  methods: {
    // 目标节点能否被放置
    allowDrop (draggingNode, dropNode, type) {
      // 最多可拖动5层
      return !(dropNode.level === 5 && type === 'inner')
      // if (dropNode.level === 5 && type === 'inner') {
      //   return false
      // } else {
      //   return true
      // }
    },
    // 节点能否被拖动
    allowDrag (draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    },
    // 删除树节点
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    deleteHandle () {

    },
    complete () {
      this.$emit('stepTwo')
    },
    back () {
      this.$emit('stepTwoBack', this.stepOneForm)
    },
    submitForm () {
      this.$refs.menuForm.validate((valid) => {
        if (valid) {
          this.treeData.push({ id: 1, label: this.menuForm.menuName })
          this.$refs.menuForm.resetFields()
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepTwo";
</style>
