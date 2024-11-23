

import { ApolloServer } from "@apollo/server";
import { graphQLschema } from './schema/schema.js';
import { resolvers } from "./resolvers/resolvers.js";

export const graphQLApolloServer = () => {
  const server = new ApolloServer({
    typeDefs: graphQLschema,
    resolvers: resolvers
  });

  return server;
};
