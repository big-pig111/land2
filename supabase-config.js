// 土地游戏 - Supabase 配置
// 请在 Supabase 项目设置中获取这些值

// 重要：请将下面的占位符替换为你的实际Supabase项目信息
const SUPABASE_CONFIG = {
    // 项目URL - 在 Supabase 项目设置 > API 中找到
    url: 'https://uiguoabevzivkxiublzy.supabase.co',
    
    // 匿名密钥 - 在 Supabase 项目设置 > API 中找到 anon public key
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ3VvYWJldnppdmt4aXVibHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3Njg1MDksImV4cCI6MjA2NDM0NDUwOX0.CyVuBUnDeVlz9otEkYmAf7jMGMecquT3QbePko1cTRE',
    
    // 开发者钱包地址（接收土地销售收入）
    developerWallet: '7jxcMBPumwn6Th9jo66px9bdgReKZJ9wGh3xJKdJDr3v',
    
    // 游戏规则配置
    gameConfig: {
        gridSize: 8,              // 网格大小 (8x8 = 64块土地)
        basePrice: 0.05,          // 初始基础价格 (SOL)
        priceIncreaseThreshold: 8, // 每售出8块土地后价格上涨
        priceMultiplier: 2        // 价格翻倍
    }
};

// 使用说明：
// 1. 在 Supabase 创建新项目
// 2. 运行 setup_database.sql 脚本
// 3. 将上面的 url 和 anonKey 替换为你的实际值
// 4. 保存文件并刷新网页

// 如果在HTML文件中使用，配置会自动加载
if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}

// 如果在Node.js环境中使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
} 
