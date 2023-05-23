import { ApolloServer } from "apollo-server";
import { dataSource } from "./tools/utils";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/countryResolver";
import { ContinentResolver } from "./resolvers/continentResolver";

const port = 5002;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
  });
  const server = new ApolloServer({ schema });

  try {
    const { url }: { url: string } = await server.listen({ port });
    console.log(`Server ready at ${url}`);
  } catch (e) {
    console.error("Error starting the server");
  }
};

void start();
