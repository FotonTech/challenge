import * as BookLoader from './BookLoader';

export const typeDefs = `
  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  books: () => BookLoader.loadAllBooks(),
};
