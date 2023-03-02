import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House, HouseDocument } from './schemas/house.schema';

@Injectable()
export class HousesService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async findAll(): Promise<House[]> {
    return this.houseModel.find().exec();
  }

  async findById(id: string): Promise<House> {
    return this.houseModel.findById(id).exec();
  }

  async find(query: any): Promise<House[]> {
    return this.houseModel.find(query).exec();
  }
}
