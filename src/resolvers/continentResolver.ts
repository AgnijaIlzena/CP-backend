import { Resolver, Query, Mutation, Arg } from "type-graphql";
// import { CreateWineInput } from "../inputs/createWineInput";
import Continent from "../entity/Continent";
import continentService from "../services/continentService";

@Resolver(Continent)
export class ContinentResolver {
  @Query(() => [Continent])
  async getAllContinents(): Promise<Continent[]> {
    return await continentService.getAll();
  }
}
