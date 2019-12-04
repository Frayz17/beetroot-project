import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export default React.memo(({ children = 'modal content placeholder' }) => {
  return (
    <ModalBackground>
      <ModalContent>{children}</ModalContent>
    </ModalBackground>
  );
});
