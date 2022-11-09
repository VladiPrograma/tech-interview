import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EmployeesModule } from './employees/employees.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [EmployeesModule, VehiclesModule,
     ConfigModule.forRoot({
      isGlobal: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
