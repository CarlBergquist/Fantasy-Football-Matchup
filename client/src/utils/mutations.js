import { gql } from "@apollo/client";

//NEEDS HELP - Need to make sure our CREATE_MATCHUP and CREATE_VOTE are targetting the correct fields, are working so the matchup is created properly, and the players that are entered in matchup.js connect to the players database by their full_name - may need a createdBy field as well so the person who created it shows up too

export const CREATE_MATCHUP = gql`
  mutation createMatchup($player1: String!, $player2: String!) {
    createMatchup(player1: $player1, player2: $player2) {
      _id
      player1 {
        full_name
      }
      player2 {
        full_name
      }
    }
  }
`;

//Not sure on the $playerNum part
export const CREATE_VOTE = gql`
  mutation createVote($_id: String, $playNum: Int!) {
    createVote(_id: $_id, playNum: $playNum) {
      _id
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

export const REMOVE_MATCHUP = gql`
  mutation removeMatchup($_id: String) {
    removeMatchup(_id: $_id) {
      _id
    }
  }
`;
