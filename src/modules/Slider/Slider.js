import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import Button from 'components/Button';

const RootWrapper = styled(Block)`
  overflow: hidden;
  width: 300px;
  height: 140px;
  border: 1px solid;
`;

const ContentWrapper = styled(Block)`
  overflow: hidden;
  height: 100%;
  width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
  & > div {
    float: left;
    height: 100%
    width: ${({ slideWidth = 100 }) => slideWidth + '%'};
  }
`;

export default class Slider extends React.Component {
  static defaultProps = {
    defaultSlide: 0,
    allowAnimate: true
  };

  state = {
    scrollX: 0,
    currentSlide: this.props.defaultSlide
  };

  slideTo = (slideIndex = 0) => e => {
    const { currentSlide = 0 } = this.state;

    if (slideIndex === currentSlide) {
      return;
    }

    const nextIndex =
      currentSlide < slideIndex ? currentSlide + 1 : currentSlide - 1;

    const { slideWidth, slidesCount } = this.defineContentProps();

    if (nextIndex >= 0 && nextIndex <= slidesCount - 1) {
      this.setState({
        scrollX: slideWidth * nextIndex,
        currentSlide: nextIndex
      });
    }

    console.log(slideWidth, nextIndex);
  };

  defineContentProps = () => {
    const { children = [] } = this.props;
    const slidesCount = children.length || 1;
    const slideWidth = +(100 / slidesCount).toFixed(2);

    return { slideWidth, slidesCount };
  };

  render() {
    const { children = [], allowAnimate } = this.props;
    const { scrollX = 0, currentSlide } = this.state;
    const { slideTo } = this;

    const style = {
      transform: `translate(-${scrollX}%,0px)`,
      transition: `${allowAnimate ? 'ease .2s all' : null}`
    };

    return (
      <>
        <RootWrapper>
          <ContentWrapper {...this.defineContentProps()} style={style}>
            {children}
          </ContentWrapper>
        </RootWrapper>
        <Button onClick={slideTo(currentSlide - 1)}>prev</Button>
        <Button onClick={slideTo(currentSlide + 1)}>next</Button>
      </>
    );
  }
}
