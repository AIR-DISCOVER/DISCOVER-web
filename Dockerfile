FROM node:lts-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build

# Stage - Production
FROM nginx:mainline-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]