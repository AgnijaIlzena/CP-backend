import { DataSource } from "typeorm";
import Country from "../entity/Country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./country.sqlite",
  synchronize: true,
  entities: [Country],
});
