import React from 'react';
import { connect } from 'react-redux';
import Post from 'modules/Post';
import { TypographyHeader } from 'components/Typography';
import loadPosts from './loadPosts.js';

export default connect((state) => {
  return {
    postsLength: (state.posts || []).length || 0
  };
})(
  React.memo(({ postsLength }) => {
    // onMount
    React.useEffect(() => {
      loadPosts();
    }, []);

    return (
      <>
        <TypographyHeader>Posts page</TypographyHeader>
        {(() => {
          let i = 0,
            collector = [];

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
