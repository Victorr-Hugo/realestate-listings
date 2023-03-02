import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesModule } from './houses/houses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './houses/libs/config';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), HousesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
