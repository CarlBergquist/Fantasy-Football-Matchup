const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    matchups: [Matchup]
  }

  type Matchup {
    _id: ID
    createdBy: String
    player1: String
    palyer2: String
    player1_votes: Int
    player2_votes: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(userName: String!, password: String!): Auth
    createMatchup(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
