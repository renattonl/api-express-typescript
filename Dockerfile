FROM node:14

EXPOSE 3000

RUN npm install npm@latest -g

WORKDIR /home/node/app

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD ["npm","run","start"]