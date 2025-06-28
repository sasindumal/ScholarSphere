# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install && npx prisma generate

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5001

# Start the server
CMD ["node", "server.js"] 