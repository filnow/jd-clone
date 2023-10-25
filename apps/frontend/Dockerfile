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

# Expose the port that Nx's development server uses (default is 4200)
EXPOSE 4200

# Start your Angular app using Nx's development server
CMD ["npm", "start"]
