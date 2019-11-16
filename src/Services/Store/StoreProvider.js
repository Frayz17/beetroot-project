import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from 'Services/Store';

export default ({ children }) => (
  <Provider store={getStore()}>{children}</Provider>
);
