import { DataSource } from "typeorm";
import Country from "../entity/Country";
import Continent from "../entity/Continent";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./country.sqlite",
  synchronize: true,
  entities: [Country, Continent],
});
