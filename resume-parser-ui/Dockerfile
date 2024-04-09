# Step 1: Use the official Node.js image as the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Install serve to serve the build directory
RUN npm install -g serve

# Step 8: Define the network port that this container will listen on at runtime
EXPOSE 3000

# Step 9: Define the command to run your app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
