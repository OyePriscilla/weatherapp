// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

function CityDetails() {
  const citiesDetails = useSelector((state) => state.cityDetails);

  return (
    <div style={{ height: '100vh' }}>
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
              Humidity
            </h2>
            <span>{citiesDetails.humidity}</span>
          </div>
          <div className="detail">
            <h2>
              Country Code
            </h2>
            <span>{citiesDetails.country}</span>
          </div>
          <div className="detail">
            <h2>
              Wind Speed
            </h2>
            <span>{citiesDetails.speed}</span>
          </div>
          <div className="detail">
            <h2>
              Temperature
            </h2>
            <span>{citiesDetails.temp}</span>
          </div>
        </div>
        )}
    </div>
  );
}

export default CityDetails;
