setSlideY = nextIndex => {
  this.setState({
    scrollY: 100 * nextIndex,
    currentRow: nextIndex
  });
};

export default ({ ...currentStore = {} }, rowIndex = 0) => {
  const {
    slides = [],
    currentRow = 0,
    currentSlide,
    scrollX,
    scrollY,
    isAnimatedX
  } = currentStore;
  const totalRows = slides.length || 0;

  if (rowIndex === currentRow) {
    return currentStore;
  }

  const nextIndex = currentRow < rowIndex ? currentRow + 1 : currentRow - 1;

  if (nextIndex >= 0 && nextIndex <= totalRows - 1) {
    const nextSlidesLength = children[nextIndex].props.children.length;
    const currentSlidesLength = children[currentRow].props.children.length;

    // these ifs check different conditions between rows with different lengths
    // and sets X axis for slide according to position from previos row
    if (currentSlide > nextSlidesLength - 1) {
      const { slideWidth } = this.defineContentProps();
      this.setState({
        scrollX: slideWidth * nextSlidesLength,
        currentSlide: nextSlidesLength - 1,
        isAnimatedX: false
      });
    } else if (currentSlidesLength < nextSlidesLength) {
      this.setState({
        scrollX: calcScrollX(nextSlidesLength, currentSlide),
        isAnimatedX: false
      });
    } else if (currentSlidesLength > nextSlidesLength) {
      this.setState({
        scrollX: calcScrollX(nextSlidesLength, currentSlide),
        isAnimatedX: false
      });
    } // end ifs check

    this.setSlideY(nextIndex);

    //  =======================
    function calcScrollX(nextSlidesLength, currentSlide) {
      return +((100 / nextSlidesLength) * currentSlide).toFixed(2);
    }
  }
};
