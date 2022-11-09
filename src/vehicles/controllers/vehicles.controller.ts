import { Controller, Get, Param } from '@nestjs/common';
import { VehicleDTO } from '../dtos/vehicle.dto';
import { VehiclesService } from '../services/vehicles.service';
import { ColorParamValidator } from '../dtos/getByColor.dto';

@Controller('/vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get('/byColor/:color')
  getCarByColor(@Param() param : ColorParamValidator) : Promise<VehicleDTO[]>{
    return this.vehiclesService.getByColor(param.color.toUpperCase());
  }

}


