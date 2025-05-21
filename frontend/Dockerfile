FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json vite.config.ts tsconfig*.json ./
RUN npm ci

COPY index.html ./
COPY src ./src

EXPOSE 5173 

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
