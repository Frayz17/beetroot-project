import React from 'react';
import { connect } from 'react-redux';
import Block from 'components/Block';
// import { getState } from 'Services/Store';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Block>{this.props.name}</Block>
      </>
    );
  };
}

export default connect((state, props) => {
  return {
    name: state.users.name
  };
})(App);
