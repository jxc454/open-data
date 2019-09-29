import 'reflect-metadata'
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { makeTaxes, Taxes } from '../entities/taxes.entity'
import { readTaxes, validateTaxes } from '../taxes/taxes_lib'
import { remove } from 'lodash'
import { getConnection } from 'typeorm'
import { Min } from 'class-validator'

@InputType()
class GetTaxesInput {
    @Field()
    @Min(1)
    public take: number

    @Field()
    @Min(0)
    public skip: number
}

@Resolver(() => Taxes)
export default class TaxesResolver {
    @Query(() => [Taxes!]!)
    public async getTaxes(@Arg('input') { take, skip }: GetTaxesInput): Promise<
        Taxes[]
    > {
        return await Taxes.find({ take, skip })
    }

    @Query(() => [Taxes!]!)
    public async getTaxesById(@Arg('id') id: string): Promise<Taxes[]> {
        return Taxes.findByIds([id])
    }

    // TODO how to get a valid argument here?
    @Mutation(() => String)
    public async writeTaxes(): // @Arg('data1') data1: Array<object>
    Promise<string> {
        // const taxes = [];
        // await Promise.all(taxes.map(d => d.save()));

        return 'saved all!'
    }

    @Mutation(() => String)
    public async collectTaxes(): Promise<string> {
        // get taxes, validate taxes
        const taxesRaw = readTaxes()
        validateTaxes(taxesRaw)
        let validatedTaxes = taxesRaw.data

        let counter = 0
        let total = 0

        while (validatedTaxes.length) {
            const writeMe = remove(validatedTaxes, (_, index) => index < 500)
            console.log('counter ' + counter)
            total += writeMe.length

            await getConnection('default')
                .manager.save(makeTaxes.create(writeMe))
                .then(_ =>
                    console.log(`wrote ${writeMe.length} (${++counter})`)
                )
        }
        return `done! wrote ${total}`
    }
}
