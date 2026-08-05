FROM node:24

ARG API_URL
ARG API_PORT

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR /${APP_DIR}

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN echo "API_URL=$API_URL\nAPI_PORT=$API_PORT" > .env

EXPOSE 80

CMD ["npm", "start"]
