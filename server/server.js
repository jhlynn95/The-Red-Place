const express = require('express');
// Importing the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleWare } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

const server = newApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If we are in production, server client/build as static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

// create a new instance of Apllo Server using GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
}

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(
            `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        )
    })
})

// start server
startApolloServer(typeDefs, resolvesr);

