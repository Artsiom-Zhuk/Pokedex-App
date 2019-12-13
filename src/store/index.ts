import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer, initialState } from './reducer';

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware()),
);