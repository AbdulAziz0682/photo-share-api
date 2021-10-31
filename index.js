const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
`;

const resolvers = {
  Query: {
    totalPhotos: () => 42,
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server
  .listen()
  .then((url) => console.log(`GraphQL Service is running on http://localhost:${url.port}/`));