import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

export default connect((state, props) => {
  return {
    // x: state.test.x
  };
})(
  React.memo(({ history }) => {
    return <b>Home Page</b>;
  })
);
