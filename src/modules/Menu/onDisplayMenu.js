import { getStore } from 'Services/Store';

export default () => {
  getStore().dispatch({ type: 'SWITCH_DISPLAY_MENU_FLAG' });
};
