# Use the official Node.js image as a base
FROM node:18.16.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Nest.js application is listening on (default is 3000)
EXPOSE 3000

# Start your Nest.js application
CMD ["npm", "start"]
