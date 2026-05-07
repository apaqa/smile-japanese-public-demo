# 微笑日語可操作展示網站

這個 repository 是給客戶看的 GitHub Pages 前端 demo，用來展示「微笑日語 / 第一階段上線版」的視覺方向、頁面架構與基本操作流程。

## 展示內容

- 首頁形象與日語學習視覺
- 課程列表、課程介紹與購買入口
- 學生註冊、登入、登出與學習中心
- 錄播課程觀看頁與章節完成進度
- 一對一 / 團體班預約入口
- 幸運小物商城、購物車、結帳與訂單完成
- 後台課程、商品、教師與訂單管理示意
- 正式版 WordPress / LMS / WooCommerce 執行架構說明

## Demo 說明

這是可操作展示網站，不是正式營運網站。

- 使用 localStorage 模擬資料，不含真資料庫
- 不串接真金流、真發票、真 API
- 不包含真密碼、API key、個資或正式金流資料
- 後續可替換客戶提供的 Logo、老師照片、課程影片、商品圖片與文案
- 正式上線時會以 WordPress / LMS / WooCommerce 搭配正式主機、網域、金流與發票資料落地

## 測試帳號

- Email: `student@example.com`
- Password: `demo1234`

## 主要頁面

- `index.html`
- `courses.html`
- `course-detail.html`
- `login.html`
- `dashboard.html`
- `learn.html`
- `booking.html`
- `shop.html`
- `checkout.html`
- `order-complete.html`
- `admin.html`
- `architecture.html`
- `mobile-showcase.html`

## GitHub Pages

此專案使用純靜態檔案，可部署到 GitHub Pages 的 main branch / root。所有站內連結均使用相對路徑，支援部署在 repository 子路徑。
