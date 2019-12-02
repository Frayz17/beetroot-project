import React from 'react';
import { connect } from 'react-redux';
import Post from 'modules/Post';
import { TypographyHeader } from 'components/Typography';
import loadPosts from './loadPosts.js';

// const pagesNumber = 4;
// let pageNumber = 1;

export default connect((state) => {
  return {
    postsLength: (state.posts || []).length || 0,
    page
  };
})(
  React.memo(({ postsLength }) => {
    // onMount
    React.useEffect(() => {
      loadPosts(pageNumber);
    }, []);

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      pageNumber++;
    }

    console.log(
      'document.documentElement.scrollTop',
      document.documentElement.scrollTop
    );
    console.log('window.innerHeight', window.innerHeight);

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
