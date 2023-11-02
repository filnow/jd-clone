FROM node:21.1.0

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY /apps/backend/prisma ./prisma
RUN npm install

COPY . .

RUN npx prisma generate
