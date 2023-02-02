import { createStore } from '@reduxjs/toolkit'
import ItemReducer from './reducers/item-reducer';

const configureStore = (initialState) => {
  const store = createStore(ItemReducer, initialState);
  return store;
}

export default configureStore;