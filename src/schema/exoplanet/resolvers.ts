import { MongoClient, ObjectId } from 'mongodb';

const MONGO_URL = 'mongodb://database:27017';

export const resolvers = {
  Query: {
    suitablePlanets: async (_, { page, page_size  }, { dataSources }) => {
      let suitables = [];
      const planets =  await dataSources.ArcsecondAPI.getExoPlanets(page, page_size);
      planets.map((item) => {
        if (
            item.mass !== null &&
            item.mass.unit === 'M_jup' &&
            item.mass.value > 25
        ) {
          suitables.push(item);
        }
      });
      return suitables;
    },
  },
  Mutation: {
    installStation: async (root, args) => {
      const res = await MongoClient.connect(MONGO_URL, ({
        useUnifiedTopology: true,
      }), (err, client) => {
        if (err) throw err;
        const db = client.db('exoplanets');
        const stations = db.collection('stations');
        return stations.insertOne({ args }, (err, res) => {
          if (err) throw err;
          client.close();
          return res;
        });
      });
      return res;
    },
  },
}
