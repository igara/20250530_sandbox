ARG VERSION=22.14.0

# ビルドステージ
FROM node:${VERSION}-alpine AS builder
WORKDIR /app

# 依存インストール
COPY package*.json ./
RUN npm ci

# アプリの全ファイルをコピーしてビルド
COPY . .
RUN npm run build

# 実行ステージ
FROM node:${VERSION}-alpine
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
