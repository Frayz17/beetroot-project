export default (
  state = [
    {
      id: 1,
      title: 'Post 1',
      description: 'Text 1'
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Text 2'
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Text 3'
    }
  ],
  action
) => {
  return [...state];
};
