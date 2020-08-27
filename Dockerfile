FROM node:13-alpine

ADD script.sh /bin/

RUN chmod +x /bin/script.sh

COPY package*.json yarn*.lock ./

RUN yarn install --production=false --frozen-lockfile 

RUN mkdir -p dist && yarn build:prod

RUN rm -rf src && rm -rf node_modules

ENTRYPOINT /bin/script.sh
