# 🎮 土地游戏 - 数字土地所有权平台

一个基于Supabase后端的简洁土地游戏，用户可以购买、管理和交易8×8网格中的虚拟土地。

## ✨ 核心功能

- **8×8土地网格**：64块可购买的数字土地
- **动态定价系统**：每售出8块土地，基础价格翻倍（100%增长）
- **钱包验证**：通过Solana钱包地址验证土地所有权
- **图片上传**：土地所有者可自定义土地图片
- **二级市场**：用户可自由上架和交易土地
- **中心化后端**：使用Supabase替代智能合约

## 🚀 快速开始

### 1️⃣ 设置Supabase

1. 访问 [Supabase](https://supabase.com) 并创建账号
2. 创建新项目，设置数据库密码
3. 在SQL编辑器中运行 `setup_database.sql` 脚本
4. 在项目设置 > API 中获取：
   - Project URL
   - anon public key

### 2️⃣ 配置项目

编辑 `supabase-config.js` 文件：

```javascript
const SUPABASE_CONFIG = {
    url: 'https://你的项目ID.supabase.co',      // 替换为你的URL
    anonKey: '你的anon-key',                    // 替换为你的密钥
    developerWallet: '7jxcMBPumwn6Th9jo66px9bdgReKZJ9wGh3xJKdJDr3v',
    gameConfig: {
        gridSize: 8,
        basePrice: 0.05,
        priceIncreaseThreshold: 8,
        priceMultiplier: 2
    }
};
```

### 3️⃣ 启动游戏

1. 直接用浏览器打开 `land-game.html`
2. 或使用本地服务器：
   ```bash
   python -m http.server 8080
   ```
3. 安装 [Phantom钱包](https://phantom.app/) 并连接

## 🎯 游戏规则

### 💰 定价机制
- **初始价格**：0.05 SOL
- **价格增长**：每售出8块土地，基础价格翻倍
- **示例**：
  - 前8块：0.05 SOL
  - 第9-16块：0.10 SOL  
  - 第17-24块：0.20 SOL
  - 依此类推...

### 🏗️ 土地管理
- **购买**：从开发者或其他用户购买土地
- **自定义**：上传个人图片装饰土地
- **交易**：设定价格上架出售
- **所有权**：通过钱包地址验证

### 🔄 交易流程
1. 连接Solana钱包（推荐Phantom）
2. 浏览8×8土地网格
3. 点击土地查看详情
4. 确认购买并等待交易处理
5. 成为土地所有者！

## 🏗️ 技术架构

### 前端
- **HTML5 + JavaScript**：纯原生Web技术
- **Tailwind CSS**：现代化响应式设计
- **Font Awesome**：图标库

### 后端
- **Supabase**：数据库 + 存储 + 实时更新
- **PostgreSQL**：关系数据库
- **Row Level Security**：数据安全保护

### 数据库结构
```sql
CREATE TABLE lands (
    id INTEGER PRIMARY KEY,        -- 土地ID (0-63)
    owner TEXT,                   -- 所有者钱包地址
    image_url TEXT,               -- 自定义图片URL
    for_sale BOOLEAN DEFAULT FALSE, -- 是否正在出售
    price DECIMAL(10,4),          -- 出售价格
    created_at TIMESTAMP,         -- 创建时间
    updated_at TIMESTAMP          -- 更新时间
);
```

## 📁 文件结构

```
├── land-game.html          # 主游戏页面
├── supabase-config.js      # Supabase配置
├── setup_database.sql      # 数据库初始化脚本
├── README.md              # 项目说明
└── TROUBLESHOOTING.md     # 故障排除指南
```

## 🎨 界面预览

- **🟨 黄色**：可从开发者购买的土地
- **🟢 绿色**：已被其他用户拥有的土地  
- **🟦 蓝色**：正在出售的土地
- **🟣 紫色**：你拥有的土地

## ⚙️ 自定义配置

可在 `supabase-config.js` 中调整游戏参数：

```javascript
gameConfig: {
    gridSize: 8,              // 可改为10x10, 12x12等
    basePrice: 0.05,          // 调整初始价格
    priceIncreaseThreshold: 8, // 调整价格上涨频率
    priceMultiplier: 2        // 调整价格增长倍数
}
```

## 🔧 故障排除

### 常见问题

**❌ 配置错误**
```
请先配置Supabase信息！
```
**解决**：在 `supabase-config.js` 中填入正确的URL和API密钥

**❌ 钱包未检测**
```
请安装Phantom钱包
```
**解决**：访问 https://phantom.app/ 安装钱包扩展

**❌ 数据加载失败**
```
加载数据失败: ...
```
**解决**：检查Supabase项目状态和网络连接

### 调试技巧
1. 按 F12 打开浏览器开发者工具
2. 查看 Console 标签中的错误信息
3. 检查 Network 标签中的请求状态

## 📋 开发计划

- [ ] 添加土地历史记录
- [ ] 实现用户排行榜
- [ ] 添加土地租赁功能
- [ ] 集成更多钱包支持
- [ ] 移动端优化

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 💬 联系我们

- **问题反馈**：在GitHub创建Issue
- **功能建议**：欢迎提交Pull Request
- **技术讨论**：可在Issues中展开讨论

---

**⚠️ 免责声明**：本项目仅用于教育和演示目的。在生产环境中使用前请进行充分的安全审计。 