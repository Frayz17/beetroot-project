export default (
  state = {
    displayMenuFlag: false
  },
  { type = '' }
) => {
  switch (type) {
    case 'SWITCH_DISPLAY_MENU_FLAG':
      return {
        ...state,
        displayMenuFlag: !state.displayMenuFlag
      };
    default:
      return { ...state };
  }
};
