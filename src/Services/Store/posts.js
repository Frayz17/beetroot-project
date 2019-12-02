export default (
  state = {
    data: [],
    page: 1
  },
  action
) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {data: ...action.payload, page: 1};
    case 'MERGE_POSTS':
      return {...state, data: ...action.payload, page};
    case 'NEXT_PAGE':
      return {...state, page: action.payload};
    default:
      return {...state};
  }
};
