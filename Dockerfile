# 🚀 BUILD STAGE
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 🌐 DEPLOY STAGE
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# ✅ FIXED: Correct folder is /app/out
COPY --from=build /app/out .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
