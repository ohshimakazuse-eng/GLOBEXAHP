# 株式会社Globexa — Corporate Website

人を、事業を、未来へ動かす。
SNSマーケティング・採用コンサルティング・BPO・リスキリングの4事業を展開する
株式会社Globexa のコーポレートサイト初稿です。

## デザイン方針

- **Awwwards 受賞水準**を目指したミニマルで上質な editorial デザイン
- 暖かみのある紙色（warm paper）と深いインクのコントラスト
- 大胆な余白・大きな明朝体タイポグラフィ
- カードレイアウトに頼らない、インデックス型の事業一覧
- 成果から逆算した導線（Philosophy → Services → Approach → Company → Contact）
- PC / SP ともに破綻しない完全レスポンシブ

## 構成

```
index.html        マークアップ・コピー
css/style.css     スタイル（デザインシステム）
js/main.js        ローダー / リビール / アコーディオン / メニュー 等
```

## 主な実装

- オープニングローダー（パーセンテージ・カウント）
- ヒーローの行送りリビールアニメーション
- スクロール連動のフェードイン（IntersectionObserver）
- 事業内容のインデックス型アコーディオン
- 無限マーキー、数値カウントアップ
- `prefers-reduced-motion` 対応 / アクセシビリティ配慮

## 確認方法

任意の静的サーバーで `index.html` を開いてください。

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## フォント

Google Fonts: Shippori Mincho B1 / Cormorant Garamond / Zen Kaku Gothic New

---

© Globexa Inc.
