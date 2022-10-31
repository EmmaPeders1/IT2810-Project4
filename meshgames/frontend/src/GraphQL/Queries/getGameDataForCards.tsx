import { gql } from '@apollo/client';

const getGameDataForCards = gql`
query Games($where: GameWhere, $options: GameOptions, $gamesAggregateWhere2: GameWhere){
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
    isFavorited
  }
  gamesAggregate(where: $gamesAggregateWhere2) {
    count
  }
}
`;

export default getGameDataForCards;