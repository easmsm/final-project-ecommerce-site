// import the gql tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql` 

type User {
    _id: ID
    username: String
    email: String
    phone: String
    address: String
    petName: String
    products: [Product]
}
type Pet {
    _id: ID
    petName: String
    type: String
    breed: String
    parent: User
}
type Product {
    _id: ID
    productName: String
    type: String
    description: String
    price: Float
    quantity: Int
     
}
type Query {
    me: User
    customer: [User]
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addPet(petName: String!, type: String!, breed: String!): Pet
    addProduct(productName: String!, type: String!, description: String!, price: Float!, quantity: Int!): Product
}
type Auth {
    token: ID!
    user: User
  }

`;

// export the typeDefs
module.exports = typeDefs;