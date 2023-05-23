import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Country from "../entity/Country";
import countryService from "../services/countryService";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    return await countryService.getAll();
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string
  ): Promise<Country> {
    return await countryService.create(code, name, emoji);
  }

  @Query(() => Country, { nullable: true })
  async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    const country = await countryService.getByCode(code);
    return country;
  }

  @Query(() => [Country])
  async getCountriesByContinentCode(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return await countryService.getByContinentCode(continentCode);
  }

  @Mutation(() => Country)
  async createCountryWithContinent(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continentCode") continentCode: string
  ): Promise<Country> {
    return await countryService.createContCountry(
      code,
      name,
      emoji,
      continentCode
    );
  }
}
