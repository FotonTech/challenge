import * as AuthorLoader from './AuthorLoader';

export const typeDefs = `
  type Author {
    name: String
    age: Int
  }
`;

export const resolvers = {
  authors: () => AuthorLoader.loadAllAuthors(),
};
