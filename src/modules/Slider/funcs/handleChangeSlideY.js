// setSlideY = nextIndex => {
//   this.setState({
//     scrollY: 100 * nextIndex,
//     currentRow: nextIndex
//   });
// };

export default (currentStore = {}, rowIndex = 0) => {
  const {
    slides = [],
    currentRow = 0,
    currentSlide
    // scrollX,
    // scrollY,
    // isAnimatedX
  } = currentStore;
  const totalRows = slides.length || 0;

  if (rowIndex === currentRow) {
    return currentStore;
  }

  const nextIndex = currentRow < rowIndex ? currentRow + 1 : currentRow - 1;

  if (nextIndex >= 0 && nextIndex <= totalRows - 1) {
    const nextSlidesLength = slides[nextIndex].length;
    const currentSlidesLength = slides[currentRow].length;

    // these ifs check different conditions between rows with different lengths
    // and sets X axis for slide according to position from previos row
    if (currentSlide > nextSlidesLength - 1) {
      const slidesCount = slides[currentRow].length || 1;
      const slideWidth = +(100 / slidesCount).toFixed(2);

      return {
        ...currentStore,
        currentRow: nextIndex,
        scrollX: slideWidth * nextSlidesLength,
        currentSlide: nextSlidesLength - 1,
        scrollY: 100 * nextIndex,
        isAnimatedX: false
      };
    } else if (currentSlidesLength < nextSlidesLength) {
      return {
        ...currentStore,
        currentRow: nextIndex,
        scrollX: calcScrollX(nextSlidesLength, currentSlide),

        scrollY: 100 * nextIndex,

        isAnimatedX: false
      };
    } else if (currentSlidesLength > nextSlidesLength) {
      return {
        ...currentStore,
        scrollX: calcScrollX(nextSlidesLength, currentSlide),
        scrollY: 100 * nextIndex,
        currentRow: nextIndex,
        isAnimatedX: false
      };
    } // end ifs check

    return {
      ...currentStore,
      scrollY: 100 * nextIndex,
      currentRow: nextIndex
    };

    //  =======================
    function calcScrollX(nextSlidesLength, currentSlide) {
      return +((100 / nextSlidesLength) * currentSlide).toFixed(2);
    }
  }

  return currentStore;
};
