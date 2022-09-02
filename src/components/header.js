import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', border: '1px solid rgb(206, 197, 197)', width: '95%', margin: '0 auto',
    }}
    >
      <nav>
        <NavLink to="/" style={{ fontSize: '38px', color: '#fff', marginLeft: '10px' }}>
          <i className="fa fa-angle-left" style={{ width: '20%' }} />
        </NavLink>
      </nav>
      <h2 style={{ fontSize: '18px', color: '#fff', width: '3%' }}>WEATHER</h2>
      <div style={{
        fontSize: '18px', color: '#fff', marginLeft: '130px', marginRight: '150px',
      }}
      >
        <i className="fa fa-microphone" style={{ marginRight: '2px' }} />
        <i className="fa fa-cog" />
      </div>
    </div>
  );
}

export default Header;
