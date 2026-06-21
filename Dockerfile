FROM node:24.11.1

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/a376818/primer-servidor.git .

WORKDIR /app

RUN npm install

EXPOSE 4000

CMD ["node", "server/server.js"]