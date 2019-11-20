export default (
  state = {
    links: [
      {
        path: '/',
        title: 'Main'
      },
      {
        path: '/posts',
        title: 'Posts'
      },
      {
        path: '/sign-in',
        title: 'SignIn'
      }
    ]
  },
  action
) => {
  return { ...state };
};
