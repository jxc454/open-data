import {Args, Arg, Mutation, Resolver} from "type-graphql";
import Taxes from "../entities/taxes.entity";
import 'reflect-metadata';

@Resolver(() => Taxes)
export default class TaxesResolver {
    @Mutation()
    public async writeTaxes(
        @Arg('data') data: Array<any>,
    ): Promise<void> {
        const tax = Taxes.create({
            sid: data[0],
            id: data[1],
            position: data[2],
            createdAt: data[3],
            createdMeta: data[4],
            updatedAt: data[5],
            updatedMeta: data[6],
            meta: data[7],
            propertyId: data[8],
            block: data[9],
            lot: data[10],
            ward: data[11],
            sect: data[12],
            propertyAddress: data[13],
            lotSize: data[14],
            cityTax: data[15],
            stateTax: data[16],
            resCode: data[17],
            amountDue: data[18],
            asOfDate: data[19],
            neighborhoodId: data[20],
            policeDistrictId: data[21],
            councilDistrictId: data[22],
            locationLat: data[23],
            locationLong: data[24],
            computedRegionA: data[25],
            computedRegionB: data[26],
            computedRegionC: data[27]
        });

        await tax.save();
    }
}