export const columnsData = (h, $this) => [{
  dataKey: 'systemName',
  title: '系统名称',
  align: 'left',
  render: (h, scoped, row) => {
    return (
      <span class="view-title ell" onClick={() => $this.toView(scoped)}>{scoped.row.systemName}</span>
    )
  }
}, {
  dataKey: 'systemIdent',
  title: '系统标识',
  align: 'left'
}, {
  dataKey: 'systemDesc',
  title: '系统描述',
  align: 'left'
}, {
  dataKey: 'updateTime',
  title: '更新时间',
  align: 'left'
},
{
  dataKey: 'operate',
  title: '操作',
  width: 370,
  render: (h, scoped) => {
    return (
      <div class="flex-justify-start flex-item-center">
        <el-button style="padding-left:0" type="text" onClick={() => $this.editMoadl(scoped)}>编辑</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-popconfirm onOnConfirm={() => $this.deleteHandle(scoped)} placement="top" title="确定删除吗？">
          <el-button type="text" slot="reference" >删除</el-button>
        </el-popconfirm>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" onClick={() => $this.editMoadl(scoped)}>角色编辑</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" onClick={() => $this.editMoadl(scoped)}>角色授权</el-button>
      </div>
    )
  }
}]
