import { gql } from '@apollo/client';

const getGameDataForCards = gql`
query Games($where: GameWhere, $options: GameOptions){
  games(where: $where, options: $options){
    gameId
    gameName
    publisher{
      publisherId
    }
    platform{
      platformId
    }
    genre{
      genreId
    }
  }
}
`;

export default getGameDataForCards;