FROM node:13-alpine

LABEL Maintainer="Hieupv <hieupv@codersvn.com>" \
  Description="Lightweight container for drone plugin on Alpine Linux."

ENTRYPOINT ["docker-entrypoint.sh"]

