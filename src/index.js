import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import {
  newStore,
  users,
  photos,
  comments,
  posts,
  StoreProvider
} from 'Services/Store';

newStore({ users, posts, comments, photos, sliders });

ReactDom.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
