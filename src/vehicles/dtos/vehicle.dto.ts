import { Vehicle } from '../models/vehicle.model';

export class VehicleDTO {
  plate: string;
  manufacturer: string;

  static fromModel(vehicle: Vehicle): VehicleDTO {
    return {
      plate: vehicle.id,
      manufacturer: vehicle.manufacturer,
    };
  }
}

