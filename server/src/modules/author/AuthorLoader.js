export const loadAllAuthors = (root, args, context) => {
  const authors = [
    {
      name: 'Guilherme Jabur',
      age: 22,
    },
    {
      name: 'Sebastiao matos',
      age: 22,
    },
  ];

  return authors;
}