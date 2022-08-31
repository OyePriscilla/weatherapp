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
    <div style={{ }}>
      {citiesArray.map((city, ind) => (
        <h2
          // eslint-disable-next-line react/no-array-index-key
          key={ind + 1}
          style={{
            width: '177px', height: '175px', backgroundColor: 'purple', display: 'inline-block', margin: '20px 5px 0 5px', textAlign: 'end',
          }}
        >
          <NavLink onClick={(e) => dispatch(LoadCitiesApi({ q: e.target.textContent }))} className="cityLink" style={{ textDecoration: 'none', color: '#fff' }} to={`/${city}`}>
            {city}
          </NavLink>
        </h2>
      ))}
    </div>
  );
}

export default Cities;
