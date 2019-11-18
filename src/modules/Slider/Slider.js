import React from 'react';
import { connect } from 'react-redux';
import { getStore } from 'Services/Store';
import Block from 'components/Block';
import Button from 'components/Button';
import RootWrapper from './view/RootWraper';
import HorizontalWrapper from './view/HorizontalWrapper';
import VerticalWrapper from './view/VerticalWrapper';

class Slider extends React.Component {
  static defaultProps = {
    name: '',
    defaultSlide: 0,
    defaultRow: 0,
    allowAnimate: true
  };

  slideToX = (slideIndex = this.defaultProps.defaultSlide) => e => {
    getStore().dispatch({
      type: 'SLIDE_TO_X',
      payload: {
        sliderName: this.props.name,
        slideIndex
      }
    });
  };

  slideToY = (rowIndex = 0) => e => {
    getStore().dispatch({
      type: 'SLIDE_TO_Y',
      payload: {
        sliderName: this.props.name,
        rowIndex
      }
    });
  };

  // defineContentProps = () => {
  //   const { children = [] } = this.props;
  //   const { currentRow } = this.state;

  //   const slidesCount = children[currentRow].props.children.length || 1;
  //   const slideWidth = +(100 / slidesCount).toFixed(2);

  //   return { slideWidth, slidesCount };
  // };

  render() {
    const {
      slides = [],
      allowAnimate = true,
      currentSlide = 0,
      currentRow = 0,
      scrollX = 0,
      scrollY = 0,
      isAnimatedX = true
    } = this.props;
    const { slideToX, slideToY } = this;

    const slidesCount = slides[currentRow].length || 1;
    const slideWidth = +(100 / slidesCount).toFixed(2);

    const styleVertical = {
      transform: `translateY(-${scrollY}%)`,
      transition: `${allowAnimate ? 'ease .2s transform' : 'none'}`
    };

    const styleHorizontal = {
      transform: `translateX(-${scrollX}%)`,
      transition: `${
        allowAnimate && isAnimatedX ? 'ease .2s transform' : 'none'
      }`
    };

    return (
      <>
        <RootWrapper>
          {slides.map((row, i) => {
            return (
              <VerticalWrapper style={styleVertical}>
                {row.map((item, ii) => {
                  return (
                    <HorizontalWrapper
                      slideWidth={slideWidth}
                      style={styleHorizontal}>
                      <Block key={ii} style={item.style}>
                        {item.title}
                      </Block>
                    </HorizontalWrapper>
                  );
                })}
              </VerticalWrapper>
            );
          })}
        </RootWrapper>
        <Button onClick={slideToX(currentSlide - 1)}>prev</Button>
        <Button onClick={slideToX(currentSlide + 1)}>next</Button>
        <Button onClick={slideToY(currentRow - 1)}>up</Button>
        <Button onClick={slideToY(currentRow + 1)}>down</Button>
      </>
    );
  }
}

export default connect((state, { name = '' }) => {
  return {
    ...state.sliders[name]
  };
})(Slider);
