import { gql } from '@apollo/client';

const getPublisherData = gql`
query Publishers {
  publishers {
    publisherId
  }
}
`;

export default getPublisherData;