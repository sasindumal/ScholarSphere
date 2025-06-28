# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Production stage
FROM node:22-alpine AS production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["serve", "-s", "build", "-l", "3000"]
