import { getStore } from 'Services/Store';

export default async (page = 1) => {
  const response = await fetch(`http://127.0.0.1:4000/posts${page}`);
  const data = await response.json();

  getStore().dispatch({
    type: 'MERGE_POSTS',
    payload: {
      data,
      page
    }
  });
};
