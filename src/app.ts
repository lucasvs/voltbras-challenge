const { ApolloServer, gql, IResolverObject } = require('apollo-server');
import { ArcsecondAPI } from './schema/exoplanet/dataSource';
import schema  from './schema';

const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      ArcsecondAPI: new ArcsecondAPI(),
    };
  },
})
const PORT = process.env.APOLLO_PORT;

export function start() {
  server.listen({ port: PORT }).then(() => {
    console.log(`Server ready at ${server.graphqlPath}`);
  });
}
