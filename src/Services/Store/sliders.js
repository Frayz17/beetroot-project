// export default (
//   state = {
//     main: {
//       scrollX: 0,
//       currentSlide: 0
//     }
//   },
//   action
// ) => {
//   ({ type, payload: { sliderName = '', sliderIndex = 0 } }) => {
//     switch (type) {
//       case 'SLIDE_X':
//         state[sliderName].currentSlide = sliderIndex;
//       default:
//         return state;
//     }
//   };
// };

export default (
  state = {
    main: {
      scrollX: 0,
      currentSlide: 0
    }
  },
  { type = '', payload = {} }
) => {
  const { sliderName = '', sliderIndex = 0 } = payload;
  switch (type) {
    case 'SLIDE_X':
      state[sliderName].currentSlide = sliderIndex;
      return { ...state };
    default:
      return { ...state };
  }
};
