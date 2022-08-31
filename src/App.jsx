import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Cities from './components/cities';
import CityDetails from './components/cityDetails';
import Header from './components/header';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="/:cityID" element={<CityDetails />} />
          <Route
            path="*"
            element={(
              <h2>
                Sorry cannot find this file.
                {' '}
                <Link to="/">Go back home...</Link>
              </h2>
)}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
