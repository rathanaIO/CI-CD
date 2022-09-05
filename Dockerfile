FROM node:16

WORKDIR /app

COPY . .
# Comment
RUN npm install

# Expose port of our app
EXPOSE 3000

CMD npm run start