import Country from "../entity/Country";
import { dataSource } from "../tools/utils";
import { Repository } from "typeorm";

const countryRepository: Repository<Country> =
  dataSource.getRepository(Country);

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
};
