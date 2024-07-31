FROM node:20-alpine AS FRONTEND_HUB_UI_BUILDER
ARG FRONT_HUB_UI_APP_DIR
ARG FRONT_HUB_UI_APP_ENV

WORKDIR ${FRONT_HUB_UI_APP_DIR}
ENV NODE_ENV=${FRONT_HUB_UI_APP_ENV}
RUN npm install -g @angular/cli
COPY package*.json ./
RUN node --max-old-space-size=8000 $(which npm) i --loglevel verbose

COPY . ./
RUN npm run lint
RUN npm run build --loglevel verbose

CMD ["npm", "run", "serve:ssr:frontend"]
EXPOSE 4000
