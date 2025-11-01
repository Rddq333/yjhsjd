# 图片资源目录说明

## 目录结构

```
images/
├── README.md                    # 本说明文件
│
├── banner/                      # 轮播图
│   ├── banner1.jpg              # 首页轮播图1
│   ├── banner2.jpg              # 首页轮播图2
│   └── banner3.jpg              # 首页轮播图3
│
├── icons/                       # 功能图标
│   ├── icon-memory.png         # 红色记忆图标
│   ├── icon-vr.png             # VR云游图标
│   ├── icon-culture.png        # 文创情怀图标
│   ├── icon-local.png          # 本地介绍图标
│   ├── icon-ip.png             # IP形象图标
│   ├── icon-guide.png          # 虚拟讲解图标
│   ├── icon-vr-play.png        # VR播放图标
│   ├── icon-phone.png           # 电话图标
│   └── icon-location.png       # 位置图标
│
├── tabbar/                      # 底部导航栏图标
│   ├── home.png                # 首页图标（未选中）
│   ├── home-active.png         # 首页图标（选中）
│   ├── memory.png              # 红色记忆图标（未选中）
│   ├── memory-active.png       # 红色记忆图标（选中）
│   ├── vr.png                  # VR云游图标（未选中）
│   ├── vr-active.png           # VR云游图标（选中）
│   ├── culture.png             # 文创图标（未选中）
│   └── culture-active.png      # 文创图标（选中）
│
├── feature/                     # 特色内容图片
│   ├── feature1.jpg            # 特色内容1（红十三军革命历史）
│   └── feature2.jpg            # 特色内容2（VR全景游览）
│
├── history/                     # 历史相关图片
│   ├── history1.jpg            # 历史时间线图片1
│   ├── history2.jpg            # 历史时间线图片2
│   ├── history3.jpg            # 历史时间线图片3
│   ├── history-intro1.jpg      # 历史介绍图片1
│   ├── history-intro2.jpg      # 历史介绍图片2
│   └── history-intro3.jpg      # 历史介绍图片3
│
├── heroes/                      # 英雄人物头像
│   ├── hero1.jpg               # 英雄1头像（胡公冕）
│   ├── hero2.jpg               # 英雄2头像（金贯真）
│   └── hero3.jpg               # 英雄3头像（陈文杰）
│
├── vr/                          # VR场景图片
│   ├── vr-scene1.jpg           # VR场景1（红十三军纪念馆）
│   ├── vr-scene2.jpg           # VR场景2（革命遗址）
│   ├── vr-scene3.jpg           # VR场景3（英雄广场）
│   └── vr-scene4.jpg           # VR场景4（文化展厅）
│
├── products/                    # 文创产品图片
│   ├── product1.jpg            # 产品1（红十三军历史画册）
│   ├── product2.jpg            # 产品2（红色文化T恤）
│   ├── product3.jpg            # 产品3（革命英雄纪念章）
│   ├── product4.jpg            # 产品4（红色主题笔记本）
│   ├── product5.jpg            # 产品5（革命历史文献集）
│   └── product6.jpg            # 产品6（红色文化帆布包）
│
├── landmarks/                   # 红色地标图片
│   ├── landmark1.jpg           # 地标1（红十三军纪念馆）
│   ├── landmark2.jpg           # 地标2（革命英雄纪念碑）
│   ├── landmark3.jpg           # 地标3（革命遗址）
│   └── landmark4.jpg           # 地标4（文化广场）
│
├── ip/                          # IP形象相关图片
│   ├── ip-main.png             # IP主形象
│   ├── ip-1.png                # IP形象1（标准形象）
│   ├── ip-2.png                # IP形象2（敬礼形象）
│   ├── ip-3.png                # IP形象3（挥手形象）
│   ├── ip-4.png                # IP形象4（奔跑形象）
│   ├── ip-product1.jpg        # IP周边产品1（IP玩偶）
│   ├── ip-product2.jpg         # IP周边产品2（IP徽章）
│   ├── ip-product3.jpg         # IP周边产品3（IP贴纸）
│   └── ip-product4.jpg         # IP周边产品4（IP明信片）
│
├── scenes/                      # IP应用场景图片
│   ├── scene1.jpg             # 场景1（宣传海报）
│   ├── scene2.jpg              # 场景2（文创产品）
│   ├── scene3.jpg              # 场景3（数字媒体）
│   └── scene4.jpg             # 场景4（主题活动）
│
├── pages/                       # 页面背景图片
│   ├── memory-bg.jpg           # 红色记忆页面背景
│   └── local-bg.jpg            # 本地介绍页面背景
│
└── common/                      # 通用图片
    └── empty.png               # 空状态图片
```

