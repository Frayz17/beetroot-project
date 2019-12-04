import loadPosts from './loadPosts';

export default (page, routesNumber) => () => {
  // if scrolled to the bottom of the page
  if (
    document.documentElement.offsetHeight > window.innerHeight &&
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
  ) {
    if (page < routesNumber) {
      loadPosts(++page);
    }
  }
};
