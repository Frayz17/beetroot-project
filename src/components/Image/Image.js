import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Component = styled.img`
  display: block;
`;

let index = 0;
export default React.memo(({ preloaderSrc = '', src = '', ...props }) => {
  const [isLoadedFlag, setLoadedFlag] = React.useState(false);
  const imgRef = React.useRef(null);
  const listener = (e) => {
    const img = new Image();

    img.src = src;
    img.onload = () => {
      setLoadedFlag(true);
    };

    document.dispatchEvent(
      new CustomEvent('onImgLoaded', {
        detail: {
          newIndex: ++index
        }
      })
    );
  };

  // onMount
  React.useEffect(() => {
    document.addEventListener('onImgLoaded', listener);
  }, []);

  // on
  React.useEffect(
    () => () => {
      document.removeEventListener('onImgLoaded', listener);
    },
    []
  );

  console.log('isLoadedFlag', isLoadedFlag);
  return isLoadedFlag ? (
    <Component ref={imgRef} src={src} {...props} />
  ) : (
    <Preloader src={preloaderSrc} />
  );
});

const Preloader = React.memo(({ preloaderSrc = '' }) => {
  return <Block>Loading</Block>;
});
