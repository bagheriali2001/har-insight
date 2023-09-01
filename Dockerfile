FROM node:18.14.2
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
ENV TZ=Asia/Tehran
RUN yarn run build
CMD [ "yarn", "run", "preview"]