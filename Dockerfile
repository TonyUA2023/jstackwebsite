# Stage 1: Build
FROM node:22.14.0-slim AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json .npmrc ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the production bundle
RUN npm run build

# Stage 2: Serve with lightweight static server
FROM node:22.14.0-slim AS runner

WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve@14

# Copy only the built output
COPY --from=builder /app/dist ./dist

# Expose the port Coolify will use
EXPOSE 3000

# Serve the static build on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
