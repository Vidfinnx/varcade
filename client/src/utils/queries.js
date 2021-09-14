import { gql } from '@apollo/client';








export const QUERY_SCORES = gql`
query {
  users {
    username
    score
    
    
}
}
`;

export const QUERY_USER = gql`
query ($username: String!){
      user(username: $username){
      username
      score
       }
 }
`;
