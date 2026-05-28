# "一起去也" 机打鸡尾酒官网 - 开发说明文档

## 📋 项目概述

**项目名称**: 一起去也 - 国内首个机打鸡尾酒品牌官网

**技术栈**:
- React 18 + TypeScript
- Vite 6 (构建工具)
- React Router DOM (路由管理，使用HashRouter)
- Tailwind CSS (样式框架)
- DaisyUI (UI组件库)
- CloudBase (云开发服务)

**部署平台**: CloudBase 静态网站托管

---

## 📁 项目结构

```
GOAT_WEB/
├── src/                          # 源代码目录
│   ├── components/               # 组件目录
│   │   ├── Navbar.tsx           # 导航栏组件
│   │   ├── Footer.tsx           # 页脚组件
│   │   ├── Carousel.tsx         # 轮播图组件
│   │   └── ProductModal.tsx     # 产品详情弹窗
│   ├── pages/                   # 页面目录
│   │   ├── HomePage.tsx         # 首页
│   │   ├── ProductsPage.tsx      # 产品系列页
│   │   ├── TechnologyPage.tsx    # 技术优势页
│   │   └── ContactPage.tsx      # 联系我们页
│   ├── data/                    # 数据文件目录
│   │   ├── carousel.ts          # 轮播图数据
│   │   └── products.ts          # 产品数据
│   ├── images/                  # 图片资源目录
│   │   ├── brand/              # 品牌logo
│   │   ├── cases/              # 案例/车间图片
│   │   ├── products/           # 产品图片
│   │   └── qrcode/            # 二维码图片
│   ├── App.tsx                 # 应用主组件
│   ├── main.tsx                # 应用入口
│   └── index.css               # 全局样式
├── public/                     # 静态资源目录（直接复制到dist）
│   ├── logo.jpg               # 网站logo
│   ├── cases/                 # 车间图片
│   ├── Official Account.jpg    # 微信公众号二维码
│   └── redbook.png           # 小红书二维码
├── dist/                       # 构建输出目录（自动生成）
├── cloudbaserc.json           # CloudBase配置文件
├── package.json               # 项目依赖配置
├── vite.config.ts            # Vite构建配置
└── DEVELOPMENT.md            # 本文档
```

---

## 🎨 设计规范

### 主题颜色
- **品牌主色**: `#862828` (深红色)
- **品牌辅色**: `#6b1f1f` (更深的红色)
- **金色强调**: `#D4AF37` (金色，用于特殊强调)
- **背景色**: `#F8F8F8` (浅灰背景)
- **文字色**: `#333333` (深灰标题), `#666666` (正文)

### 字体
- **中文字体**: `PingFang SC` (优先), `Microsoft YaHei` (备选)
- **英文字体**: 无衬线字体族

---

## 📝 内容修改指南

### 1️⃣ 修改轮播图内容

**文件位置**: `src/data/carousel.ts`

**数据结构**:
```typescript
export interface CarouselItem {
  id: string;          // 唯一标识
  title: string;        // 主标题
  subtitle: string;     // 副标题
  description: string;  // 描述文字
  image: string;        // 图片路径（如 /carousel/1.jpg）
  category: string;     // 分类（用于组织）
}
```

**修改步骤**:
1. 编辑 `carouselItems` 数组中的数据
2. 添加/删除轮播项
3. 修改图片路径（需确保图片存在于 `public/` 或 `src/images/` 目录）
4. 运行 `npm run build` 重新构建

**当前轮播图图片命名规范**: 使用 1.jpg, 2.jpg, 3.jpg 等数字命名

---

### 2️⃣ 修改产品信息

**文件位置**: `src/data/products.ts`

**数据结构**:
```typescript
export interface Product {
  id: string;              // 产品ID
  name: string;            // 产品名称
  category: string;        // 产品类别
  flavor: string;          // 风味描述
  alcohol: string;         // 酒精度（如 "10% vol"）
  specs: {
    volume: string;        // 容量
    cups: string;          // 杯数
  };
  cost: string;            // 成本价
  price: {
    wholesale: string;    // 批发价
    retail: string;        // 零售价
  };
  scene: string[];         // 适用场景
  highlights: string[];    // 产品亮点
  image: string;          // 产品图片路径
}
```

**修改步骤**:
1. 编辑 `products` 数组
2. 添加/删除产品
3. 修改产品详情（名称、价格、酒精度等）
4. 确保产品图片已放入 `src/images/products/` 目录
5. 运行 `npm run build` 重新构建

**产品图片命名**:
- 可以使用中文名称（如：莫吉托.jpg）
- 或使用数字编号（如：1.jpg, 2.jpg）
- 图片建议尺寸: 1920×600px (已处理)

---

### 3️⃣ 修改页面内容

#### 3.1 修改首页
**文件**: `src/pages/HomePage.tsx`
- 轮播图数据从 `carousel.ts` 读取
- 特色卡片内容可在此修改

#### 3.2 修改技术优势页
**文件**: `src/pages/TechnologyPage.tsx`
- 自动化制作说明
- 生产车间图片展示（背景1-4.jpg）
- 线下门店数据

**车间图片说明**:
- 背景1.jpg → 标准化工艺流程
- 背景2.jpg → 专业生产车间
- 背景3.jpg → 精密生产仪器
- 背景4 .jpg → 专业存储环境

#### 3.3 修改联系我们页
**文件**: `src/pages/ContactPage.tsx`
- 联系方式（电话、邮箱、地址）
- 二维码图片路径
- 品牌故事和理念

**二维码路径**:
- 微信公众号: `/Official Account.jpg`
- 小红书: `/redbook.png`

