import { getStore } from 'Services/Store';

export default async () => {
  getStore().dispatch({
    type: 'RESET_POSTS'
  });
};
