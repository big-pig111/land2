# 🚀 土地游戏 - 5分钟快速入门

## 📋 准备工作
- [ ] 现代浏览器（Chrome/Firefox/Safari/Edge）
- [ ] Phantom钱包扩展
- [ ] Supabase账号

## 1️⃣ 设置Supabase（3分钟）

### 步骤1：创建项目
1. 访问 https://supabase.com 并注册
2. 点击 "New Project"
3. 设置项目名称：`land-game`
4. 设置强密码并选择离你最近的区域
5. 点击 "Create new project"（等待1-2分钟）

### 步骤2：运行数据库脚本
1. 点击左侧菜单 "SQL Editor"
2. 复制 `setup_database.sql` 文件的全部内容
3. 粘贴到编辑器中
4. 点击右下角 "Run" 按钮
5. 确认无错误提示

### 步骤3：获取配置信息
1. 点击左侧菜单 "Settings" > "API"
2. 复制以下信息：
   - **Project URL**：`https://你的项目ID.supabase.co`
   - **anon public key**：`eyJ...` (很长的字符串)

## 2️⃣ 配置游戏（1分钟）

### 编辑配置文件
打开 `supabase-config.js`，替换以下内容：

```javascript
const SUPABASE_CONFIG = {
    url: 'https://你的项目ID.supabase.co',    // ← 粘贴你的Project URL
    anonKey: '你的anon-key',                // ← 粘贴你的anon public key
    developerWallet: '7jxcMBPumwn6Th9jo66px9bdgReKZJ9wGh3xJKdJDr3v',
    gameConfig: {
        gridSize: 8,
        basePrice: 0.05,
        priceIncreaseThreshold: 8,
        priceMultiplier: 2
    }
};
```

保存文件。

## 3️⃣ 安装钱包（1分钟）

1. 访问 https://phantom.app/
2. 点击 "Download"
3. 选择你的浏览器并安装扩展
4. 创建新钱包或导入现有钱包
5. 确保钱包扩展已激活

## 4️⃣ 启动游戏（30秒）

### 方法1：直接打开（推荐）
- 双击 `land-game.html` 文件

### 方法2：本地服务器
```bash
# 如果有Python
python -m http.server 8080

# 如果有Node.js
npx http-server

# 然后访问 http://localhost:8080/land-game.html
```

## 🎮 开始游戏！

1. **连接钱包**
   - 点击右上角 "连接钱包"
   - 在Phantom弹窗中点击 "连接"

2. **浏览土地**
   - 查看8×8土地网格
   - 黄色 = 可购买，紫色 = 你的土地

3. **购买第一块土地**
   - 点击任意黄色土地
   - 点击 "购买土地" 按钮
   - 等待交易确认（约2秒模拟）

4. **自定义土地**
   - 点击你的紫色土地
   - 上传图片装饰
   - 设置价格上架出售

## 🎯 游戏目标

- 💰 **收藏土地**：抢购价格较低的土地
- 📈 **投资升值**：随着售出数量增加，基础价格翻倍
- 🖼️ **创意展示**：上传图片打造个性化土地
- 💼 **交易获利**：在二级市场买卖土地

## 🔧 常见问题

**Q: 页面显示"请先配置Supabase信息"？**
A: 检查 `supabase-config.js` 中的URL和API密钥是否正确填写

**Q: 钱包连接失败？**
A: 确保已安装Phantom钱包扩展并创建了钱包

**Q: 土地数据加载失败？**
A: 检查网络连接，确认Supabase配置正确

**Q: 图片上传失败？**
A: 确认Supabase存储桶已正确创建（运行setup_database.sql脚本）

## 📞 需要帮助？

1. 查看详细文档：`README.md`
2. 故障排除指南：`TROUBLESHOOTING.md`
3. 检查浏览器控制台错误（F12）

---

**🎉 恭喜！你的土地游戏现在已经可以运行了！**

开始探索这个有趣的数字土地世界吧！ 