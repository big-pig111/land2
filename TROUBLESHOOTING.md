# 🔧 故障排除指南

## 已修复的常见错误

### ✅ 错误1：Tailwind CSS 生产环境警告
```
cdn.tailwindcss.com should not be used in production
```
**修复方案**：已改用预编译的Tailwind CSS CDN + 自定义CSS变量

### ✅ 错误2：process is not defined
```
ReferenceError: process is not defined
```
**修复方案**：移除了有问题的Node.js依赖，简化了钱包连接逻辑

### ✅ 错误3：require is not defined
```
ReferenceError: require is not defined
```
**修复方案**：移除了需要Node.js环境的依赖包

### ✅ 错误4：函数重复声明
```
SyntaxError: Identifier 'closeResultModal' has already been declared
```
**修复方案**：重命名为 `closeResultModalHandler` 避免冲突

## 🚀 启动检查清单

### 1. 文件检查
- ✅ `index (5).html` - 主页面文件
- ✅ `supabase-config.js` - 配置文件
- ✅ `setup_database.sql` - 数据库脚本
- ✅ `README.md` - 使用说明

### 2. Supabase 配置检查
```javascript
// 在 supabase-config.js 中确认这些值已正确填写
const SUPABASE_CONFIG = {
    url: 'https://your-project-id.supabase.co', // ← 替换为你的URL
    anonKey: 'eyJ...', // ← 替换为你的API密钥
    // ...
};
```

### 3. 浏览器兼容性
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔍 测试步骤

### 1. 基础功能测试
1. 打开 `index (5).html`
2. 检查页面是否正常加载（无控制台错误）
3. 确认看到8x8土地网格
4. 确认统计信息正常显示

### 2. 钱包连接测试
1. 安装 [Phantom 钱包](https://phantom.app/)
2. 点击"连接钱包"按钮
3. 在钱包中确认连接
4. 检查钱包地址是否显示在页面上

### 3. 数据库连接测试
1. 点击任意土地网格
2. 检查是否打开土地详情弹窗
3. 确认数据正常加载（无"加载中"卡住）

## 🐛 仍然遇到问题？

### 检查浏览器控制台
1. 按 F12 打开开发者工具
2. 切换到"Console"标签
3. 查看是否有红色错误信息

### 常见错误解决

#### 错误：Failed to fetch
```
TypeError: Failed to fetch
```
**原因**：Supabase配置错误或网络问题
**解决**：
- 检查 `supabase-config.js` 中的URL和API密钥
- 确认网络连接正常
- 检查Supabase项目状态

#### 错误：Cross-Origin Request Blocked
```
CORS policy: Cross origin requests are only supported for protocol schemes
```
**原因**：直接打开HTML文件导致的跨域问题
**解决**：使用本地服务器：
```bash
# 方法1：使用Python
python -m http.server 8000

# 方法2：使用Node.js
npx http-server

# 方法3：使用VS Code Live Server扩展
```

#### 错误：Wallet not detected
```
请安装Solana钱包扩展（如Phantom）
```
**解决**：
1. 访问 https://phantom.app/
2. 下载并安装浏览器扩展
3. 创建或导入钱包
4. 刷新页面重试

### 联系支持
如果问题仍然存在，请提供：
1. 浏览器类型和版本
2. 完整的控制台错误信息
3. Supabase项目配置截图（隐藏敏感信息）

## 📋 性能优化建议

### 1. 本地开发环境
- 使用本地HTTP服务器而不是直接打开文件
- 启用浏览器缓存
- 使用开发者工具监控网络请求

### 2. 生产环境部署
- 配置HTTPS（钱包连接要求）
- 启用Gzip压缩
- 使用CDN加速静态资源
- 配置适当的缓存策略

### 3. Supabase优化
- 为频繁查询创建索引
- 配置适当的RLS策略
- 监控数据库性能
- 设置合理的存储桶大小限制 