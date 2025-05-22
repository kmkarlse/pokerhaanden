Pokerhånden

Frontend
- React / Typescript

Backend 
- Node.js / Express / Typescript

DB
- Prisma


.env inkludert i repo pga. det ikke er noe farlig der :) 

docker compose up -d --build

docker exec -it pokerhaanden-backend-1 npx prisma studio --schema=./prisma/schema.prisma
