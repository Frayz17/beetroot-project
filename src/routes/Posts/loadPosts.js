import { getStore } from 'Services/Store';

export default async () => {
  const response = await fetch('http://127.0.0.1:4000/posts');
  const data = await response.json();

  getStore().dispatch({
    type: 'SET_POSTS',
    payload: data
  });
};
