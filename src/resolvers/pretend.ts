import {Query, Resolver} from "type-graphql";
import 'reflect-metadata';

@Resolver()
export default class PretendResolver {
    @Query(() => String)
    async pretend() {
        return 'hello from pretend resolver.';
    }
}