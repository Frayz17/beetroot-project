export default (currentStore = {}, slideIndex) => {
  const { currentSlide = 0, slides = [], currentRow = 0 } = currentStore;

  if (slideIndex === currentSlide) {
    return currentStore;
  }

  const nextIndex =
    currentSlide < nextIndex ? currentSlide + 1 : currentSlide - 1;

  const slidesCount = slides[currentRow].length || 1;
  const slideWidth = +(100 / slidesCount).toFixed(2);

  if (nextIndex >= 0 && nextIndex <= slidesCount - 1) {
    return {
      ...currentStore,
      currentSlide: nextIndex,
      scrollX: slideWidth * nextIndex
    };
  }

  return currentStore;
};
