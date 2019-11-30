export default (state = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return [...action.payload];
    case 'MERGE_POSTS':
      return [...state, ...action.payload];
    default:
      return [...state];
  }
};
