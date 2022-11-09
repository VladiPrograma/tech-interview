import { Module } from '@nestjs/common';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles.controller';
import { VehicleRepository } from './repositories/vehicles.repository';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [HttpModule.register({
    timeout: 5000
  })],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleRepository]
})
export class VehiclesModule {}
