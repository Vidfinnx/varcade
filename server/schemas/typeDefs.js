const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Score {
    _id: ID!
    score: Int!
  }

  type Query {
    user: [User]
    score(user: String!): [Score]
  }

  type Mutation {
    createScore(user1: String!, user2: String!): Score
  }
`;

module.exports = typeDefs;
