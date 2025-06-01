// Supabase配置文件
// 请在Supabase仪表板中获取这些值并替换下面的占位符

const SUPABASE_CONFIG = {
    // 在Supabase项目设置 > API中找到Project URL
    url: 'https://uiguoabevzivkxiublzy.supabase.co',
    
    // 在Supabase项目设置 > API中找到anon public key
    anonKey: 's6lUk+4OsqFmFpS8fBQuX90RA3q0Z3CyBhcR0IsgLxR8UDc2Jshcd1GisGcjoudC3Tr4L+UhZHrYFtAupfO35A==',
    
    // 开发者钱包地址
    developerWallet: '7jxcMBPumwn6Th9jo66px9bdgReKZJ9wGh3xJKdJDr3v',
    
    // 游戏配置
    gameConfig: {
        gridSize: 8, // 8x8网格
        basePrice: 0.05, // 基础价格0.05 SOL
        priceIncreaseThreshold: 8, // 每8块土地购买后价格翻倍
        priceMultiplier: 2 // 价格翻倍
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
} else {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
} 