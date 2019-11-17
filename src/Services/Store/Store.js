import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let Store = null;

export const newStore = (reducers = {}, middleware) => {
  const combined = combineReducers(reducers);
  const applied = applyMiddleware(
    thunk,
    !middleware ? store => next => action => next(action) : middleware
  );

  return (Store = createStore(combined, undefined, applied));
};

export const getStore = () => {
  return Store;
};

export const getState = () => {
  return Store.getState();
};
