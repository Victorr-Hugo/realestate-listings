import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HouseDocument } from './schemas/house.schema';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get()
  async findAll() {
    return this.housesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.housesService.findById(id);
  }

  @Post('search')
  async searchHouses(
    @Body()
    searchParams: {
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
    },
  ) {
    const {
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      minBathrooms,
      maxBathrooms,
      features_balcony,
      features_basement,
      features_climatizer,
      features_dishwasher,
      features_fitness,
      features_office,
      features_shop,
      description,
      type_building,
      type_apartment,
      type_office,
      type_shop,
      type_house,
    } = searchParams;
    const query: any = {};

    if (description) {
      query.name = { $regex: description, $options: 'i' };
    }

    if (minPrice) {
      query.price = { $gte: minPrice };
    }
    if (maxPrice) {
      if (!query.price) {
        query.price = { $lt: maxPrice };
      } else {
        query.price = { ...query.price, $lt: maxPrice };
      }
    }
    if (minBedrooms) {
      query.bedrooms = { $gte: minBedrooms };
    }
    if (maxBedrooms) {
      if (!query.bedrooms) {
        query.bedrooms = { $lt: maxBedrooms };
      } else {
        query.bedrooms = {
          ...query.bedrooms,
          $lt: maxBedrooms,
        };
      }
    }
    if (minBathrooms) {
      query.bathrooms = { $gte: minBathrooms };
    }
    if (maxBathrooms) {
      if (!query.bathrooms) {
        query.bathrooms = { $lt: maxBathrooms };
      } else {
        query.bathrooms = {
          ...query.bathrooms,
          $lt: maxBathrooms,
        };
      }
    }

    if (features_climatizer) {
      query['features'] = {
        $elemMatch: { $eq: 'central air conditioner / heating' },
      };
    }
    if (features_dishwasher) {
      query['features'] = {
        $elemMatch: { $eq: 'dishwasher' },
      };
    }

    if (features_balcony) {
      query['features'] = {
        $elemMatch: { $eq: 'balcony' },
      };
    }

    if (features_fitness) {
      query['features'] = {
        $elemMatch: { $eq: 'fitness' },
      };
    }

    if (features_office) {
      query['features'] = {
        $elemMatch: { $eq: 'office' },
      };
    }

    if (features_shop) {
      query['features'] = {
        $elemMatch: { $eq: 'shop' },
      };
    }

    if (features_basement) {
      query['features'] = {
        $elemMatch: { $eq: 'basement' },
      };
    }

    if (type_building) {
      query['type_building'] = { $eq: 'building' };
    }

    if (type_apartment) {
      query['type_apartment'] = { $eq: 'apartment' };
    }

    if (type_office) {
      query['type_office'] = { $eq: 'office' };
    }

    if (type_shop) {
      query['type_shop'] = { $eq: 'shop' };
    }

    if (type_house) {
      query['type_house'] = { $eq: 'house' };
    }
    console.log(query);
    const houses = await this.housesService.find(query);
    return houses;
  }
}
