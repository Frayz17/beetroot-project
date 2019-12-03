import { getStore, getState } from 'Services/Store';

export default async (page = 1) => {
  const response = await fetch(`http://127.0.0.1:4000/posts${page}`);
  const data = await response.json();
  // const { page: pageStore } = getState().posts;
  console.log('action  State page ', getState().posts);

  getStore().dispatch({
    type: 'MERGE_POSTS',
    payload: {
      data,
      page
    }
  });
};
