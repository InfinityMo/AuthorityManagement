export const modalForm = {
  staffName: '', // 员工姓名
  staffId: '', // 员工工号
  staffDept: '' // 员工部门
}

export const modalFormRules = {
  staffName: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  staffId: [
    { required: true, message: '请输入工号', trigger: 'blur' }
  ],
  staffDept: [
    { required: true, message: '请选择部门', trigger: 'change' }
  ]
}
