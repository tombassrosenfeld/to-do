import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div
    className="header container"
  >
    <h1><Link to={"/"}>Tom's To-Do List</Link></h1>
  </div>
);



export default Header;