# Base image

FROM node:18

#workdir inside container
WORKDIR /app

#copy package.json and package-lock.json
COPY package*.json ./

#install the dependiences
RUN npm install

#copy rest of the project 
COPY . .

#expose backend port
EXPOSE 5000

#run the app
# CMD ["npm", "start"]
CMD [ "node", "server.js" ]