#### 3.4 修改导航栏/页脚
**文件**: `src/components/Navbar.tsx` 和 `src/components/Footer.tsx`
- 导航链接
- 页脚联系信息
- 快速链接跳转

---

### 4️⃣ 修改产品分类

**文件位置**: `src/data/products.ts`

**当前分类列表**:
```typescript
export const categories = [
  "全部",
  "果香系列",
  "清爽系列",
  "颜值系列",
  "果酸系列",
  "柔和系列",
  "醇香系列",
  "经典系列",
  "烈酒系列"
];
```

**修改步骤**:
1. 编辑 `categories` 数组
2. 确保所有产品的 `category` 字段都在分类列表中

---

## 🚀 开发流程

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问地址: http://localhost:5173
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 部署到CloudBase

**方式1: 使用AI助手自动部署**
1. 修改代码后，运行 `npm run build`
2. AI助手会自动上传到CloudBase静态托管
3. 等待CDN缓存刷新（通常3-5分钟）

**方式2: 手动部署**
```bash
# 安装CloudBase CLI
npm install -g @cloudbase/cli

# 登录
cloudbase login

# 部署
cloudbase hosting:deploy dist
```

---

## 📸 图片管理规范

### 图片存放位置
- **静态图片**: `public/` 目录（如logo、背景图、二维码）
- **动态内容图片**: `src/images/` 目录（如产品图片）

### 图片处理
- 产品图片建议尺寸: 1920×600px
- 轮播图建议尺寸: 1920×1080px
- 格式: JPG/PNG（保持高质量）
- 使用 Sharp 库批量处理图片（已有resize脚本）

### 图片命名规范
- 产品图片: 使用产品名称或数字编号
- 背景图片: 使用"背景+数字"命名
- 避免使用中文空格（如：背景4 .jpg 应改为 背景4.jpg）

---

## 🔧 路由管理

**使用的路由**: HashRouter（基于URL hash）

**当前路由**:
| 路径 | 页面 | 组件 |
|------|------|------|
| `/` 或 `#/` | 首页 | HomePage |
| `#/products` | 产品系列 | ProductsPage |
| `#/technology` | 技术优势 | TechnologyPage |
| `#/contact` | 联系我们 | ContactPage |

**新增页面步骤**:
1. 在 `src/pages/` 创建页面组件
2. 在 `src/App.tsx` 中导入并添加路由
3. 在 `Navbar.tsx` 中添加导航链接
4. 在 `Footer.tsx` 中添加快速链接

---

## 🎯 快速修改清单

### 常见修改任务

| 任务 | 文件位置 | 说明 |
|------|----------|------|
| 修改轮播图文案 | `src/data/carousel.ts` | 编辑title/description |
| 添加新产品 | `src/data/products.ts` | 添加Product对象 |
| 修改价格 | `src/data/products.ts` | 编辑wholesale/retail |
| 修改联系电话 | `src/components/Footer.tsx` | Footer组件 |
| 修改联系方式 | `src/pages/ContactPage.tsx` | 联系方式区域 |
| 添加产品分类 | `src/data/products.ts` | 编辑categories数组 |
| 修改车间图片说明 | `src/pages/TechnologyPage.tsx` | 编辑图片标题和描述 |
| 修改品牌故事 | `src/pages/ContactPage.tsx` | 品牌故事区域 |

---

## ⚠️ 注意事项

### 开发注意
1. **代码修改后必须重新构建**: 修改源代码后运行 `npm run build`
2. **CDN缓存**: CloudBase CDN有3-5分钟缓存，修改后需等待或强制刷新（Ctrl+F5）
3. **图片路径**: 修改图片后确认路径正确，建议使用绝对路径（如 `/images/xxx.jpg`）
4. **路由跳转**: 使用 `href="#/path"` 而非 `href="/#/path"` 确保正确跳转

### 部署注意
1. **构建输出**: 只有 `dist/` 目录的内容会被部署
2. **环境配置**: `cloudbaserc.json` 包含CloudBase环境信息
3. **域名配置**: 如需绑定自定义域名，在CloudBase控制台配置

---

## 🔍 故障排查

### 问题1: 修改后界面没有更新
**原因**: CDN缓存未刷新
**解决**:
1. 等待3-5分钟让CDN缓存自动刷新
2. 或强制刷新浏览器（Ctrl+F5 或 Cmd+Shift+R）
3. 确认已运行 `npm run build` 并重新部署

### 问题2: 图片无法显示
**原因**: 图片路径错误或图片未上传
**解决**:
1. 检查图片路径是否正确
2. 确认图片存在于 `public/` 或已通过import引入
3. 重新构建并部署

### 问题3: 点击链接不跳转
**原因**: 路由配置问题
**解决**:
1. 检查 `App.tsx` 中路由配置
2. 确认链接格式为 `href="#/path"`（注意只有一个#）
3. 检查HashRouter是否正确使用

---

## 📞 技术支持

**CloudBase文档**: https://docs.cloudbase.net/

**React文档**: https://react.dev/

**Tailwind CSS文档**: https://tailwindcss.com/docs

**DaisyUI文档**: https://daisyui.com/

---

## 📅 更新日志

**2025-12-26**
- ✨ 新增产品系列展示页
- ✨ 新增技术优势展示页
- ✨ 新增联系方式展示页
- 🔧 移除案例页面
- 🔧 优化轮播图切换按钮透明度
- 🔧 修复页脚快速链接跳转问题
- 🐛 修复联系我们页面标题颜色问题
- 📝 创建开发说明文档

---

**项目维护**: 一起去也团队
**最后更新**: 2025年12月26日
