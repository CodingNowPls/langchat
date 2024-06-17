export default {
  app: 'Lang Chat',
  common: {
    add: '添加',
    addSuccess: '添加成功',
    edit: '编辑',
    editSuccess: '编辑成功',
    delete: '删除',
    deleteSuccess: '删除成功',
    deleteWarn: '确认删除此条数据吗？',
    save: '保存',
    saveSuccess: '保存成功',
    reset: '重置',
    action: '操作',
    createTime: '创建时间',
    search: '查询',
    export: '导出',
    exportSuccess: '导出成功',
    import: '导入',
    importSuccess: '导入成功',
    clear: '清空',
    clearSuccess: '清空成功',
    yes: '是',
    no: '否',
    copy: '复制代码',
    copySuccess: '复制成功',
    confirm: '提交',
    cancel: '取消',
    download: '下载',
    noData: '暂无数据',
    wrong: '好像出错了，请稍后再试。',
    success: '操作成功',
    failed: '操作失败',
    verify: '验证',
    unauthorizedTips: '未经授权，请先进行验证。',
    stopResponding: '停止响应',
    onlyPdf: '只能上传文档类型的文件，请重新上传',
    editModal: '新增/编辑',
    emptyTips: '请输入内容',
  },
  home: {
    title: 'AI 应用市场',
    des: '基于 LangChain 的 AICG 平台\n智能对话、文档分析\n文生图、思维导图生成\n让AI变得更简单',
    search: '请输入关键词查询应用',
    chat: 'AI 对话',
    image: 'AI 生图',
    doc: 'AI 文档分析',
    chart: 'AI 图表分析',
    empty: '没有找到任何内容',
    use: '使用',
  },
  login: {
    title: '登录',
    content: '登录系统获取完整的操作权限？',
    positiveText: '去登录',
    negativeText: '取消',
    slogan: '高级RAG、多模态、Function Call',
    des: '支持接入数十家LLM大模型产品，快速构建企业知识库<br/>Java生态，RBAC体系，支持文生图、图表分析、简洁易用的API',
    loginTip: '登录你的账户',
    noAccount: '没有账户？',
    toRegister: '去注册',
    registerTip: '注册你的账户',
    hasAccount: '已经有账户？',
    toLogin: '去登录',
    accountType: '账号登录',
    emailType: '短信登录',
    emailRegType: '邮箱注册',
    phoneRegType: '手机号注册',
    otherType: '其他登录方式',
    wxType: '微信登录',
    googleType: 'Google登录',
    githubType: 'Github登录',
    namePlaceholder: '请输入用户名/邮箱',
    phonePlaceholder: '请输入手机号/邮箱',
    emailPlaceholder: '请输入邮箱',
    passPlaceholder: '请输入密码',
    codePlaceholder: '请输入验证码',
    success: '登录成功',
    regSuccess: '注册成功，登录中...',
    getCode: '获取验证码',
    codeExp: '秒后重新获取',
    emailFormatErr: '邮箱格式错误',
    codeFormatErr: '验证码格式错误',
    passFormat: '密码长度至少为六位',
    register: '注册',
    error: '登录失败',
    codeSendSuccess: '验证码已成功发送，请检查邮箱',
    codeSendFail: '验证码发送失败，请稍后重试',
    forgetSubmit: '确定重置',
    forget: '重置密码',
    forgetPassPlaceholder: '请输入新的密码',
    forgetSubmitSuccess: '密码重置成功，请重新登陆',
  },
  side: {
    theme: '主题设置',
    user: '用户管理',
    profile: '个人中心',
    prompt: 'Prompt市场',
    login: '登录',
    logout: '注销',
  },
  menu: {
    home: '主页',
    chat: '聊天',
    doc: '文档',
    write: '撰写',
    chart: '图表分析',
    image: '文生图',
    mindmap: '思维导图',
    user: '用户中心',
  },
  chat: {
    placeholder: '请输入您的问题）',
    placeholderMobile: '来说点什么...',
    copy: '复制',
    copied: '复制成功',
    copyCode: '复制代码',
    clearChat: '清空会话',
    clearChatConfirm: '是否清空会话?',
    exportImage: '保存会话到图片',
    exportImageConfirm: '是否将会话保存为图片?',
    exportSuccess: '保存成功',
    exportFailed: '保存失败',
    usingContext: '上下文模式',
    turnOnContext: '当前模式下, 发送消息会携带之前的聊天记录',
    turnOffContext: '当前模式下, 发送消息不会携带之前的聊天记录',
    deleteMessage: '删除消息',
    deleteMessageConfirm: '是否删除此消息?',
    deleteHistoryConfirm: '确定删除此记录?',
    deleteConversationConfirm: '确定删除会话内容?',
    preview: '预览',
    showRawText: '显示原文',
    filePlaceholder: '上传图片或者文件内容',
    searchPlaceholder: '搜索会话',
    newChatButton: '新建会话',
    emptyConversation: '会话列表为空',
  },
  store: {
    siderButton: '提示词商店',
    local: '本地',
    online: '在线',
    title: '标题',
    description: '描述',
    clearStoreConfirm: '是否清空数据？',
    importPlaceholder: '请粘贴 JSON 数据到此处',
    addRepeatTitleTips: '标题重复，请重新输入',
    addRepeatContentTips: '内容重复：{msg}，请重新输入',
    editRepeatTitleTips: '标题冲突，请重新修改',
    editRepeatContentTips: '内容冲突{msg} ，请重新修改',
    importError: '键值不匹配',
    importRepeatTitle: '标题重复跳过：{msg}',
    importRepeatContent: '内容重复跳过：{msg}',
    onlineImportWarning: '注意：请检查 JSON 文件来源！',
    downloadError: '请检查网络状态与 JSON 文件有效性',
  },
  doc: {
    upload: '上传文档文件',
    taskOk: '所有文档都解析完成',
    taskRun: '文件解析操作进行中，任务数',
    previewEmpty: '点击左侧文件列表预览文件内容',
    chatEmpty: '选择右侧文档聊天',
    previewError: '文档预览失败',
    delConfirm: '你确定删除此文档以及相关数据吗？',
  },

  user: {
    title: '用户数据',
    username: '用户名',
    password: '密码',
    email: '邮箱',
    avatar: '头像',
    usernameTips: '请输入账号',
    passwordTips: '请输入密码',
    emailTips: '请输入邮箱',
    avatarTips: '请输入头像',
    formValidate: '请输入表单内容',
  },
  prompt: {
    title: '提示词市场',
    name: '名称',
    prompt: '提示词',
    nameTips: '请输入名称',
    promptTips: '请输入提示词',
  },
  mindmap: {
    example: '示例',
    des: '内容描述',
    output: '输出内容',
    confirm: '生成思维导图',
    inputTips: '请描述要生成的思维导图',
    outputTips: '根据描述生成的思维导图Markdown格式文本',
    title: '思维导图',
    titleDes: '在左侧输入内容点击生成思维导图，或者点击左侧查看示例',
    begin: '立即开始',
  },
  mermaid: {
    example: '示例',
    des: '内容描述',
    output: '输出内容',
    confirm: '生成序列图',
    inputTips: '请描述要生成的序列图Mermaid',
    outputTips: '根据描述生成的序列图Mermaid脚本内容',
    title: '序列图',
    titleDes: '在左侧输入内容点击生成序列图Mermaid，或者点击左侧查看示例',
    begin: '立即开始',
  },
};
