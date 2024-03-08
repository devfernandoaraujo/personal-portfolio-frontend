#Write a dockerfile to build a react app
FROM node:21-alpine3.18 as bulder
WORKDIR /src 
COPY package*.json ./ 
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install
COPY . .
RUN npm run build

#code to run nginx server
FROM nginx
EXPOSE 3000
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=bulder /src/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

