import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/" style={{ margin: '20px 0 50px 40px' }}>Countries</NavLink>
      </nav>
    </div>
  );
}

export default Header;
