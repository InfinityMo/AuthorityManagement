export const stepOneForm = {
  systemName: '', // 系统名称
  systemIdent: '', // 系统标识
  isConfigMenu: 1, // 是否配置菜单
  systemDesc: '' // 系统描述
}

export const stepOneFormRules = {
  systemName: [
    { required: true, message: '请输入系统名称', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9]+$/, message: '请输入正确的系统标识', trigger: 'blur' }
  ],
  systemIdent: [
    { required: true, message: '请输入系统标识', trigger: 'blur' }
  ]
}
