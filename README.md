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

## ページ構成（4ページ / React Router）

| パス | ページ | 内容 |
| --- | --- | --- |
| `/#/` | TOP | 図版カルーセルのヒーロー / Mission teaser / 事業一覧 / CTA |
| `/#/mvv` | MVV | Mission・Vision・Value |
| `/#/member` | Member | 代表メッセージ / メンバー紹介 |
| `/#/company` | Company | 会社概要 / アクセス・お問い合わせ |

> ルーティングは静的ホスティングでも安定する **HashRouter**（URLは `/#/mvv` 形式）。

## 構成

```
index.html                 エントリ（フォント読み込み）
src/
  main.tsx                 ルート
  App.tsx                  ルーティング（HashRouter）
  index.css                Tailwind + アニメーション
  components/
    Hero.tsx               図版カルーセル（GLOBEXA ゴーストテキスト / ブルー背景）
    Nav.tsx                固定ナビ（TOPヒーロー上は透過 → スクロール/他ページで濃紺）
    Layout.tsx             Nav + Footer + ページ遷移時スクロール復帰
    ui.tsx                 PageHero / SectionTag / Marquee / Grain
    Footer.tsx / Reveal.tsx
  pages/
    Top.tsx / MVV.tsx / Member.tsx / Company.tsx
```

## 掲載情報について

会社概要・Mission は globexa.jp 等の公開情報をもとにしています
（代表：山﨑 星河／設立：2025年7月31日／資本金：100万円／所在地：新宿区西新宿）。
Vision・Value の文言と Member 情報の一部は、トーンを合わせて作成した**草案**です。
正式な文言・氏名・写真に差し替えてご利用ください。

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
