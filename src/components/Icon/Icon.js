import styled from 'styled-components';
import React from 'react';

const Component = styled.span`
  font-size: 18px;
`;

export default React.memo(({ name = '', className = '', ...props }) => {
  return <Component {...props} className={`fas fa-${name} ${className}`} />;
});
