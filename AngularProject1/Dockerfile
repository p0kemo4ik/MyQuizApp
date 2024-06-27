FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
RUN npm install -g @angular/cli
RUN npm install  @angular-devkit/build-angular --unsafe
USER node
CMD ng serve --host 0.0.0.0