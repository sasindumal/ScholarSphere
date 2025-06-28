# Build stage
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

CMD ["npm", "start"]
