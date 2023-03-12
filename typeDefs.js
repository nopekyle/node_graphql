const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String!
    memes: [Meme!]!
  }
  type Meme {
    id: ID!
    caption: String!
    image: String!
  }
  type Mutation {
    createMeme(caption: String!, image: String!) : Meme!
    updateMeme(id: ID!, caption: String!) : Meme! 
    deleteMeme(id: ID!) : Meme!
  }
`;

module.exports = typeDefs;