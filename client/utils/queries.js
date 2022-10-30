import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      phone
      address
      pets {
        _id
        petName
        type
        breed
      }
      products {
        _id
        productName
        description
        price
        quantity
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      phone
      address
      pets {
        _id
        petName
      }
      products {
        _id
        productName
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query products($productName: String!) {
    products(productName: $productName) {
      _id
      productName
      description
      price
      quantity
    }
  }
`;

export const QUERY_PETS = gql`
  query pets($petName: String!) {
    pets(petName: $petName) {
        _id
        petName
        type
        breed
    }
  }

`;