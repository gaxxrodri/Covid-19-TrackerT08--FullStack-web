import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './style.scss';
import SearchInput from '../SearchInput';
import logo from '../../assets/logoC19.png';
import userAvatar from '../../assets/user-avatar.png';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const nameLoginButton = 'Login';
  const nameLogoutButton = 'Logout';
  return (
    <nav>
      <Link className="nav-element" to="/">
        <img className="nav-icon" src={logo} alt="icon" />
      </Link>
      <Link className="nav-element" to="/global">Global</Link>
      <Link className="nav-element" to="/mysavedplaces">My Saved Places</Link>
      <SearchInput />
      <Link className="nav-element" to="/login">
        { !isAuthenticated ? nameLoginButton : nameLogoutButton}
        <img className="user-avatar" src={userAvatar} alt="icon" />
      </Link>
    </nav>
  );
};

export default (Header);
