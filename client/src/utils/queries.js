import { gql } from '@apollo/client';


//DO WE NEED THIS?
export const QUERY_PLAYER = gql`
  query player {
    player {
      _id
      player_id
      full_name
      position
      team
      imageUrl
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      createdBy
      player1
      player2
      player1_votes
      player2_votes
    }
  }
`;
