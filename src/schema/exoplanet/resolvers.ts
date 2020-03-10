export const resolvers = {
  Query: {
    suitablePlanets: (_, { id }, { dataSources }) => {
      return dataSources.ArcsecondAPI.getExoPlanets();
    },
  },
}
