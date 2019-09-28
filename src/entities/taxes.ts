import {BaseEntity, Entity} from 'typeorm';
import {ObjectType} from 'type-graphql';
import {Column} from "typeorm";

@ObjectType()
@Entity({ name: 'taxes' })
export default class Taxes extends BaseEntity {
    @Column({ type: 'text' })
    public sid: string;

    @Column({ type: 'text' })
    public id: string;

    @Column({ type: 'number' })
    public position: number;

    @Column({ type: 'timestamp', name: 'createdAt' })
    public created_at: Date;

    @Column({ type: 'timestamp', name: 'createdMeta' })
    public created_meta: Date;

    @Column({ type: 'timestamp', name: 'updatedAt' })
    public updated_at: Date;

    @Column({ type: 'timestamp', name: 'updatedMeta' })
    public updated_meta: Date;

    @Column({ type: 'text' })
    public meta: string;

    @Column({ type: 'text', name: 'propertyId' })
    public property_id: string;

    @Column({ type: 'text' })
    public block: string;

    @Column({ type: 'text' })
    public lot: string;

    @Column({ type: 'text' })
    public ward: string;

    @Column({ type: 'text' })
    public sect: string;

    @Column({ type: 'text', name: 'propertyAddress' })
    public property_address: string;

    @Column({ type: 'text', name: 'lotSize' })
    public lot_size: string;

    @Column({ type: 'real', name: 'cityTax' })
    public city_tax: number;

    @Column({ type: 'real', name: 'stateTax' })
    state_tax : number;

    @Column({ type: 'text', name: 'resCode' })
    res_code: string;

    @Column({ type: 'real', name: 'amountDue' })
    amount_due : number;

    @Column({ type: 'timestamp', name: 'asOfDate' })
    as_of_date: Date;

    @Column({ type: 'integer', name: 'neighborhoodId' })
    neighborhood_id: number;

    @Column({ type: 'integer', name: 'policeDistrictId' })
    police_district_id: string;

    @Column({ type: 'integer', name: 'councilDistrictId' })
    council_district_id: string;

    @Column({ type: 'real', name: 'locationLat' })
    location_lat : number;

    @Column({ type: 'real', name: 'locationLong' })
    location_long : number;

    @Column({ type: 'integer', name: 'computedRegionA' })
    computed_region_a : number;

    @Column({ type: 'integer', name: 'computedRegionB' })
    computed_region_b : number;

    @Column({ type: 'integer', name: 'computedRegionC' })
    computed_region_c : number;
}