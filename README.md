# 永嘉红十三军基地微信小程序

## 项目简介

本项目是为"挑战杯比赛路演"开发的微信小程序，主题为"永嘉红十三军基地"。小程序采用红色主题设计，展示红色历史、VR云游、文创产品等内容。

## 项目结构

```
miniprogram/
├── app.json              # 小程序全局配置（路由、导航栏、tabBar等）
├── app.less              # 全局样式（红色主题风格）
├── app.ts                # 小程序入口逻辑
├── sitemap.json          # 站点地图配置
│
├── images/               # 图片资源目录（需创建）
│   ├── tabbar/          # 底部导航栏图标（必须）
│   │   ├── home.png
│   │   ├── home-active.png
│   │   ├── memory.png
│   │   ├── memory-active.png
│   │   ├── vr.png
│   │   ├── vr-active.png
│   │   ├── culture.png
│   │   └── culture-active.png
│   ├── banner1.jpg       # 轮播图
│   ├── banner2.jpg
│   ├── banner3.jpg
│   ├── icon-memory.png   # 功能图标
│   ├── icon-vr.png
│   ├── icon-culture.png
│   ├── icon-local.png
│   ├── icon-ip.png
│   ├── feature1.jpg      # 特色内容
│   ├── feature2.jpg
│   └── [其他图片...]     # 详见 images/图片资源清单.txt
│
├── pages/                # 页面文件夹
│   ├── index/            # 首页：五大功能模块入口
│   │   ├── index.json    # 页面配置
│   │   ├── index.ts      # 页面逻辑
│   │   ├── index.wxml    # 页面结构（轮播图、功能入口、特色内容）
│   │   └── index.less    # 页面样式
│   │
│   ├── redMemory/        # 红色记忆页面：红色历史内容展示、虚拟讲解
│   │   ├── redMemory.json
│   │   ├── redMemory.ts  # 历史时间线、英雄人物、虚拟讲解功能
│   │   ├── redMemory.wxml
│   │   └── redMemory.less
│   │
│   ├── vrTour/           # VR云游页面：VR全景浏览链接
│   │   ├── vrTour.json
│   │   ├── vrTour.ts     # VR场景列表、全景浏览功能
│   │   ├── vrTour.wxml
│   │   └── vrTour.less
│   │
│   ├── cultureProducts/  # 文创情怀页面：文创产品展示
│   │   ├── cultureProducts.json
│   │   ├── cultureProducts.ts  # 产品列表、分类筛选、产品详情
│   │   ├── cultureProducts.wxml
│   │   └── cultureProducts.less
│   │
│   ├── localIntro/       # 本地介绍页面：永嘉红色文化介绍
│   │   ├── localIntro.json
│   │   ├── localIntro.ts  # 地区概况、历史文化、红色地标、交通指南
│   │   ├── localIntro.wxml
│   │   └── localIntro.less
│   │
│   └── ipImage/          # IP形象页面：红色文化IP形象展示
│       ├── ipImage.json
│       ├── ipImage.ts    # IP形象展示、应用场景、周边产品
│       ├── ipImage.wxml
│       └── ipImage.less
│
├── components/           # 组件文件夹
│   └── navigation-bar/   # 自定义导航栏组件
│
└── utils/               # 工具函数文件夹
    └── util.ts          # 工具函数
```

## 功能模块说明

### 1. 首页 (index)
- **功能**：展示五大功能模块入口
- **内容**：
  - 轮播图展示红色基地风采
  - 功能网格：红色记忆、VR云游、文创情怀、本地介绍、IP形象
  - 特色内容推荐

### 2. 红色记忆 (redMemory)
- **功能**：红色历史内容展示、虚拟讲解
- **内容**：
  - 历史时间线：展示革命历程
  - 英雄人物：展示革命英雄事迹
  - 虚拟讲解：AI智能讲解员功能

### 3. VR云游 (vrTour)
- **功能**：VR全景浏览链接
- **内容**：
  - VR场景列表：纪念馆、遗址、广场、展厅等
  - 全景浏览功能
  - 使用说明

### 4. 文创情怀 (cultureProducts)
- **功能**：文创产品展示
- **内容**：
  - 产品分类：书籍、纪念品、服饰、文具等
  - 产品列表展示
  - 产品详情查看

