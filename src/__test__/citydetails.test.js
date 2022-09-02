import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Cities from '../components/cities';
import store from '../redux/configureStore';

describe('Test for Citydetails', () => {
  test('should render', () => {
    const city = {
      id: 1,
      humidity: '79',
      speed: '2.35',
      name: 'Aba',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Cities cities={city} key={1} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
