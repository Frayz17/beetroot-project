import React from 'react';
import styled from 'styled-components';
import { BlockFlex } from 'components/Block';
import { ButtonLink } from 'components/Button';
import { connect } from 'http2';

const StyledBlockFlex = styled(BlockFlex)`
  alignItems: 'center',
  justifyContent: 'space-between'

  @media screen and (max-width: 576px) {
  }
`;

export default connect(state => {
  return {
    link: state.nav || {} || ''
  };
})(
  React.memo(({ link }) => {
    const mainCheck = link === '/';

    return (
      <StyledBlockFlex>
        <ButtonLink
          to="/"
          disabled={mainCheck}
          style={
            mainCheck
              ? {
                  color: 'red'
                }
              : {
                  color: 'green'
                }
          }
        >
          <Typography>Main</Typography>
        </ButtonLink>
      </StyledBlockFlex>
    );
  })
);
