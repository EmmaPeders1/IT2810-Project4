import { gql } from '@apollo/client';

const getGenreData = gql`
query Genres{
  genres {
    genreId
  }
}
`;

export default getGenreData;