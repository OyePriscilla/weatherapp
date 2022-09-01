import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', border: '3px solid rgb(206, 197, 197)', width: '100%',
    }}
    >
      <nav>
        <NavLink to="/" style={{ fontSize: '48px', color: '#fff', marginLeft: '30px' }}>
          <i className="fa fa-angle-left" />
        </NavLink>
      </nav>
      <h2 style={{ fontSize: '28px', color: '#fff' }}>Weather App</h2>
      <div style={{
        fontSize: '28px', color: '#fff', marginLeft: '130px', marginRight: '150px',
      }}
      >
        <i className="fa fa-microphone" style={{ marginRight: '10px' }} />
        <i className="fa fa-cog" />
      </div>
    </div>
  );
}

export default Header;
