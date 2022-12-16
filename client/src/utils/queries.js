import { gql } from "@apollo/client";

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
  query matchups {
    matchups {
      player1 {
        full_name
        player_id
        position
        team
        _id
        imageUrl
      }
      _id
      player2 {
        full_name
        _id
        player_id
        position
        team
        imageUrl
      }
      createdBy {
        username
      }
    }
  }
`;
