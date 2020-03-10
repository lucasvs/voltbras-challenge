import { gql } from 'apollo-server';
import { typeDef as Exoplanet } from './exoplanet';

const scalars = gql`
  scalar Date
`
const query = gql`
  type Query {
    _empty: String
  }
`
const mutation = gql`
  type Mutation {
    _empty: String
  }
`

const GLOBAL = [scalars, query, mutation]

const typeDefs = [
  ...GLOBAL,
  Exoplanet,
]

export default typeDefs;
