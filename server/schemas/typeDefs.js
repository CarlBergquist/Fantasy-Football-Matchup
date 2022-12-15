const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    matchups: [Matchup]
  }

  type Player {
    _id: ID
    player_id: Int
    full_name: String
    position: String
    team: String
  }

  type Matchup {
    _id: ID
    createdBy: User
    player1: Player
    player2: Player
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
    players: [Player]
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createMatchup(_id: String!, player1: ID!, player2: ID!): Matchup
  }
`;

module.exports = typeDefs;
