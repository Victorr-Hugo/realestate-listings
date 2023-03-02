import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { House, HouseSchema } from './schemas/house.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),
  ],
  providers: [HousesService],
  controllers: [HousesController],
})
export class HousesModule {}
