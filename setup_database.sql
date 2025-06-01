-- 创建土地表
CREATE TABLE IF NOT EXISTS lands (
    id INTEGER PRIMARY KEY,
    owner TEXT,
    image_url TEXT,
    for_sale BOOLEAN DEFAULT FALSE,
    price DECIMAL(10,4) DEFAULT 0.05,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 插入64块土地（8x8网格）
INSERT INTO lands (id, owner, image_url, for_sale, price)
SELECT 
    generate_series(0, 63) as id,
    NULL as owner,
    NULL as image_url,
    FALSE as for_sale,
    0.05 as price
ON CONFLICT (id) DO NOTHING;

-- 创建存储桶用于图片上传
INSERT INTO storage.buckets (id, name, public)
VALUES ('land-images', 'land-images', true)
ON CONFLICT (id) DO NOTHING;

-- 设置存储策略 - 允许所有人查看
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'land-images');

-- 允许用户上传到自己的文件夹
CREATE POLICY "Users can upload land images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'land-images');

-- 允许用户更新自己的文件
CREATE POLICY "Users can update own images" ON storage.objects
FOR UPDATE USING (bucket_id = 'land-images');

-- 允许用户删除自己的文件
CREATE POLICY "Users can delete own images" ON storage.objects
FOR DELETE USING (bucket_id = 'land-images');

-- 启用RLS
ALTER TABLE lands ENABLE ROW LEVEL SECURITY;

-- 允许所有人查看土地信息
CREATE POLICY "Anyone can view lands" ON lands
FOR SELECT USING (true);

-- 允许任何人更新土地信息（购买、出售等）
CREATE POLICY "Anyone can update lands" ON lands
FOR UPDATE USING (true);

-- 创建更新时间戳函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 创建触发器自动更新updated_at
CREATE TRIGGER update_lands_updated_at 
BEFORE UPDATE ON lands 
FOR EACH ROW 
EXECUTE FUNCTION update_updated_at_column(); 