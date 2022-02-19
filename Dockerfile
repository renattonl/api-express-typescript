FROM node:14

EXPOSE 5000

WORKDIR /src

RUN npm install npm@lastest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "src/index.js"]