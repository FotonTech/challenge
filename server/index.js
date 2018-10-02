import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';

const SchemaDefinition = `
  schema {
    query: Query
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const typeDefs = [
  BookType.typeDefs,
  AuthorType.typeDefs,
];

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers
  },
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
