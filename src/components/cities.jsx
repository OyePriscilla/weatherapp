import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchAsyncCountries } from '../redux/cities/cities';
import { LoadCitiesApi } from '../redux/cityDetails/cityDetails';

function Cities() {
  const [citiesLoaded, setCitiesLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (citiesLoaded) return;
    dispatch(fetchAsyncCountries());
    setCitiesLoaded(true);
  });

  const citiesArray = useSelector((state) => state.cityNames);

  return (
    <div style={{}}>
      {citiesArray.map((city, ind) => (
        <h2
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
