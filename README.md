# Phaser on Next.js Template Project

[Phaser](https://phaser.io) を [Next.js](https://nextjs.org) の Pages Router で使うためのテンプレートです。

## 開発

### システム要件

- [Node.js 18.18](https://nodejs.org) 以上

### 依存関係のインストール

```shell
npm install
```

### 開発環境の実行

```shell
npm run dev
```

### ビルド

```shell
npm run build
```

## SPA

テンプレートの設定では Next.js は SSR で実行されます。
SPA としてビルドする場合は `next.config.ts` を編集してください。

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // 追加
  distDir: "out", // 追加
};

export default nextConfig;
```

```shell
# SPAとしてビルド
npm run build
# outディレクトリに出力した成果物を実行
npx serve out
```

## フォーマットと静的解析

フォーマットと静的解析には [Biome](https://biomejs.dev) を使用しています。
ルールの変更は `biome.json` を編集してください。
