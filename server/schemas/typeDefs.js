const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    password: String
    scores: [Score]
  }

  type Score {
    _id: ID!
    score: Int!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID!
//     name: String!
//     email: String
//     scores: [Score]
//   }
//   type Score {
//     _id: ID!
//     score: Int!
//   }
//   type Query {
//     user: [User]
//     score(user: String!): [Score]
//   }
//   type Mutation {
//     createScore(user1: String!, user2: String!): Score
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;
