"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousesController = void 0;
const common_1 = require("@nestjs/common");
const houses_service_1 = require("./houses.service");
let HousesController = class HousesController {
    constructor(housesService) {
        this.housesService = housesService;
    }
    async findAll() {
        return this.housesService.findAll();
    }
    async findById(id) {
        return this.housesService.findById(id);
    }
    async searchHouses(searchParams) {
        const { minPrice, maxPrice, minBedrooms, maxBedrooms, minBathrooms, maxBathrooms, features_balcony, features_basement, features_climatizer, features_dishwasher, features_fitness, features_office, features_shop, description, type_building, type_apartment, type_office, type_shop, type_house, } = searchParams;
        const query = {};
        if (description) {
            query.name = { $regex: description, $options: 'i' };
        }
        if (minPrice) {
            query.price = { $gte: minPrice };
        }
        if (maxPrice) {
            if (!query.price) {
                query.price = { $lt: maxPrice };
            }
            else {
                query.price = Object.assign(Object.assign({}, query.price), { $lt: maxPrice });
            }
        }
        if (minBedrooms) {
            query.bedrooms = { $gte: minBedrooms };
        }
        if (maxBedrooms) {
            if (!query.bedrooms) {
                query.bedrooms = { $lt: maxBedrooms };
            }
            else {
                query.bedrooms = Object.assign(Object.assign({}, query.bedrooms), { $lt: maxBedrooms });
            }
        }
        if (minBathrooms) {
            query.bathrooms = { $gte: minBathrooms };
        }
        if (maxBathrooms) {
            if (!query.bathrooms) {
                query.bathrooms = { $lt: maxBathrooms };
            }
            else {
                query.bathrooms = Object.assign(Object.assign({}, query.bathrooms), { $lt: maxBathrooms });
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
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "searchHouses", null);
HousesController = __decorate([
    (0, common_1.Controller)('houses'),
    __metadata("design:paramtypes", [houses_service_1.HousesService])
], HousesController);
exports.HousesController = HousesController;
//# sourceMappingURL=houses.controller.js.map