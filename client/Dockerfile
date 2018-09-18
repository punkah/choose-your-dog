FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . .
CMD npm run start