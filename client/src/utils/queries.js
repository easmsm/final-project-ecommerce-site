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
  query products {
    products {
      _id
      productName
      description
      price
      quantity
    }
  }
`;

export const QUERY_PETS = gql`
  query pets($username: String!) {
    pets(username: $username) {
        _id
        petName
        type
        breed
        username
    }
  }

`;

export const QUERY_PET = gql`
  query pet($id: ID!) {
    pet(_id: $id) {
        _id
        petName
        type
        breed
        username
    }
  }

`;