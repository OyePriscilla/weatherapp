import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import citiesReducer from './cities/cities';

const rootReducer = {
  cities: citiesReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
