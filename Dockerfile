FROM oven/bun:1.3.14-slim AS base
WORKDIR /app

FROM base AS install
COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

FROM base AS build
ENV NODE_ENV=production
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM nginx:alpine AS release

LABEL org.opencontainers.image.title="@germondai/blog" \
      org.opencontainers.image.description="Self-hostable personal blog - FOSS, Astro 6, single-file config" \
      org.opencontainers.image.url="https://github.com/germondai/blog" \
      org.opencontainers.image.source="https://github.com/germondai/blog" \
      org.opencontainers.image.licenses="AGPL-3.0-or-later" \
      org.opencontainers.image.authors="germondai <germondai@gmail.com>"

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
