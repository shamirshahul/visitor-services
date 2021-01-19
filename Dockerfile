FROM node:14
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
EXPOSE 3000
CMD /wait && node dist/index.js
