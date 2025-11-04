# 🎄 2025大阪親子聖誕之旅

## 專案概述
- **名稱**: 大阪親子行程網頁
- **目標**: 建立一個美觀、易於分享和閱讀的大阪行程網頁
- **旅遊日期**: 2025年12月1日 - 12月7日（7天6夜）

## 網站功能
- 📅 **完整行程總覽** - 一目了然的7天行程表格
- 📖 **每日詳細行程** - 可展開/收合的互動式設計
- 💰 **預算總覽** - 清楚的費用明細
- 🎯 **實用資訊** - 必備APP、票券建議、天氣提醒、緊急聯絡
- 📱 **響應式設計** - 手機、平板、電腦完美顯示
- 🎨 **精美UI設計** - 漸層背景、動畫效果、emoji圖標

## 網址
- **開發環境**: https://3000-idymlr2xcfhfil5y71sxf-6532622b.e2b.dev
- **生產環境**: 待部署到 Cloudflare Pages

## 行程亮點
1. 🎢 **環球影城瑪莉歐世界** - 適合4歲小孩的親子設施
2. ⭐ **teamLab 燈展** - 互動式光影藝術體驗
3. 🎭 **花月劇場** - 日本搞笑文化體驗
4. 🐋 **天保山海遊館** - 鯨鯊、企鵝、海獺
5. 🦁 **天王寺動物園** - 小孩最愛的動物們
6. 🎄 **聖誕市集** - 御堂筋燈飾、梅田聖誕市集

## 技術架構
- **框架**: Hono (輕量級 Web 框架)
- **部署平台**: Cloudflare Pages
- **前端**: HTML + Tailwind CSS + JavaScript
- **圖標**: Font Awesome
- **字體**: Google Fonts (Noto Sans TC)

## 本地開發

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 建置專案
```bash
npm run build
```

### 使用 PM2 啟動（開發環境）
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### 測試
```bash
curl http://localhost:3000
```

## 部署

### 部署到 Cloudflare Pages
```bash
npm run deploy
```

## 專案結構
```
osaka-trip/
├── src/
│   └── index.tsx          # 主要應用程式（包含完整HTML）
├── public/                # 靜態資源
├── dist/                  # 建置輸出
├── ecosystem.config.cjs   # PM2 配置
├── wrangler.jsonc         # Cloudflare 配置
├── package.json           # 依賴管理
└── README.md              # 本文件
```

## 特色功能

### 互動式介面
- ✨ 每日行程可展開/收合
- 🎯 平滑滾動導航
- 💫 懸停動畫效果

### 資訊完整
- 📍 詳細地點資訊
- ⏰ 精確時間安排
- 💰 明確預算規劃
- 🎫 票券購買資訊
- 👨‍👩‍👧 親子貼心提醒

### 設計美觀
- 🎨 漸層色彩配色
- 📱 完全響應式設計
- 🎭 視覺層次分明
- ✨ 現代化UI風格

## 更新記錄
- **2025-11-04**: 初始版本完成
  - 完整7天行程內容
  - 互動式UI設計
  - 響應式佈局
  - PM2 配置

## 製作資訊
- **製作日期**: 2025年11月4日
- **製作工具**: Genspark AI Assistant + Hono Framework
