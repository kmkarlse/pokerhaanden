FROM node:18

WORKDIR /app

#Install deps
COPY package.json package-lock.json ./

#Copy soruce
COPY src ./src

EXPOSE 8000

CMD ["node", "src/index.js"]