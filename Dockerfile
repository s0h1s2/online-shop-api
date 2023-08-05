FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN apk update && apk add bash
COPY . .
EXPOSE 5000
CMD ["/bin/bash","start.sh"]