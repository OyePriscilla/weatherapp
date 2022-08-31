import { createAsyncThunk } from '@reduxjs/toolkit';

const LOADAPI = './weatherapp/cityDetails/LOADAPI';

const cityDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case `${LOADAPI}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const API_KEY = '6bde419484d453df852f9362ccdc4f99';
const baseURL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = (info, searchParams) => {
  const url = new URL(`${baseURL}/${info}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url)
    .then((res) => res.json());
};

const formatedCurrentData = async (data) => {
  const {
    coord: { lat, lon },
    id,
    name,
    wind: { speed, deg },
    main: { temp, humidity },
    sys: { country, sunrise, sunset },
  } = data;
  return {
    lat, lon, id, name, speed, deg, temp, country, sunrise, sunset, humidity,
  };
};

const arrangedWeatherData = async (searchParams) => {
  const arrangeWeatherData = await getWeatherData('weather', searchParams).then(formatedCurrentData);
  return arrangeWeatherData;
};

export const LoadCitiesApi = createAsyncThunk(LOADAPI, async (searchParams) => {
  const data = await arrangedWeatherData(searchParams);
  return (data);
});

export default cityDetailsReducer;
