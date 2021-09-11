const { gql } = require("apollo-server-express");

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
    #   # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    #   me: User
    #   # user: [User]
    #   # score(user: String!): [Score]
  }
  type Mutation {

    createScore(user: String!): User
    updateScore(user: String!): User
    login(email: String!, password: String!): Auth

    addUser(username: String!, password: String!): Auth
    # createScore(user1: String!, user2: String!): Score
    login(username: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
