import { gql } from '@apollo/client';


export const QUERY_SCORES = gql
`
{
    users{
      username
      score
    }
  }
`;

// export const QUERY_USER = gql`
//   {
//     user {
// }
// `;