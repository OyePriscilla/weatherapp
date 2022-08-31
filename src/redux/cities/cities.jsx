import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GETCOUNTRIES = './weatherapp/cities/GETCOUNTRIES';

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GETCOUNTRIES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchAsyncCountries = createAsyncThunk(GETCOUNTRIES, async () => {
  const res = await axios.get('https://countriesnow.space/api/v0.1/countries');
  const data = res.data.data[154].cities;
  return data;
});

export default citiesReducer;
