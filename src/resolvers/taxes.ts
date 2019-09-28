import {Args, Resolver} from "type-graphql";
import Taxes from "../entities/taxes.entity";

@Resolver(() => Taxes)
export default class TaxesResolver {
    public async taxes(
        @Args() { take, skip }
    ): Promise<Taxes> {
        return null
    }
}