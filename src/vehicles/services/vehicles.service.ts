import { Injectable } from '@nestjs/common';
import { Vehicle } from '../models/vehicle.model';
import { VehicleDTO } from '../dtos/vehicle.dto';
import { VehicleRepository } from '../repositories/vehicles.repository';

@Injectable()
export class VehiclesService {
    constructor(private readonly vehiclesRepository: VehicleRepository) {}

    getByColor(color: string): Promise<VehicleDTO[]> {
        return this.vehiclesRepository.getVehicles()
        .then((jsonData) => {
            const vehicles : Vehicle[] = Vehicle.JsonToList(jsonData);
            return vehicles
                  .filter((vehicle) => vehicle.color.normalize() == color)
                  .map((vehicle) => VehicleDTO.fromModel(vehicle));
            }
        )
    }
}


