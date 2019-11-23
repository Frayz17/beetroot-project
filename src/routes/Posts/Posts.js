import React from 'react';
import { connect } from 'react-redux';
// import { getState } from 'Services/Store';
import Post from 'modules/Post';
import { TypographyHeader } from 'components/Typography';

export default connect(state => {
  return {
    postsLength: (state.posts || []).length || 0
  };
})(
  React.memo(({ postsLength }) => {
    return (
      <>
        <TypographyHeader>Posts</TypographyHeader>
        {(() => {
          let i = 0;
          let collector = [];

          while (i < postsLength) {
            collector.push(<Post key={i} index={i} />);
            i++;
          }

          return collector;
        })()}
      </>
    );
  })
);
