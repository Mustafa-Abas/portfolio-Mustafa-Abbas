FROM node:18
WORKDIR /app

# Install dependencies (will use package-lock if present)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

ENV CHOKIDAR_USEPOLLING=true
EXPOSE 3000
CMD ["npm", "start"]
