const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id : ID!
        username: String
        email: String
        itemCount: Int
        savedItem: [Item]!
     }
     type Item {
        itemId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    input savedItem {
        itemId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveItem(input: savedItem!): User
        removeItem(itemId: String!): User
    }
     `;
     
     module.exports = typeDefs;