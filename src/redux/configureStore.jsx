import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import citiesReducer from './cities/cities';
import cityDetailsReducer from './cityDetails/cityDetails';

const rootReducer = combineReducers({
  cityNames: citiesReducer,
  cityDetails: cityDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
