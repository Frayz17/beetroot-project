import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};
`;
