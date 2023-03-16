#Write a dockerfile to build a react app
FROM node:current-alpine as bulder
WORKDIR /src
RUN yarn set version 3.0.0
COPY package*.json .
COPY yarn.lock .yarnrc.yml ./
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN yarn install
COPY . .
RUN yarn build

#code to run nginx server
FROM nginx
EXPOSE 80
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=bulder /src/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

