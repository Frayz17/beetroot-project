import React from 'react';
import { connect } from 'react-redux';
import Slider from 'modules/Slider';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Slider name='main' />
      </>
    );
  };
}

export default connect((state, props) => {
  return {
    name: state.users.name
  };
})(App);
