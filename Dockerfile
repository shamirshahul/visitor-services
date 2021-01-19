FROM node:14
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npx typeorm migration:run
EXPOSE 3000
CMD ["node", "dist/index.js"]
