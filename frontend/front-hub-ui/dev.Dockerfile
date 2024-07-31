FROM node:20 AS FRONTEND_HUB_UI_DEVELOPMENT_ENV
ARG FRONT_HUB_UI_APP_DIR
WORKDIR ${FRONT_HUB_UI_APP_DIR}
ARG FRONT_HUB_UI_ENV
ENV NODE_ENV=${FRONT_HUB_UI_ENV}
COPY package*.json ./
RUN npm install -g @angular/cli
RUN node --max-old-space-size=8000 $(which npm) i --loglevel verbose

COPY . .
RUN npm run lint
RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0", "--ssl", "--ssl-key", "ops/ssl/localhost.key", "--ssl-cert", "ops/ssl/localhost.crt"]
