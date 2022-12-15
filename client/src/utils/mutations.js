import { gql } from "@apollo/client";

export const CREATE_MATCHUP = gql`
  mutation createMatchup($player1: String!, $player2: String!) {
    createMatchup(player1: $player1, player2: $player2) {
      _id
      player1
      player2
    }
  }
`;

//Not sure on the $playerNum part
export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $playerNum: Int!) {
    createVote(_id: $_id, playerNum: $playerNum) {
      _id
      player1
      player2
      player1_votes
      player2_votes
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $password: String!) {
    addProfile(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