### 5. 本地介绍 (localIntro)
- **功能**：永嘉红色文化介绍
- **内容**：
  - 地区概况
  - 历史文化
  - 红色地标
  - 交通指南
  - 联系信息

### 6. IP形象 (ipImage)
- **功能**：红色文化IP形象展示
- **内容**：
  - IP形象主展示
  - IP介绍
  - 形象展示（多种姿态）
  - 应用场景
  - IP周边产品

## 设计风格

- **主题色**：红色 (#C80000) - 体现红色文化主题
- **设计风格**：现代简洁、带有文化气息
- **色彩方案**：
  - 主题红色：`#C80000`
  - 深红色：`#A00000`
  - 浅红色：`#FF6B6B`
  - 金色点缀：`#D4AF37`

## 配置说明

### app.json 路由配置

```json
{
  "pages": [
    "pages/index/index",                    // 首页
    "pages/redMemory/redMemory",             // 红色记忆（tabBar）
    "pages/vrTour/vrTour",                  // VR云游（tabBar）
    "pages/cultureProducts/cultureProducts", // 文创（tabBar）
    "pages/localIntro/localIntro",           // 本地介绍
    "pages/ipImage/ipImage"                 // IP形象
  ],
  "tabBar": {
    // 底部导航栏配置，包含首页、红色记忆、VR云游、文创四个主要入口
  }
}
```

## 图片资源目录

### 📁 目录结构

图片资源统一放在 `miniprogram/images/` 目录下：

```
miniprogram/images/
├── tabbar/                    # 底部导航栏图标（必须创建）
│   ├── home.png              # 首页图标（未选中）
│   ├── home-active.png       # 首页图标（选中）
│   ├── memory.png            # 红色记忆图标（未选中）
│   ├── memory-active.png     # 红色记忆图标（选中）
│   ├── vr.png                # VR云游图标（未选中）
│   ├── vr-active.png         # VR云游图标（选中）
│   ├── culture.png           # 文创图标（未选中）
│   └── culture-active.png    # 文创图标（选中）
│
├── banner1.jpg                # 首页轮播图1
├── banner2.jpg                # 首页轮播图2
├── banner3.jpg                # 首页轮播图3
├── icon-memory.png            # 红色记忆功能图标
├── icon-vr.png                # VR云游功能图标
├── icon-culture.png           # 文创功能图标
├── icon-local.png             # 本地介绍功能图标
├── icon-ip.png                # IP形象功能图标
├── feature1.jpg               # 特色内容图片1
├── feature2.jpg               # 特色内容图片2
└── [其他图片...]              # 共需 50+ 张图片
```

### 📋 完整图片清单

详见 `miniprogram/images/图片资源清单.txt` 文件

### ⚡ 快速开始

1. **创建目录**：
   ```bash
   # 在 miniprogram 目录下创建 images 和 tabbar 目录
   miniprogram/images/
   miniprogram/images/tabbar/
   ```

2. **优先准备**：
   - ✅ 底部导航栏图标（tabbar/）- **必须**
   - ✅ 首页轮播图（banner1-3.jpg）
   - ✅ 功能图标（icon-*.png）

3. **图片规格**：
   - tabBar 图标：81x81px，PNG格式
   - 轮播图：750x400px，JPG格式
   - 功能图标：48x48px 或 64x64px，PNG格式

### 📖 详细说明

查看 `miniprogram/images/README.md` 获取详细的图片规格、路径说明和优化建议。

## 注意事项

1. **图片资源**：项目中引用的图片路径（如 `/images/xxx.jpg`）需要添加实际图片资源
2. **tabBar图标**：底部导航栏需要的图标文件已配置路径为 `images/tabbar/xxx.png`
3. **VR链接**：VR云游页面中的全景链接需要替换为实际VR全景地址
4. **数据接口**：当前页面数据为静态数据，可根据需要对接后端API
5. **虚拟讲解**：需要集成语音合成或音频播放功能
6. **地图定位**：本地介绍页面需要配置实际的经纬度坐标

## 开发工具

- 微信开发者工具
- TypeScript
- Less 样式预处理器

## 后续开发建议

1. 接入后端API，实现数据动态加载
2. 完善VR全景浏览功能
3. 实现虚拟讲解功能（语音合成）
4. 添加产品购买功能（跳转商城或电商平台）
5. 优化用户体验，添加加载状态、错误处理等
6. 添加分享功能，推广红色文化

