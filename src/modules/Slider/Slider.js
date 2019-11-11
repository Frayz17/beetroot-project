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
  height: 100%;
  width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
  & > div {
    overflow: hidden;
    height: 100%;
    // width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
    & > div {
      float: left;
      height: 100%
      width: ${({ slideWidth = 100 }) => slideWidth + '%'};
    }
  }
`;

export default class Slider extends React.Component {
  static defaultProps = {
    defaultSlide: 0,
    defaultRow: 0,
    allowAnimate: true
  };

  state = {
    scrollX: 0,
    currentSlide: this.props.defaultSlide,
    currentRow: this.props.defaultRow
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
  };

  switchRow = (rowIndex = 0) => () => {
    const { currentRow = 0 } = this.state;
    let { currentSlide } = this.state;
    const { children } = this.props;

    const rowsNumber = children.length;

    const currentRowLength = children[currentRow].props.children.length;

    console.log(currentRowLength);

    if (rowIndex === currentRow) {
      return;
    }

    const nextRow = currentRow < rowIndex ? currentRow + 1 : currentRow - 1;

    if (nextRow >= 0 && nextRow <= rowsNumber - 1) {
      this.setState({
        currentRow: nextRow,
        currentSlide:
          currentSlide > currentRowLength ? currentRowLength : currentSlide
      });
    }
  };

  defineContentProps = () => {
    const { children = [] } = this.props;
    const { currentRow } = this.state;
    const currentRowLength = children[currentRow].props.children.length;

    const slidesCount = currentRowLength || 1;
    const slideWidth = +(100 / slidesCount).toFixed(2);

    return { slideWidth, slidesCount };
  };

  render() {
    const { children = [], allowAnimate } = this.props;
    const { scrollX = 0, currentSlide, currentRow } = this.state;
    const { slideTo, switchRow } = this;

    const style = {
      transform: `translate(-${scrollX}%,0px)`,
      transition: `${allowAnimate ? 'ease .2s all' : null}`
    };

    return (
      <>
        <RootWrapper>
          <ContentWrapper {...this.defineContentProps()} style={style}>
            {children[currentRow]}
          </ContentWrapper>
        </RootWrapper>
        <Button onClick={slideTo(currentSlide - 1)}>prev</Button>
        <Button onClick={slideTo(currentSlide + 1)}>next</Button>
        <Button onClick={switchRow(currentRow - 1)}>up</Button>
        <Button onClick={switchRow(currentRow + 1)}>down</Button>
      </>
    );
  }
}
