FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY corsBypassServer.ts ./
COPY config.ts ./
COPY api ./

CMD ["npm", "run", "startProxyServer"]