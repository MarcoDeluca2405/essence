FROM node:20

WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm install

COPY . .

ENV NG_CLI_ANALYTICS false

EXPOSE 4200

CMD ["npm","run","start"]