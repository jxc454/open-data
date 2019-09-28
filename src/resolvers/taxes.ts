import 'reflect-metadata';
import {Mutation, Query, Resolver} from "type-graphql";
import {makeTaxes, Taxes} from "../entities/taxes.entity";
import {readTaxes, validateTaxes} from "../taxes/taxes_lib";
import {remove} from 'lodash';
import {getConnection} from "typeorm";

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
        // const taxes = [];
        // await Promise.all(taxes.map(d => d.save()));

        return 'saved all!';
    }

    @Mutation(() => String)
    public async collectTaxes(): Promise<string> {
        // get taxes, validate taxes
        const taxesRaw = readTaxes();
        validateTaxes(taxesRaw);
        let validatedTaxes = taxesRaw.data;

        let counter = 0;
        let total = 0;

        while (validatedTaxes.length) {
            const writeMe = remove(validatedTaxes, (_, index) => index < 500);
            console.log('counter ' + counter);
            total += writeMe.length;

            await getConnection('default').manager.save(makeTaxes.create(writeMe))
                .then(_ => console.log(`wrote ${writeMe.length} (${++counter})`));
        }
        return `done! wrote ${total}`;
    }
}