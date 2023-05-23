import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import Continent from "./Continent";

@Entity()
@ObjectType()
export class Country {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @ManyToOne(() => Continent, (continent) => continent.countries)
  @Field(() => Continent)
  continent: Continent;
}

export default Country;
