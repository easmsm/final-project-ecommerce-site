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
    pets: [Pet]
    products: [Product]
}
type Pet {
    _id: ID
    petName: String
    type: String
    breed: String
    username: String
    
}
type Product {
    _id: ID
    productName: String
    description: String
    price: Float
    quantity: Int
     
}
type Query {
    me: User
    customer: [User]
    users: [User]
    user(username: String!): User
    pets(username: String): [Pet]
    pet(_id: ID!): Pet
    products: [Product]
    product(_id: ID!): Product
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(userId: ID!, petName: String!, type: String!, breed: String!): Pet
    addProduct(productId: ID!): Product
}
type Auth {
    token: ID!
    user: User
  }

`;

// export the typeDefs
module.exports = typeDefs;