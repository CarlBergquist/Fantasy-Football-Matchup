import { gql } from "@apollo/client";

//NEEDS HELP - Looking at our models - need to find player by full_name and return the _id to the matchups database in order for anything to get rendered

export const QUERY_PLAYERS = gql`
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

export const QUERY_PLAYER = gql`
query Player($fullName: String!) {
  player(full_name: $fullName) {
    _id
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
      player1_votes
      player2_votes
    }
  }
`;
