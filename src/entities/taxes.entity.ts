import {BaseEntity, Entity, PrimaryColumn} from 'typeorm';
import {Field, ID, ObjectType, Float} from 'type-graphql';
import {Column} from "typeorm";

@ObjectType()
@Entity({ name: 'taxes' })
export default class Taxes extends BaseEntity {
    // @Column({ type: 'text' })
    // public sid: string;

    @Field(() => ID)
    @PrimaryColumn({ type: 'text' })
    public id: string;
    //
    // @Column({ type: 'number' })
    // public position: number;
    //
    // @Column({ type: 'timestamp', name: 'created_at' })
    // public createdAt: Date;
    //
    // @Column({ type: 'timestamp', name: 'created_meta' })
    // public createdMeta: Date;
    //
    // @Column({ type: 'timestamp', name: 'updated_at' })
    // public updatedAt: Date;
    //
    // @Column({ type: 'timestamp', name: 'updated_meta' })
    // public updatedMeta: Date;
    //
    // @Column({ type: 'text' })
    // public meta: string;
    //
    // @Column({ type: 'text', name: 'property_id' })
    // public propertyId: string;
    //
    // @Column({ type: 'text' })
    // public block: string;
    //
    // @Column({ type: 'text' })
    // public lot: string;
    //
    // @Column({ type: 'text' })
    // public ward: string;
    //
    // @Column({ type: 'text' })
    // public sect: string;
    //
    // @Column({ type: 'text', name: 'property_address' })
    // public propertyAddress: string;
    //
    // @Column({ type: 'text', name: 'lot_size' })
    // public lotSize: string;
    //
    @Field(() => Float)
    @Column({ type: 'real', name: 'city_tax' })
    public cityTax: number;
    //
    // @Column({ type: 'real', name: 'state_tax' })
    // public stateTax : number;
    //
    // @Column({ type: 'text', name: 'res_code' })
    // public resCode: string;
    //
    // @Column({ type: 'real', name: 'amount_due' })
    // public amountDue : number;
    //
    // @Column({ type: 'timestamp', name: 'as_of_date' })
    // public asOfDate: Date;
    //
    // @Column({ type: 'integer', name: 'neighborhood_id' })
    // public neighborhoodId: number;
    //
    // @Column({ type: 'integer', name: 'police_district_id' })
    // public policeDistrictId: string;
    //
    // @Column({ type: 'integer', name: 'council_district_id' })
    // public councilDistrictId: string;
    //
    // @Column({ type: 'real', name: 'location_lat' })
    // public locationLat : number;
    //
    // @Column({ type: 'real', name: 'location_long' })
    // public locationLong : number;
    //
    // @Column({ type: 'integer', name: 'computed_region_a' })
    // public computedRegionA : number;
    //
    // @Column({ type: 'integer', name: 'computed_region_b' })
    // public computedRegionB : number;
    //
    // @Column({ type: 'integer', name: 'computed_region_c' })
    // public computedRegionC : number;
}
