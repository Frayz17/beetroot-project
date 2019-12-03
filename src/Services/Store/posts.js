export default (
  state = {
    data: [],
    page: 1
  },
  action
) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { data: [...action.payload.data], page: action.payload.page };
    case 'MERGE_POSTS':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        page: action.payload.page
      };
    case 'RESET_POSTS':
      return {
        data: [],
        page: 1
      };
    default:
      return { ...state };
  }
};
