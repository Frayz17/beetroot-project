import { getStore, getState } from 'Services/Store';

export default async (page = 1) => {
  let { currentPage } = getState.posts();

  getStore().dispatch({
    type: 'NEXT_PAGE',
    payload: ++currentPage
  });
};
