FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./ 
RUN npm ci

COPY prisma ./prisma
COPY src ./src

RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 8000
CMD ["npm", "run", "dev"]
