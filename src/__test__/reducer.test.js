import citiesReducer from '../redux/cities/cities';

test('Check if the API is pending to load dataa', () => {
  const state = citiesReducer({ cities: { cityDetails: [], cityNames: [] } }, { type: './weatherapp/cities/GETCOUNTRIES/pending', meta: { requestId: 'lKFTqLGvRVEel11BdbaEt', requestStatus: 'pending' } });
  expect(state).toEqual({ cities: { cityDetails: [], cityNames: [] } });
});
