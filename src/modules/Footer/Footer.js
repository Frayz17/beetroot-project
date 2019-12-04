import React from 'react';
import Typography from 'components/Typography';
import ModalBox from 'components/ModalBox';
import MapModule from 'modules/MapModule';
import Menu from 'modules/Menu';
import {
  AddressBlock,
  AddressTypography,
  ContactsButton,
  ContactsTypography,
  CopyrightBlock,
  CopyrightTypography,
  Footer,
  InformationBlock,
  MapClosedButton,
  MenuBlock
} from './styles';

export default React.memo(() => {
  const [isMapOpenFlag, setIsMapOpenFlag] = React.useState(false);

  const onMapCall = () => {
    setIsMapOpenFlag(!isMapOpenFlag);
  };

  const copyrightStr = `&copy; ${new Date().getFullYear()}`;

  return (
    <Footer>
      <InformationBlock>
        <CopyrightBlock>
          <Typography>
            {copyrightStr}
            <br />
            <CopyrightTypography>BetobeCorp</CopyrightTypography>
          </Typography>
        </CopyrightBlock>

        <AddressBlock>
          <AddressTypography>
            BetobeCorp <br /> Miami <br />
            SW 26th St
          </AddressTypography>
          <ContactsTypography>
            Waiting for Call <br />
            +(0)123-456-7890 <br />
            <ContactsButton onClick={onMapCall}>We on a Map</ContactsButton>
          </ContactsTypography>
        </AddressBlock>
      </InformationBlock>

      <MenuBlock>
        <Menu
          styleMenuBlock={{
            position: 'relative'
          }}
          styleLinksContainer={{
            display: 'flex',
            flexDirection: 'column'
          }}
          styleLinkItems={{
            marginBottom: '10px'
          }}
          isBurgerNeed={false}
        />
      </MenuBlock>

      {isMapOpenFlag && (
        <ModalBox>
          <MapModule />
          <MapClosedButton onClick={onMapCall}>close</MapClosedButton>
        </ModalBox>
      )}
    </Footer>
  );
});
