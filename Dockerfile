FROM node

WORKDIR /app

COPY package*.json .
RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]

