import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
