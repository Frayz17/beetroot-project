import { handleChangeSlideX } from 'modules/Slider/funcs';

export default (
  state = {
    main: {
      slides: [
        [{ title: 'first' }, { title: 'second' }],
        [{ title: 'third' }, { title: 'fourth' }]
      ],
      currentRow: 0,
      currentSlide: 0,
      scrollX: 0,
      scrollY: 0,
      isAnimatedX: true
    }
  },
  { type = '', payload = {} }
) => {
  const { sliderName = '', slideIndex = 0 } = payload;
  switch (type) {
    case 'SLIDE_TO_X':
      state[sliderName] = {
        ...handleChangeSlideX({ ...state[sliderName] }, slideIndex)
      };
      return { ...state };
    default:
      return { ...state };
  }
};
