import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($id: ID!) {
    addProduct(productId: $id) {
        _id
        productName
        description
        price
      }
    }
`;

export const ADD_PET = gql`
  mutation addPet($petName: String!, $type: String!, $breed: String!) {
    addPet(petName: $petName, type: $type, breed: $breed) {
      _id
      petName
      type
      breed
      username
    }
  }
`;