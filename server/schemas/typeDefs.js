const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String
    scores: [Score]
  }
  type Score {
    _id: ID!
    score: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    #   user(userId: ID!): User

     score(user: String!): [Score]
  }
  type Mutation {
    addUser(username: String!, password: String!): Auth
    # createScore(user1: String!, user2: String!): Score
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
