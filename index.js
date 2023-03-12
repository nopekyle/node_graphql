const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose =  require("mongoose");
const  resolvers  = require("./resolvers");
const  typeDefs  = require("./typeDefs");

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.start().then(res => {
    mongoose.connect("mongodb://127.0.0.1:27017/memes", {
        useNewUrlParser: true
    });
    
    server.applyMiddleware({ app });
    
    app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
  );
  });
};

startServer();
