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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const typeorm_2 = require("typeorm");
let Taxes = class Taxes extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "sid", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "id", void 0);
__decorate([
    typeorm_2.Column({ type: 'number' }),
    __metadata("design:type", Number)
], Taxes.prototype, "position", void 0);
__decorate([
    typeorm_2.Column({ type: 'timestamp', name: 'createdAt' }),
    __metadata("design:type", Date)
], Taxes.prototype, "created_at", void 0);
__decorate([
    typeorm_2.Column({ type: 'timestamp', name: 'createdMeta' }),
    __metadata("design:type", Date)
], Taxes.prototype, "created_meta", void 0);
__decorate([
    typeorm_2.Column({ type: 'timestamp', name: 'updatedAt' }),
    __metadata("design:type", Date)
], Taxes.prototype, "updated_at", void 0);
__decorate([
    typeorm_2.Column({ type: 'timestamp', name: 'updatedMeta' }),
    __metadata("design:type", Date)
], Taxes.prototype, "updated_meta", void 0);
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "meta", void 0);
__decorate([
    typeorm_2.Column({ type: 'text', name: 'propertyId' }),
    __metadata("design:type", String)
], Taxes.prototype, "property_id", void 0);
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "block", void 0);
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "lot", void 0);
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "ward", void 0);
__decorate([
    typeorm_2.Column({ type: 'text' }),
    __metadata("design:type", String)
], Taxes.prototype, "sect", void 0);
__decorate([
    typeorm_2.Column({ type: 'text', name: 'propertyAddress' }),
    __metadata("design:type", String)
], Taxes.prototype, "property_address", void 0);
__decorate([
    typeorm_2.Column({ type: 'text', name: 'lotSize' }),
    __metadata("design:type", String)
], Taxes.prototype, "lot_size", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    typeorm_2.Column({ type: 'real', name: 'cityTax' }),
    __metadata("design:type", Number)
], Taxes.prototype, "city_tax", void 0);
__decorate([
    typeorm_2.Column({ type: 'real', name: 'stateTax' }),
    __metadata("design:type", Number)
], Taxes.prototype, "state_tax", void 0);
__decorate([
    typeorm_2.Column({ type: 'text', name: 'resCode' }),
    __metadata("design:type", String)
], Taxes.prototype, "res_code", void 0);
__decorate([
    typeorm_2.Column({ type: 'real', name: 'amountDue' }),
    __metadata("design:type", Number)
], Taxes.prototype, "amount_due", void 0);
__decorate([
    typeorm_2.Column({ type: 'timestamp', name: 'asOfDate' }),
    __metadata("design:type", Date)
], Taxes.prototype, "as_of_date", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'neighborhoodId' }),
    __metadata("design:type", Number)
], Taxes.prototype, "neighborhood_id", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'policeDistrictId' }),
    __metadata("design:type", String)
], Taxes.prototype, "police_district_id", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'councilDistrictId' }),
    __metadata("design:type", String)
], Taxes.prototype, "council_district_id", void 0);
__decorate([
    typeorm_2.Column({ type: 'real', name: 'locationLat' }),
    __metadata("design:type", Number)
], Taxes.prototype, "location_lat", void 0);
__decorate([
    typeorm_2.Column({ type: 'real', name: 'locationLong' }),
    __metadata("design:type", Number)
], Taxes.prototype, "location_long", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'computedRegionA' }),
    __metadata("design:type", Number)
], Taxes.prototype, "computed_region_a", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'computedRegionB' }),
    __metadata("design:type", Number)
], Taxes.prototype, "computed_region_b", void 0);
__decorate([
    typeorm_2.Column({ type: 'integer', name: 'computedRegionC' }),
    __metadata("design:type", Number)
], Taxes.prototype, "computed_region_c", void 0);
Taxes = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'taxes' })
], Taxes);
exports.default = Taxes;
//# sourceMappingURL=taxes.entity.js.map