import React from 'react';
import { getState } from 'Services/Store';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Block, { BlockFlex } from 'components/Block';
import { ButtonLink } from 'components/Button';
import { withRouter } from 'react-router-dom';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import Button from 'components/Button';

import onDisplayMenu from './onDisplayMenu';

const MenuBlock = styled(Block)`
  position: absolute;
  top: 0;
  left: 0;
  zindex: 2;
  width: 100%;
  backgroundcolor: #fff;
`;

const StyledBlockFlex = styled(BlockFlex)`
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    display: ${({ displayMenuFlag = false }) => {
      return displayMenuFlag ? 'block' : 'none';
    }};
    & > a {
      display: block;
      line-height: 24px;
    }
  }
`;

const StyledButton = styled(Button)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export default withRouter(
  connect((state) => {
    return {
      displayMenuFlag: (state.menu || {}).displayMenuFlag || false
    };
  })(
    React.memo(
      ({
        history,
        displayMenuFlag,
        styleMenuBlock = {},
        styleLinksContainer = {},
        styleLinkItems = {},
        isBurgerNeed = true
      }) => {
        const {
          nav: { links = [] }
        } = getState();

        return (
          <MenuBlock style={styleMenuBlock}>
            <StyledBlockFlex
              style={styleLinksContainer}
              displayMenuFlag={displayMenuFlag}
            >
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
                            color: 'blue',
                            ...styleLinkItems
                          }
                        : {
                            color: 'green',
                            ...styleLinkItems
                          }
                    }
                  >
                    <Typography>{title}</Typography>
                  </ButtonLink>
                );
              })}
            </StyledBlockFlex>

            {isBurgerNeed && (
              <StyledButton onClick={onDisplayMenu}>
                <Icon name={displayMenuFlag ? 'times' : 'bars'} />
              </StyledButton>
            )}
          </MenuBlock>
        );
      }
    )
  )
);