## 图片规格说明

### 轮播图 (banner/)
- **尺寸建议**: 750x400px (宽高比 15:8)
- **格式**: JPG/PNG
- **大小**: 建议小于 500KB
- **内容**: 红色基地风景、纪念馆外观等

### 功能图标 (icons/)
- **尺寸建议**: 48x48px 或 64x64px
- **格式**: PNG（支持透明背景）
- **大小**: 建议小于 50KB
- **样式**: 简洁的线性图标或扁平化图标

### 底部导航栏图标 (tabbar/)
- **尺寸要求**: 81x81px（微信小程序tabBar标准尺寸）
- **格式**: PNG（支持透明背景）
- **大小**: 建议小于 40KB
- **说明**: 
  - `-active` 后缀为选中状态图标（红色主题）
  - 未选中状态图标为灰色调

### 产品图片 (products/)
- **尺寸建议**: 750x750px (正方形 1:1)
- **格式**: JPG/PNG
- **大小**: 建议小于 300KB
- **内容**: 文创产品的实拍图或设计图

### VR场景图片 (vr/)
- **尺寸建议**: 750x400px
- **格式**: JPG
- **大小**: 建议小于 400KB
- **内容**: VR场景预览图或全景图缩略图

### 历史/英雄图片 (history/, heroes/)
- **尺寸建议**: 750x500px 或 750x400px
- **格式**: JPG
- **大小**: 建议小于 300KB
- **内容**: 历史照片、英雄人物照片等

### IP形象图片 (ip/)
- **尺寸建议**: 400x400px 或 800x800px（正方形）
- **格式**: PNG（支持透明背景）
- **大小**: 建议小于 200KB
- **内容**: IP形象设计图（不同姿态）

### 页面背景图 (pages/)
- **尺寸建议**: 750x300px 或更高
- **格式**: JPG
- **大小**: 建议小于 400KB
- **内容**: 页面头部背景图

## 图片路径说明

在代码中，图片路径使用绝对路径 `/images/xxx.jpg` 的形式。

**实际文件结构**：
- 代码中: `/images/banner1.jpg`
- 实际位置: `miniprogram/images/banner/banner1.jpg`

**或者统一放在 images 根目录**：
- 代码中: `/images/banner1.jpg`
- 实际位置: `miniprogram/images/banner1.jpg`

## 图片优化建议

1. **压缩图片**: 使用图片压缩工具（如 TinyPNG、ImageOptim）压缩图片大小
2. **格式选择**: 
   - 照片使用 JPG 格式
   - 图标、透明背景图片使用 PNG 格式
   - 可以考虑使用 WebP 格式（需要小程序基础库支持）
3. **尺寸适配**: 根据不同屏幕尺寸提供 @2x、@3x 倍图
4. **懒加载**: 对于列表中的图片，考虑使用懒加载优化性能

## 图片资源获取建议

1. **轮播图**: 使用实拍的红十三军纪念馆、革命遗址等照片
2. **历史图片**: 使用历史档案照片或相关史料图片
3. **产品图片**: 使用文创产品的实拍图或设计效果图
4. **图标**: 可以设计或使用开源图标库（如 iconfont）
5. **IP形象**: 需要设计团队创建IP形象设计图

## 注意事项

⚠️ **重要提示**：
1. 确保所有图片路径与代码中的引用路径一致
2. 图片命名使用英文或拼音，避免中文文件名
3. 图片大小需要控制在合理范围内，避免影响小程序加载速度
4. 部分图片可能涉及版权，请确保合法使用

