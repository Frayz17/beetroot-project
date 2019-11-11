import React from 'react';
import DynamicSearch from 'modules/DynamicSearch';
import Slider from 'modules/Slider';
import Block from 'components/Block';

class App extends React.Component {
  state = {};

  render = () => {
    return (
      <>
        <Slider allowAnimate={true}>
          <Block>
            <Block style={{ backgroundColor: 'pink' }}>1 first Slide</Block>
            <Block style={{ backgroundColor: 'grey' }}>1 second Slide</Block>
            <Block style={{ backgroundColor: 'purple' }}>1 third Slide</Block>
            <Block style={{ backgroundColor: 'red' }}>1 fourth Slide</Block>
          </Block>
          <Block>
            <Block style={{ backgroundColor: 'coral' }}>2 first Slide</Block>
            <Block style={{ backgroundColor: 'blue' }}>2 second Slide</Block>
            <Block style={{ backgroundColor: 'yellow' }}>2 third Slide</Block>
            <Block style={{ backgroundColor: 'green' }}>2 fourth Slide</Block>
          </Block>
          <Block>
            <Block style={{ backgroundColor: 'coral' }}>3 first Slide</Block>
            <Block style={{ backgroundColor: 'blue' }}>3 second Slide</Block>
          </Block>
        </Slider>
      </>
    );
  };
}

export default App;
