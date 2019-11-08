import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  min-width: 40px;
  margin-left: 5px;
  ${({ cssStr = '' }) => cssStr};
`;
