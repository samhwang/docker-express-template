# Base image with maintainer label
FROM node:12.18.3-alpine3.12 as base
LABEL maintainer="Sam Huynh <samhwang2112.dev@gmail.com>"
WORKDIR /src/app

# Development image
FROM base as development
# Install Node modules
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install

COPY . .

EXPOSE 80
CMD ["yarn", "start"]

# Build for production
FROM development as build

RUN yarn build && \
    yarn cache clean

# Production image
FROM base as production

COPY --from=build /src/app/build build
COPY --from=build /src/app/node_modules node_modules

EXPOSE 80
CMD ["node", "build/index.js"]