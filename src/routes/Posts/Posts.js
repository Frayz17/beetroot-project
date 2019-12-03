import React from 'react';
import { connect } from 'react-redux';
import Post from 'modules/Post';
import { TypographyHeader } from 'components/Typography';
import loadPosts from './loadPosts.js';
import resetPosts from './resetPosts';
import { getState } from 'Services/Store';

const routesNumber = 4;

export default connect((state) => {
  return {
    postsLength: (state.posts.data || []).length || 0
  };
})(
  React.memo(({ postsLength }) => {
    let { page } = getState().posts;

    const handleLoad = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (
        offsetHeight > innerHeight &&
        innerHeight + scrollTop === offsetHeight
      ) {
        if (page < routesNumber) {
          loadPosts(++page);
        }
      }
    };

    // onMount
    React.useEffect(() => {
      loadPosts(page);
      window.addEventListener('scroll', handleLoad);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // onUnmount
    React.useEffect(
      () => () => {
        resetPosts();
        window.removeEventListener('scroll', handleLoad);
      },
      [] // eslint-disable-line react-hooks/exhaustive-deps
    );

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
