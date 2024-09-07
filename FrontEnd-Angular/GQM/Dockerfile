FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm i

ENTRYPOINT ["/usr/src/app/startup.sh"]