import { Model } from 'mongoose';
import { House, HouseDocument } from './schemas/house.schema';
export declare class HousesService {
    private houseModel;
    constructor(houseModel: Model<HouseDocument>);
    findAll(): Promise<House[]>;
    findById(id: string): Promise<House>;
    find(query: any): Promise<House[]>;
}
