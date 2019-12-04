export default (isActiveFlag, styleLinkItems) => {
  return isActiveFlag
    ? { color: 'blue', ...styleLinkItems }
    : { color: 'green', ...styleLinkItems };
};
