# Stage 1: Fast Build with Node Alpine
FROM node:22.14.0-alpine AS builder

WORKDIR /app

# Copy dependency configs
COPY package.json package-lock.json .npmrc ./

# Install dependencies cleanly
RUN npm ci

# Copy source files
COPY . .

# Build static production bundle
RUN npm run build

# Stage 2: Ultra-Fast Nginx Production Runner (<25MB image size, instant start)
FROM nginx:alpine AS runner

# Copy compiled static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx SPA config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Docker Healthcheck for Coolify, Traefik, and Caddy proxy
HEALTHCHECK --interval=5s --timeout=3s --start-period=2s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
