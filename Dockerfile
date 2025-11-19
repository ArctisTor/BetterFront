# Stage 1: Build the frontend
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy frontend folder into container
COPY BetterFront-start/BetterFront-React ./BetterFront-React

# Install and build frontend
RUN cd BetterFront-React && npm install && npm run build

# Copy backend folder into container
COPY BetterFront-start/BetterFront-NodeJS ./BetterFront-NodeJS

# npm install for NodeJS backend
RUN cd BetterFront-NodeJS && npm install

# Compile TypeScript backend to JavaScript
RUN cd BetterFront-NodeJS && npx tsc

# Set working directory to NodeJS backend
WORKDIR /app/BetterFront-NodeJS

# Expose backend port
EXPOSE 8443

# Run the backend server using local ts-node
CMD ["npx", "ts-node", "server.ts"]