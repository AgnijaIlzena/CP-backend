import Country from "../entity/Country";
import Continent from "../entity/Continent";
import { dataSource } from "../tools/utils";
import { Repository } from "typeorm";

const countryRepository: Repository<Country> =
  dataSource.getRepository(Country);
const continentRepository: Repository<Continent> =
  dataSource.getRepository(Continent);

export default {
  /**
   * Get all countries from db.
   * @returns continents array
   */
  getAll: async (): Promise<Country[]> => {
    return await countryRepository.find();
  },

  /**
   * Create a new country
   * @param code country param code
   * @param name country param name
   * @param emoji country param emoji
   * @returns the created country
   */
  create: async (
    code: string,
    name: string,
    emoji: string
  ): Promise<Country> => {
    const newCountry = new Country();
    newCountry.code = code;
    newCountry.name = name;
    newCountry.emoji = emoji;
    return await countryRepository.save(newCountry);
  },

  /**
   * Get a country by code
   * @param code the country code
   * @returns The country with matching code or null if not found
   */
  getByCode: async (code: string): Promise<Country | null> => {
    const country = await countryRepository.findOneBy({ code });
    return country || null;
  },

  /**
   *
   */
  getByContinentCode: async (continentCode: string): Promise<Country[]> => {
    return await countryRepository.find({
      relations: ["continent"],
      where: {
        continent: {
          code: continentCode,
        },
      },
    });
  },

  /**
   * Create a new country and associate it with a continent
   */
  createContCountry: async (
    code: string,
    name: string,
    emoji: string,
    continentCode: string
  ): Promise<Country> => {
    const country = new Country();
    country.code = code;
    country.name = name;
    country.emoji = emoji;

    const continent = await continentRepository.findOneBy({
      code: continentCode,
    });
    if (!continent) {
      throw new Error(`Continent with code ${continentCode} not found`);
    }

    country.continent = continent;
    return await countryRepository.save(country);
  },
};
