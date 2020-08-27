FROM node:13-alpine

ADD script.sh /bin/

RUN chmod +x /bin/script.sh

COPY package*.json yarn*.lock ./

RUN yarn install --production=false --frozen-lockfile 

WORKDIR /app

RUN npm install -g typescript

COPY . .

RUN mkdir -p dist && ls && yarn build:prod

ENTRYPOINT /bin/script.sh
