FROM node:18.16.1

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

