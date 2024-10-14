FROM node


WORKDIR /app


COPY package*.json ./


RUN npm install --force


COPY . .


EXPOSE 3000


CMD ["npm", "run", "dev"]

# 1 - pour créer l'image
# docker build -t transport-frontend .


# 2 - pour conteneuriser a partir de l'image (et lui donner un nom)
#  docker run -p 3000:3000 -d --name transport-front-container transport-frontend
