import { gql } from '@apollo/client';

const updateIsFavoritedById = gql`
mutation Mutation($where: GameWhere, $update: GameUpdateInput) {
    updateGames(where: $where, update: $update) {
      games {
        gameId
        isFavorited
      }
    }
  }
`

// the variables look like this
//   {
//     "where": {
//       "gameId": <gameId of game to favorite>
//     },
//     "update": {
//       "isFavorited": <true or false depending on usecase>
//     }
//   }

export default updateIsFavoritedById;