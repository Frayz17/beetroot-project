import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Component = styled.img`
  display: block;
`;
let index = 0;
let count = 0;

const listener = nowIndex => e => {
  if (
    count > index &&
    (index === nowIndex || ((e || {}).detail || {}).newIndex === index)
  ) {
    const currentIndex = index;

    index++;
    setTimeout(() => {
      const img = new Image();

      img.src = cahcedData[currentIndex].src;
      img.onload = () => {
        cahcedData[currentIndex].setLoadedFlag(true);
        dispatchNextImg(currentIndex);
      };
      img.onerror = () => {
        dispatchNextImg(currentIndex);
        console.log('src', cahcedData[currentIndex].src);
      };
    }, 0);
  }
};
const dispatchNextImg = currentIndex => {
  setTimeout(() => {
    document.dispatchEvent(
      new CustomEvent('onImgLoaded', {
        detail: {
          newIndex: index
        }
      })
    );
    delete cahcedData[currentIndex];
    if (count - 1 === currentIndex) {
      cahcedData = {};
      index = 0;
      count = 0;
    }
  }, 0);
};
let cahcedData = {};

const Preloader = React.memo(({ preloaderSrc = '' }) => {
  return <Block>Loading</Block>;
});

export default React.memo(({ preloaderSrc = '', src = '', ...props }) => {
  const [isLoadedFlag, setLoadedFlag] = React.useState(false);
  const eventListener = listener();

  if (!isLoadedFlag) {
    cahcedData[count] = {
      setLoadedFlag,
      src
    };
    count++;
  }

  // onMount
  React.useEffect(() => {
    if (!isLoadedFlag) {
      if (index === 0) {
        listener(0)();
        document.addEventListener('onImgLoaded', eventListener);
      }
    }
  }, [src, isLoadedFlag, eventListener]);

  return isLoadedFlag ? (
    <Component src={src} {...props} />
  ) : (
    <Preloader src={preloaderSrc} />
  );
});
