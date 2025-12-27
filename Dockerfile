# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Cache bust arg - changes when source files change, invalidating the build cache
ARG CACHE_BUST=default

# Build the frontend (cache bust ensures fresh build when sources change)
RUN echo "Cache bust: ${CACHE_BUST}" && npm run build

# Production stage
FROM node:22-alpine AS production

# Install nginx
RUN apk add --no-cache nginx

WORKDIR /app

# Copy package files for production dependencies
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the API server
COPY server.js ./

# Copy nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy built frontend assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose ports
EXPOSE 3000 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start both nginx and Node.js API
CMD ["/start.sh"]
