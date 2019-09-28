import 'reflect-metadata';
import {Args, Arg, Mutation, Resolver} from "type-graphql";
import Taxes from "../entities/taxes.entity";
import {Query} from "type-graphql";
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => Taxes)
export default class TaxesResolver {

    @Query(() => [Taxes!]!)
    public async getTaxes(): Promise<Taxes[]> {
        return await Taxes.find();
    }

    @Mutation(() => String)
    public async writeTaxes(
        // @Arg('data1') data1: Array<object>
    ): Promise<string> {
        const data = [];
        const tax = Taxes.create({
            // sid: data[0],
            id: uuidv4(), //data[1],
            // position: data[2],
            // createdAt: data[3],
            // createdMeta: data[4],
            // updatedAt: data[5],
            // updatedMeta: data[6],
            // meta: data[7],
            // propertyId: data[8],
            // block: data[9],
            // lot: data[10],
            // ward: data[11],
            // sect: data[12],
            // propertyAddress: data[13],
            // lotSize: data[14],
            cityTax: 678.67 // data[15]
            // stateTax: data[16],
            // resCode: data[17],
            // amountDue: data[18],
            // asOfDate: data[19],
            // neighborhoodId: data[20],
            // policeDistrictId: data[21],
            // councilDistrictId: data[22],
            // locationLat: data[23],
            // locationLong: data[24],
            // computedRegionA: data[25],
            // computedRegionB: data[26],
            // computedRegionC: data[27]
        });

        await tax.save();

        return 'saved!';
    }
}