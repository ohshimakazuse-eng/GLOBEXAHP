# 株式会社Globexa — Corporate Website

成長を、設計する。
SNSマーケティング・採用コンサルティング・BPO・リスキリングの4事業を展開する
株式会社Globexa のコーポレートサイトです。

ボールドな図版カルーセルのヒーロー（ブルー基調）と、それに連動した
力強いタイポグラフィ（Anton）による一貫したUIで構成しています。

## 技術スタック

- **React 18 + TypeScript**
- **Vite**（開発サーバー / ビルド）
- **Tailwind CSS**
- **lucide-react**（アイコン）
- Fonts: **Anton**（ディスプレイ） / **Inter**（本文）

## 構成

```
index.html                 エントリ（フォント読み込み）
src/
  main.tsx                 ルート
  App.tsx                  ページ構成
  index.css                Tailwind + アニメーション
  components/
    Hero.tsx               図版カルーセル（GLOBEXA ゴーストテキスト / ブルー背景）
    Nav.tsx                スクロールで現れる固定ナビ
    Sections.tsx           Marquee / Philosophy / Services / Approach / Stats / Company / Contact
    Footer.tsx             フッター
    Reveal.tsx             スクロール連動リビール
```

## 開発・確認方法

```bash
# 1) 依存をインストール（初回のみ）
npm install

# 2) 開発サーバーを起動 → ターミナルに出る http://localhost:5173 を開く
npm run dev

# 本番ビルド
npm run build

# ビルド結果をローカル確認
npm run preview
```

> 注意: React/Vite アプリのため、HTMLファイルを直接ダブルクリックしても動きません。
> 上の `npm run dev` で表示してください。

## ヒーローの仕様

- 4点の図版を `center / left / right / back` のロールで配置し、矢印クリックで回転
- 背景色・位置・スケール・ぼかし・不透明度が **650ms / cubic-bezier(0.4,0,0.2,1)** で同時にクロスフェード
- 背面に巨大なゴーストテキスト **「GLOBEXA」**
- 背景は全スライド **ブルー** で統一
- グレイン（SVGノイズ）オーバーレイ
- 矢印キー操作・モバイル対応

> 図版（フィギュア画像）は指定のプレースホルダーです。ブランド用ビジュアルに差し替え可能です。

---

© Globexa Inc.
