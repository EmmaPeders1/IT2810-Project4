import { gql } from '@apollo/client';

const getPlatformData = gql`
query Platforms{
  platforms {
    platformId
  }
}
`;

export default getPlatformData;