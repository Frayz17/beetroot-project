import styled from 'styled-components';
import Block from 'components/Block';

const MenuBlock = styled(Block)`
  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    flex-grow: 1;
  }
`;

export default MenuBlock;
