import React from 'react';
import DynamicSearch from 'modules/DynamicSearch';
import Slider from 'modules/Slider';
import Block from 'components/Block';

class App extends React.Component {
  state = {};

  render = () => {
    return (
      <>
        <Slider allowAnimate={false}>
          <Block style={{ backgroundColor: 'coral' }}>first Slide</Block>
          <Block style={{ backgroundColor: 'blue' }}>second Slide</Block>
          <Block style={{ backgroundColor: 'yellow' }}>third Slide</Block>
          <Block style={{ backgroundColor: 'green' }}>fourth Slide</Block>
        </Slider>
      </>
    );
  };
}

export default App;
