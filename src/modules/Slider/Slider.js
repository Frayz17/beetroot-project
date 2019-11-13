import React from "react";
import Button from "components/Button";
import RootWrapper from "./view/RootWraper";
import HorizontalWrapper from "./view/HorizontalWrapper";
import VerticalWrapper from "./view/VerticalWrapper";

export default class Slider extends React.Component {
  static defaultProps = {
    defaultSlide: 0,
    defaultRow: 0,
    allowAnimate: true
  };

  state = {
    scrollX: 0,
    scrollY: 0,
    currentSlide: this.props.defaultSlide,
    currentRow: this.props.defaultRow,
    isAnimatedX: true
  };

  setSlideX = (nextIndex, slideWidth) => {
    this.setState({
      scrollX: slideWidth * nextIndex,
      currentSlide: nextIndex,
      isAnimatedX: true
    });
  };

  setSlideY = nextIndex => {
    this.setState({
      scrollY: 100 * nextIndex,
      currentRow: nextIndex
    });
  };

  setNextIndex = (currentSlide, nextIndex) => {
    return currentSlide < nextIndex ? currentSlide + 1 : currentSlide - 1;
  };

  slideToX = (slideIndex = 0) => e => {
    const { currentSlide = 0 } = this.state;

    if (slideIndex === currentSlide) {
      return;
    }

    const nextIndex = this.setNextIndex(currentSlide, slideIndex);
    const { slideWidth, slidesCount } = this.defineContentProps();

    if (nextIndex >= 0 && nextIndex <= slidesCount - 1) {
      this.setSlideX(nextIndex, slideWidth);
    }
  };

  slideToY = (rowIndex = 0) => e => {
    const { currentRow = 0 } = this.state;
    const totalRows = this.props.children.length;
    const { currentSlide = 0 } = this.state;
    const { children = [] } = this.props;

    if (rowIndex === currentRow) {
      return;
    }

    const nextIndex = this.setNextIndex(currentRow, rowIndex);

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

  defineContentProps = () => {
    const { children = [] } = this.props;
    const { currentRow } = this.state;

    const slidesCount = children[currentRow].props.children.length || 1;
    const slideWidth = +(100 / slidesCount).toFixed(2);

    return { slideWidth, slidesCount };
  };

  render() {
    const { children = [], allowAnimate } = this.props;
    const {
      currentSlide,
      currentRow,
      scrollX,
      scrollY,
      isAnimatedX
    } = this.state;
    const { slideToX, slideToY } = this;

    const styleVertical = {
      transform: `translateY(-${scrollY}%)`,
      transition: `${allowAnimate ? "ease .2s transform" : "none"}`
    };

    const styleHorizontal = {
      transform: `translateX(-${scrollX}%)`,
      transition: `${
        allowAnimate && isAnimatedX ? "ease .2s transform" : "none"
      }`
    };

    return (
      <>
        <RootWrapper>
          <VerticalWrapper style={styleVertical}>
            <HorizontalWrapper
              {...this.defineContentProps()}
              style={styleHorizontal}
            >
              {children}
            </HorizontalWrapper>
          </VerticalWrapper>
        </RootWrapper>
        <Button onClick={slideToX(currentSlide - 1)}>prev</Button>
        <Button onClick={slideToX(currentSlide + 1)}>next</Button>
        <Button onClick={slideToY(currentRow - 1)}>up</Button>
        <Button onClick={slideToY(currentRow + 1)}>down</Button>
      </>
    );
  }
}
