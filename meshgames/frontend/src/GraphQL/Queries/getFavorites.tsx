import { gql } from '@apollo/client';

const getFavorites = gql`
query Games($where: GameWhere) {
  games(where: $where) {
    gameId
    gameName
    publisher {
      publisherId
    }
    platform {
      platformId
    }
    genre {
      genreId
    }
    isFavorited
  }
}
`;

export default getFavorites;