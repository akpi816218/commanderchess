# Start the image with a node base image
FROM node:22

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public
COPY ./next.config.js ./next.config.js
COPY ./tailwind.config.ts ./tailwind.config.ts
COPY ./postcss.config.js ./postcss.config.js
COPY ./tsconfig.json ./tsconfig.json

# Clean-install and build the app
RUN npm run build

EXPOSE 3210

ENV PORT 3210

# Start the Next.js production server
CMD [ "npm", "start" ]