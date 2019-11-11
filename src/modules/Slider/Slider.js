import React from "react";
import Button from "components/Button";
import RootWrapper from "./RootWraper";
import ContentWrapper from "./ContentWrapper";

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
    isAnimatedX: true,
    isAnimatedY: true
  };

  // ********************************************
  componentDidUpdate(_, prevState) {
    const { isAnimatedX, isAnimatedY, scrollX, scrollY } = this.state;

    if (prevState.scrollY !== scrollY) {
      this.setState({
        isAnimatedX: false
      });
    }
    if (prevState.scrollX !== scrollX) {
      this.setState({
        isAnimatedY: false
      });
    }
  }
  // ********************************************

  setSlideX = (nextIndex, slideWidth) => {
    this.setState({
      scrollX: slideWidth * nextIndex,
      currentSlide: nextIndex
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

      if (currentSlide > nextSlidesLength) {
        const { slideWidth } = this.defineContentProps();
        this.setState({
          scrollX: slideWidth * nextSlidesLength,
          currentSlide: nextSlidesLength - 1
        });
      } else if (currentSlidesLength < nextSlidesLength) {
        this.setState({
          scrollX: (100 / nextSlidesLength) * currentSlide
        });
      } else {
        this.setState({
          scrollX: (100 / nextSlidesLength) * currentSlide
        });
      }

      this.setSlideY(nextIndex);
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
    const { scrollX = 0, scrollY = 0, currentSlide, currentRow } = this.state;
    const { slideToX, slideToY } = this;

    const style = {
      transform: `translate(-${scrollX}%,-${scrollY}%)`,
      transition: `${allowAnimate ? "ease .2s all" : null}`
    };

    return (
      <>
        <RootWrapper>
          <ContentWrapper {...this.defineContentProps()} style={style}>
            {children}
          </ContentWrapper>
        </RootWrapper>
        <Button onClick={slideToX(currentSlide - 1)}>prev</Button>
        <Button onClick={slideToX(currentSlide + 1)}>next</Button>
        <Button onClick={slideToY(currentRow - 1)}>up</Button>
        <Button onClick={slideToY(currentRow + 1)}>down</Button>
      </>
    );
  }
}
