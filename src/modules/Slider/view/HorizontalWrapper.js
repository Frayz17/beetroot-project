import styled from "styled-components";
import Block from "components/Block";

const HorizontalWrapper = styled(Block)`
  height: 100%;
  width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
  & > div {
    overflow: hidden;
    height: 100%;
    & > div {
      float: left;
      height: 100%
      width: ${({ slideWidth = 100 }) => slideWidth + "%"}; 
    }
  }
`;

export default HorizontalWrapper;
