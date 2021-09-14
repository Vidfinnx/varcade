import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_SCORE = gql`
  mutation ($username: String!, $score: Int!) {
    updateScore(username: $username,score: $score){
     user {
        _id
       username
        score
      }
    }
  }
`;

export const RESET_SCORE = gql`
  mutation ($username: String!) {
    resetScore(username: $username){
     user {
        _id
       username
        score
      }
    }
  }
`;
