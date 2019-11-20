import React from 'react';
import { getState } from 'Services/Store';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BlockFlex } from 'components/Block';
import { ButtonLink } from 'components/Button';
import { withRouter } from 'react-router-dom';
import Typography from 'components/Typography';

const StyledBlockFlex = styled(BlockFlex)`
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
  }
`;

export default withRouter(
  connect(state => {
    return {
      // link: state.nav || {} || ''
    };
  })(
    React.memo(({ history }) => {
      const {
        nav: { links = [] }
      } = getState();

      return (
        <StyledBlockFlex>
          {links.map(({ path = '/', title = 'noname' }, i) => {
            const isActiveFlag = history.location.pathname === path;

            return (
              <ButtonLink
                key={i}
                to={path}
                disabled={isActiveFlag}
                style={
                  isActiveFlag
                    ? {
                        color: 'blue'
                      }
                    : {
                        color: 'green'
                      }
                }
              >
                <Typography>{title}</Typography>
              </ButtonLink>
            );
          })}
        </StyledBlockFlex>
      );
    })
  )
);
