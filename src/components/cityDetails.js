import { useSelector } from 'react-redux';
import React from 'react';

function CityDetails() {
  const citiesDetails = useSelector((state) => state.cities.cityDetails);

  return (
    <div>
      { citiesDetails
      && (
      <div>
        <div style={{ textAlign: 'center', color: '#fff', fontSize: '34px' }}>
          <h2>
            {citiesDetails.name}
          </h2>
        </div>
        <div className="detail">
          <h2>
            <i className="fa fa-adjust" />
          </h2>
          <span>{citiesDetails.humidity}</span>
        </div>
        <div className="detail">
          <h2>
            ISO
          </h2>
          <span>{citiesDetails.country}</span>
        </div>
        <div className="detail">
          <h2>
            <i className="fa fa-snowflake-o" />
          </h2>
          <span>{citiesDetails.speed}</span>
        </div>
        <div className="detail">
          <h2>
            <i className="fa fa-thermometer-empty" />
          </h2>
          <span>{citiesDetails.temp}</span>
        </div>
      </div>
      )}
    </div>
  );
}

export default CityDetails;
