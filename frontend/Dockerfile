FROM node:18-alpine


WORKDIR /app

COPY package.json package-lock.json vite.config.ts tsconfig.json ./
RUN npm ci

COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]
