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

  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const citiesArray = useSelector((state) => state.cities.cityNames);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="text" onChange={handleInput} placeholder="Search Cities in Nigeria" />
      <div style={{
        width: '98%',
      }}
      >
        {citiesArray.filter((c) => {
          if (!search) {
            return c;
          }
          return c.toLowerCase().includes(search.toLowerCase());
        })
          .map((city, ind) => (
            <div
              className="cityHeader"
            // eslint-disable-next-line react/no-array-index-key
              key={ind + 1}
              style={{
                display: 'inline-block', border: '1px solid rgb(206, 197, 197)', padding: '4.5%', width: '40%', margin: '0 auto',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <NavLink
                  onClick={(e) => dispatch(LoadCitiesApi({ q: e.target.textContent }))}
                  style={{ textDecoration: 'none', color: '#fff' }}
                  to={`/${city}`}
                  className="cityLink"
                >
                  <i className="fa fa-angle-right"><h2 style={{ marginTop: '120px' }}>{city}</h2></i>
                </NavLink>
                <img src="https://i.ibb.co/th9z32D/download-2-removebg-preview.png" alt="ng-icon" width="30px" style={{ textAlign: 'center' }} />
              </div>
            </div>
          ))}

      </div>

    </div>
  );
}

export default Cities;
