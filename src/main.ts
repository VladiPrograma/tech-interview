import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import * as admin from 'firebase-admin'


import { appConfig } from './config/app.config.service';
import { initializeApp } from 'firebase-admin/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var serviceAccount = require(appConfig.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: appConfig.FIREBASE_URL
  });
  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(appConfig.PORT|| 3000);
}
bootstrap();


