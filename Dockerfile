# -----------------------------
# 🚀 BUILD STAGE
# -----------------------------
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm ci

# Copy rest of the code
COPY . .

# Build static site
RUN npm run build

# -----------------------------
# 🌐 DEPLOY STAGE
# -----------------------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# ✅ Correct folder: "out" (not dist)
COPY --from=build /app/out .

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
