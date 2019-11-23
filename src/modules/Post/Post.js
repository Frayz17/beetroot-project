import React from 'react';
import { connect } from 'react-redux';
import Block from 'components/Block';
import Typography from 'components/Typography';

export default connect((state, { index = 0 }) => {
  return {
    ...(state.posts || [])[index]
  };
})(
  React.memo(({ index, title, description }) => {
    return (
      <Block>
        <Typography>{title}</Typography>
      </Block>
    );
  })
);
