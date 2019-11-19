import { handleChangeSlideX } from 'modules/Slider/funcs';
import { handleChangeSlideY } from 'modules/Slider/funcs';

export default (
  state = {
    main: {
      slides: [
        [
          { title: '1 1', style: { backgroundColor: 'red' } },
          { title: '1 2', style: { backgroundColor: 'green' } },
          { title: '1 3', style: { backgroundColor: 'green' } }
        ],
        [
          { title: '2 1', style: { backgroundColor: 'yellow' } },
          { title: '2 2', style: { backgroundColor: 'coral' } }
        ],
        [
          { title: '3 1', style: { backgroundColor: 'purple' } },
          { title: '3 2', style: { backgroundColor: 'lightgreen' } }
        ]
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
  const { sliderName = '', slideIndex = 0, rowIndex = 0 } = payload;
  switch (type) {
    case 'SLIDE_TO_X':
      state[sliderName] = {
        ...handleChangeSlideX({ ...state[sliderName] }, slideIndex)
      };
      return { ...state };
    case 'SLIDE_TO_Y':
      state[sliderName] = {
        ...handleChangeSlideY({ ...state[sliderName] }, rowIndex)
      };
      return { ...state };
    default:
      return { ...state };
  }
};
