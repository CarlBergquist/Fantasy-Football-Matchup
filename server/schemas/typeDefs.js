const { gql } = require("apollo-server-express");

//NEEDS HELP: Specifically the mutations at the bottom of this file are what we are looking at

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    matchups: [Matchup]
  }

  type Player {
    _id: ID
    player_id: String
    full_name: String
    position: String
    team: String
    imageUrl: String
  }

  type Matchup {
    _id: ID
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
    matchups: [Matchup]
    matchup(_id: String!): Matchup
    players: [Player]
    player(full_name: String!): Player
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createMatchup(player1: String!, player2: String!): Matchup
    removeMatchup(_id: ID!): Matchup
    createVote(_id: ID!): Matchup
  }
`;

// addProfile works, login works -
// createMatchup, removeMatchup, createVote (haven't even tried) are what we are working on still

module.exports = typeDefs;
