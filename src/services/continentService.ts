import Continent from "../entity/Continent";
import { dataSource } from "../tools/utils";
import { Repository } from "typeorm";

const continentRepository: Repository<Continent> =
  dataSource.getRepository(Continent);

export default {
  /**
   * Get all continents from db.
   * @returns continents array
   */
  getAll: async (): Promise<Continent[]> => {
    return await continentRepository.find();
  },

  /**
   * Create a new continent
   * @param code continent param code
   * @param name continent param name
   * @returns the created continent
   */
  create: async (code: string, name: string): Promise<Continent> => {
    const newContinent = new Continent();
    newContinent.code = code;
    newContinent.name = name;
    return await continentRepository.save(newContinent);
  },
};
