## mxa-tech-interview
See Google Cloud Run in action! 
https://tech-interview-krrqfzikna-no.a.run.app/vehicles/byColor/YELLOW

This repo contains a basic NestJS app to be used as base for our tech interview. Details about what is (and what is not) expected, delivery and more can be found on [this site](https://alpine-pig-c18.notion.site/mxa-tech-interview-91da450d829b45cdaf5f4d1b7d06f34b).

### Getting started
1. Install [NodeJS](https://nodejs.dev/en/), [NPM](https://www.npmjs.com) and [Docker](https://www.docker.com)
2. Install dependencies of the project
```
cd mxa-tech-interview
npm install
```
3. Start the app with
```
npm run start:dev
```

### Building the Docker image
```
docker build -t tech-interview-nest .
docker run -p3000:3000 tech-interview-nest
```"# mxm-tech-interview" 
