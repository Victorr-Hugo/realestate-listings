import { HousesService } from './houses.service';
export declare class HousesController {
    private readonly housesService;
    constructor(housesService: HousesService);
    findAll(): Promise<import("./schemas/house.schema").House[]>;
    findById(id: string): Promise<import("./schemas/house.schema").House>;
    searchHouses(searchParams: {
        minPrice: number;
        maxPrice: number;
        minBedrooms: number;
        maxBedrooms: number;
        minBathrooms: number;
        maxBathrooms: number;
        description: string;
        features_climatizer: boolean;
        features_dishwasher: boolean;
        features_balcony: boolean;
        features_fitness: boolean;
        features_office: boolean;
        features_shop: boolean;
        features_basement: boolean;
        type_building: boolean;
        type_apartment: boolean;
        type_office: boolean;
        type_shop: boolean;
        type_house: boolean;
    }): Promise<import("./schemas/house.schema").House[]>;
}
