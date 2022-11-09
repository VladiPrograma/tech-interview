import { Global } from '@nestjs/common'

@Global()
export class AppConfigService {
  constructor() {}

  get PORT(): string {
    return process.env.PORT
   }

   get REALTIME_URL(): string {
    return process.env.REALTIME_DB_URL
   }
   get REALTIME_VEHICLES(): string {
    return process.env.REALTIME_COLLECTION_VEHICLES;
   }

   get FIREBASE_SERVICE_ACCOUNT(): string {
      return process.env.FIREBASE_SERVICE_ACCOUNT;
   }
   
   get FIREBASE_URL():string{
    return process.env.FIREBASE_URL
   }
}

export  const appConfig : AppConfigService = new AppConfigService();