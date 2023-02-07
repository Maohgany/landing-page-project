import React from 'react'
import styles from './Header.module.css';
import logo from "../../../images/logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Link to="/">
      <img src={logo} alt="Company logo"/>
      </Link>
      <nav>
        <ul>
            <li>
                <Link to="/features">Features</Link>
            </li>
            <li>
                <Link to="/team">Team</Link>
            
            </li>
            <li>
                <Link to="/signin">Sign In</Link>
            </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
