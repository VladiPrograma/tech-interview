import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { appConfig } from 'src/config/app.config.service';


@Injectable()
export class VehicleRepository {
  async getVehicles(): Promise<any> {
    const ref = admin.database().ref(appConfig.REALTIME_VEHICLES);
    return (await ref.once("value")).toJSON()
  }
}
