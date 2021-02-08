export const menuForm = {
  menuName: '', // 菜单名称
  menuIdent: '', // 菜单标识
  menuPath: '', // 菜单路径
  menuIcon: '', // icon名称
  menuParent: '0' // 父级菜单
}
export const menuFormRules = {
  menuName: [
    { required: true, message: '请输入菜单名称', trigger: 'blur' }
  ],
  menuIdent: [
    { required: true, message: '请输入菜单标识', trigger: 'blur' },
    { pattern: /\w+/g, message: '请输入正确的菜单标识', trigger: 'blur' }
  ],
  menuPath: [
    { required: true, message: '请输入菜单路径', trigger: 'blur' },
    { pattern: /^\/[A-Za-z0-9]+/, message: '请输入正确的菜单路径', trigger: 'blur' }
  ]
  // menuParent: [{ required: true, trigger: 'change' }]
}
