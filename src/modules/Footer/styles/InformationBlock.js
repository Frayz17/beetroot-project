import styled from 'styled-components';
import Block from 'components/Block';

const InformationBlock = styled(Block)`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 2;
  }
`;

export default InformationBlock;
