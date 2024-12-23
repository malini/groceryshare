# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy the rest of the application code
COPY . .
RUN npm install

# Expose the port the app will run on
EXPOSE 5173

# Define the command to run the app
CMD npm run dev
