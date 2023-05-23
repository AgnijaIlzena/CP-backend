import { Field, InputType } from "type-graphql";

@InputType()
export class ContinentInput {
  @Field({ nullable: true })
  name?: string;
}
