## Node Building Image
FROM node:16

# create app directory
WORKDIR /opt/api

# install app dependencies
COPY package*.json ./
COPY .sequelizerc ./
COPY .snyk ./


RUN touch winston.log.json

RUN npm cache clean --force

# Check environment and install dependencies
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --omit=dev; \
    else npm install; \
    fi

# Install sequelize globally
RUN npm install -g sequelize
RUN npm install -g sequelize-cli

# Bundle app source
COPY server/ .

#see https://docs.cloudfoundry.org/devguide/deploy-apps/push-docker.html
COPY docker/conf/passwd /etc/passwd

# expose port
EXPOSE 8080

# start app
CMD [ "npm", "migrate_start" ]