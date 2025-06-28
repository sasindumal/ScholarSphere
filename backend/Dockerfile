# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app
RUN apk update && apk add --no-cache openssl3

# Copy package files and install dependencies
COPY package*.json ./


# Copy backend source code
COPY . .

RUN npm install && npx prisma generate

# Expose backend port
EXPOSE 5001

# Start the server
CMD ["node", "server.js"] 