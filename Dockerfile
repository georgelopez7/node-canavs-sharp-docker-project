FROM node:20-alpine

RUN apk add --no-cache \
    build-base \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev \
    freetype-dev \
    fontconfig \
    ttf-dejavu \
    ttf-freefont

WORKDIR /app

COPY package*.json ./

RUN npm install --build-from-source

COPY . .

RUN npm run build

CMD ["node", "dist/app.js"]
