import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { posts, newStore, StoreProvider, nav, menu } from 'Services/Store';
import GlobalStyles from './globalStyles';
import '@fortawesome/fontawesome-free/css/all.min.css';

newStore({ posts, nav, menu });

ReactDom.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
