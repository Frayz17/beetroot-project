import React from 'react';
import { connect } from 'react-redux';
import Block from 'components/Block';
import Slider from 'modules/Slider';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Block>{this.props.name}</Block>
        <Slider name="main" />
      </>
    );
  };
}

export default connect((state, props) => {
  return {
    name: state.users.name
  };
})(App);
