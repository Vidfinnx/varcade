const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String
    scorePacman: [User]
    scoreRpg: [Score]
  }

  type Query {
    user: [User]
    scorePacman(user: String!): [User]
    scoreRpg(user: String!): [User]
  }

  type Mutation {
    createScore(user: String!): User
    updateScore(user: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;