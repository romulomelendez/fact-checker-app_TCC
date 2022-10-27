FROM node:16

WORKDIR /usr/src/app

COPY . .    

RUN yarn

EXPOSE 5173

CMD [ "yarn", "dev" ]