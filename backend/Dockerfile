# Builder stage
FROM node:22-alpine AS builder

WORKDIR /app
RUN apk update && apk add --no-cache openssl3

COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate

# Production stage
FROM node:22-alpine AS production
WORKDIR /app
RUN apk update && apk add --no-cache openssl3
COPY --from=builder /app /app
EXPOSE 5001
CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]