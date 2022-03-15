import React from 'react';
import logo from '../images/react-icon-small.png';

export default function Navbar() {
  return (
    <nav className='navbar-main'>
      <div className='navbar-header'>
        <img src={logo} alt='React Logo' />
        <h2>ReactFacts</h2>
      </div>
      <div className='navbar-subheading'>
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}
