FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://vaishnavin:vaishu@zomato-master.narwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=278242909705-5vhnff85bc31eueuvl60h3ik54ef9er9.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV AWS_S3_ACCESS_KEY=AKIA3NOSMH2TWKK5AS7J
ENV AWS_S3_SECRET_KEY=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
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build

CMD ["npm", "run", "start"]