const { gql } = require('apollo-server');

module.exports = gql`

type Restaurant {
    id: ID!
    name: String!
    address: String!
    city: String!
    rating: Float
    reviews(rating: Int): [Review!]!
    numberOfReviews: Int!
}

type Review {
    id: ID!
    message: String
    rating: Int!
    restaurant: Restaurant!
}

type Query {
    restaurants(city : String): [Restaurant!]!
}

`;
