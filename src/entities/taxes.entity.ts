import 'reflect-metadata'
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm'
import { Field, ID, ObjectType, Float, Int, ArgsType } from 'type-graphql'
import { Column } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import isUUID = require('validator/lib/isUUID')

@ObjectType()
@ArgsType()
@Entity({ name: 'taxes' })
export class Taxes extends BaseEntity {
    @Field(() => String)
    @Column({ type: 'text' })
    public sid: string

    @Field(() => ID)
    @PrimaryColumn({ type: 'text' })
    public id: string

    @Field(() => Int)
    @Column({ type: 'smallint' })
    public position: number

    // @Field(() => Date)
    // @Column({ type: 'timestamp', name: 'created_at' })
    // public createdAt: Date;
    //
    // @Field(() => Date)
    // @Column({ type: 'timestamp', name: 'created_meta' })
    // public createdMeta: Date;
    //
    // @Field(() => Date)
    // @Column({ type: 'timestamp', name: 'updated_at' })
    // public updatedAt: Date;
    //
    // @Field(() => Date)
    // @Column({ type: 'timestamp', name: 'updated_meta' })
    // public updatedMeta: Date;

    @Field(() => String)
    @Column({ type: 'text' })
    public meta: string

    @Field(() => String)
    @Column({ type: 'text', name: 'property_id' })
    public propertyId: string

    @Field(() => String)
    @Column({ type: 'text' })
    public block: string

    @Field(() => String)
    @Column({ type: 'text' })
    public lot: string

    @Field(() => String)
    @Column({ type: 'text' })
    public ward: string

    @Field(() => String)
    @Column({ type: 'text' })
    public sect: string

    @Field(() => String)
    @Column({ type: 'text', name: 'property_address' })
    public propertyAddress: string

    @Field(() => String)
    @Column({ type: 'text', name: 'lot_size' })
    public lotSize: string

    @Field(() => Float)
    @Column({ type: 'real', name: 'city_tax' })
    public cityTax: number

    @Field(() => Float)
    @Column({ type: 'real', name: 'state_tax' })
    public stateTax: number

    @Field(() => Float)
    @Column({ type: 'text', name: 'res_code' })
    public resCode: string

    @Field(() => Float)
    @Column({ type: 'real', name: 'amount_due' })
    public amountDue: number

    // @Field(() => Date)
    // @Column({ type: 'timestamp', name: 'as_of_date' })
    // public asOfDate: Date;

    @Field(() => Int)
    @Column({ type: 'integer', name: 'neighborhood_id' })
    public neighborhoodId: number

    @Field(() => Int)
    @Column({ type: 'integer', name: 'police_district_id' })
    public policeDistrictId: number

    @Field(() => Int)
    @Column({ type: 'integer', name: 'council_district_id' })
    public councilDistrictId: number

    @Field(() => Float)
    @Column({ type: 'real', name: 'location_lat' })
    public locationLat: number

    @Field(() => Float)
    @Column({ type: 'real', name: 'location_long' })
    public locationLong: number

    @Field(() => Int)
    @Column({ type: 'integer', name: 'computed_region_a' })
    public computedRegionA: number

    @Field(() => Int)
    @Column({ type: 'integer', name: 'computed_region_b' })
    public computedRegionB: number

    @Field(() => Int)
    @Column({ type: 'integer', name: 'computed_region_c' })
    public computedRegionC: number
}

export let makeTaxes = {
    create(validatedOpenDataArray: Array<any>): Taxes[] {
        return validatedOpenDataArray.map(data => {
            let taxes = new Taxes()
            taxes.sid = data[0]
            taxes.id = isUUID(data[1]) ? data[1] : uuidv4()
            taxes.position = data[2]
            // taxes.createdAt = data[3];
            // taxes.createdMeta = data[4];
            // taxes.updatedAt = data[5];
            // taxes.updatedMeta = data[6];
            taxes.meta = data[7]
            taxes.propertyId = data[8]
            taxes.block = data[9]
            taxes.lot = data[10]
            taxes.ward = data[11]
            taxes.sect = data[12]
            taxes.propertyAddress = data[13]
            taxes.lotSize = data[14]
            taxes.cityTax = data[15]
            taxes.stateTax = data[16]
            taxes.resCode = data[17]
            taxes.amountDue = data[18]
            // taxes.asOfDate = data[19];
            taxes.neighborhoodId = 1 //data[20];
            taxes.policeDistrictId = 2 //data[21];
            taxes.councilDistrictId = 3 //data[22];
            taxes.locationLat = data[23] ? data[23][1] : null
            taxes.locationLong = data[23] ? data[23][2] : null
            taxes.computedRegionA = data[24]
            taxes.computedRegionB = data[25]
            taxes.computedRegionC = data[26]

            return taxes
        })
    },
}
