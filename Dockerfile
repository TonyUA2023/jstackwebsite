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

CMD ["nginx", "-g", "daemon off;"]
