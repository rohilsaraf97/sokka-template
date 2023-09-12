FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
RUN chown -R node:node /app
COPY package.json .
RUN npm install
USER node
COPY . .
CMD ["npm", "run", "start"]
