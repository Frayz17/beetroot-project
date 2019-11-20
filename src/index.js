import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { posts, newStore, StoreProvider, nav } from 'Services/Store';

newStore({ posts, nav });

ReactDom.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
