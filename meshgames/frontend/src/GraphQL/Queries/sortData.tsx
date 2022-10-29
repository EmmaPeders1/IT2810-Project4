import { gql } from '@apollo/client';

const sortData = gql`
query Games($where: GameWhere, $publisherWhere2: PublisherWhere, $options: GameOptions) {
  games(where: $where, options: $options) {
    gameName
    publisher(where: $publisherWhere2) {
      publisherId
    }
  }
}
`;
export default sortData;