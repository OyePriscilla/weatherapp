// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
// import { LoadCitiesApi } from '../redux/cities/cities';

function CityDetails() {
  // const [citiesLoaded, setCitiesLoaded] = useState(false);
  // const { query } = useParams();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (citiesLoaded) return;
  //   dispatch(LoadCitiesApi({ ...query }));
  //   setCitiesLoaded(true);
  // });

  const citiesDetails = useSelector((state) => state.cities.cityDetails);

  return (
    <div>
      { citiesDetails
        && (
        <>
          <h2>
            City name
            <span>{citiesDetails.name}</span>
          </h2>
          <h2>
            Humidity
            <span>{citiesDetails.humidity}</span>
          </h2>
          <h2>
            Temperature
            <span>{citiesDetails.temp}</span>
          </h2>
          <h2>
            Country Code
            <span>{citiesDetails.country}</span>
          </h2>
          <h2>
            Wind Speed
            <span>{citiesDetails.speed}</span>
          </h2>

        </>
        )}
    </div>
  );
}

export default CityDetails;
