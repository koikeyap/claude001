# HealthTracker LP Site 🏃‍♀️💪

JavaScriptベースの健康管理アプリケーションのランディングページサイトプロジェクト

## プロジェクト概要

健康意識の高いユーザーをターゲットとした、直感的で魅力的なランディングページを構築します。レスポンシブデザインで、モダンなWebテクノロジーを活用した高品質なサイトを目指します。

## 技術スタック

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite または Webpack
- **CSS Framework**: Tailwind CSS または Bootstrap
- **アニメーション**: GSAP または CSS Animations
- **アイコン**: Heroicons または Feather Icons

## 主要機能

- [ ] レスポンシブデザイン対応
- [ ] ヒーローセクション（キャッチコピー + CTA）
- [ ] 機能紹介セクション
- [ ] ユーザーの声・レビューセクション
- [ ] 料金プランセクション
- [ ] お問い合わせフォーム
- [ ] スムーズスクロールナビゲーション
- [ ] アニメーション効果

## ディレクトリ構成

```
/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   └── animations.js
│   └── components/
├── public/
│   └── index.html
├── docs/
├── tests/
└── package.json
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# テスト実行
npm test
```

## 開発ガイドライン

- コードは ES6+ を使用
- セマンティックHTML を心がける
- アクセシビリティ対応 (WCAG 2.1 AA準拠)
- モバイルファーストデザイン
- パフォーマンス最適化 (Lighthouse スコア90+目標)

## ブランチ戦略

- `main`: 本番環境用
- `develop`: 開発統合ブランチ
- `feature/*`: 機能開発ブランチ

## ライセンス

MIT License