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
};
