# Use the Node.js base image
FROM node:16

# Create the application directory inside the container
WORKDIR  /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Expose the port the server listens on
EXPOSE 4000

# Command to run the application
CMD ["node", "server.js"]