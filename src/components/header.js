import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between',
    }}
    >
      <nav>
        <NavLink to="/" style={{ fontSize: '48px', color: '#fff' }}>
          <i className="fa fa-angle-left" />
        </NavLink>
      </nav>
      <h2 style={{ fontSize: '28px', color: '#fff' }}>Weather App</h2>
    </div>
  );
}

export default Header;
