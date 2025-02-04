FROM node:22.1

WORKDIR /app

COPY react-crash-course/dist ./dist
COPY nodeJS-backend ./

RUN npm install

COPY . .

CMD ["node", "./nodeJS-backend/server.js"]