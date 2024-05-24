### STAGE 1: Build ###
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run generate-qa --fail-on-error
# RUN npm prune --production

### STAGE 2: NGINX ###
FROM nginx:stable-alpine
# RUN rm /usr/share/nginx/html/index.html
COPY --from=build /app/.output/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
