import React from 'react';
import { connect } from 'react-redux';
import Block from 'components/Block';
import Typography from 'components/Typography';
import Image from 'components/Image';

export default connect((state, { index = 0 }) => {
  const { comments, ...rest } = (state.posts.data || [])[index];

  return rest;
})(
  React.memo(
    ({
      title,
      img = '"https://picsum.photos/id/985/400/400.jpg"',
      text = '',
      likes = 0,
      dislikes = 0,
      created_at = ''
    }) => {
      return title ? (
        <Block>
          <Typography>{title}</Typography>
          <Image src={img} alt={title} />
        </Block>
      ) : (
        <React.Fragment />
      );
    }
  )
);
