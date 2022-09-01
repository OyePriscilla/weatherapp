import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchAsyncCountries, LoadCitiesApi } from '../redux/cities/cities';

function Cities() {
  const [citiesLoaded, setCitiesLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (citiesLoaded) return;
    dispatch(fetchAsyncCountries());
    setCitiesLoaded(true);
  });

  const citiesArray = useSelector((state) => state.cities.cityNames);
  return (
    <div style={{}}>
      <h2 style={{ color: '#fff', marginLeft: '20px' }}>List of Cities in Nigeria</h2>
      {citiesArray.map((city, ind) => (
        <h2
          className="cityHeader"
          // eslint-disable-next-line react/no-array-index-key
          key={ind + 1}
          style={{ display: 'inline-block' }}
        >
          <NavLink
            onClick={(e) => dispatch(LoadCitiesApi({ q: e.target.textContent }))}
            style={{ textDecoration: 'none', color: '#fff' }}
            to={`/${city}`}
            className="cityLink"
          >
            {city}
          </NavLink>
        </h2>
      ))}
    </div>
  );
}

export default Cities;
