export default (
  state = {
    data: [],
    page: 1
  },
  action
) => {
  console.log('reducer s  page', action.payload);

  switch (action.type) {
    case 'SET_POSTS':
      return { data: [...action.payload.data], page: action.payload.page };
    case 'MERGE_POSTS':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        page: action.payload.page
      };
    default:
      return { ...state };
  }
};
