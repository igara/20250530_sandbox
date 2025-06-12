ARG VERSION=22.14.0

FROM node:${VERSION}-alpine AS base

FROM base AS setting
ARG BRANCH_NAME
WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk update
RUN apk add --no-cache libc6-compat git

# # Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=setting /app .

CMD ["npm", "run", "start"]
