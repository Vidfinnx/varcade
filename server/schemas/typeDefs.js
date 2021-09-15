const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String
    score: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users:[User!]!
    user(username: String!): User
    #   # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    #   me: User
    #   # user: [User]
    
  }
  type Mutation {
    addUser(username: String!, password: String!): Auth
    updateScore(username: String!, score: Int!): Auth
    resetScore(username: String!): Auth
    login(username: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
