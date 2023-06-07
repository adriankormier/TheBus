import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

const store = createStore(
  composeWithDevTools()
);

export default store;