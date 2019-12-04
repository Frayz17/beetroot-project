import React from 'react';
import GoogleMap from 'google-map-react';
import Block from 'components/Block';

const apiKey = 'AIzaSyDt0cENGVHXD1rzu44Bi05PM7Py9mWkWdQ';

export default () => {
  const defaultProps = {
    center: {
      lat: 25.59,
      lng: -80.34
    },
    zoom: 11
  };

  return (
    <Block
      style={{
        height: '400px',
        width: '100%'
      }}
    >
      <GoogleMap
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMap>
    </Block>
  );
};
