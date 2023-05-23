import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import Country from "./Country";

@Entity()
@ObjectType()
export class Continent {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  code: string;

  @OneToMany(() => Country, (country) => country.continent)
  @Field(() => [Country])
  countries: Country[];
}

export default Continent;
