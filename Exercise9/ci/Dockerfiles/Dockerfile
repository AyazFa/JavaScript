FROM node:alpine as build-stage

WORKDIR /home/node

COPY ../package*.json ./
RUN npm ci

COPY ../../tsconfig.json ./
COPY ../../src ./src

RUN npm run build

FROM node:alpine as run-stage

USER node
WORKDIR /home/node

RUN chown node:node ./
COPY --from=build-stage --chown=node:node /home/node/package*.json ./
COPY --from=build-stage --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=build-stage --chown=node:node /home/node/dist/ ./dist/

CMD [ "node", "./dist/main.js" ]