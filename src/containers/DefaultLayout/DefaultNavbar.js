import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/app/AuthContext';
import { logoutUser } from '@/context/actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DefaultNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const { state, dispatch } = useAuth();

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-light fixed-top bg-dark"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            habari
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  href="#profile"
                  className="nav-link py-0 pl-2 dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  onClick={toggleDropdown}
                >
                  <span style={profileStyler}>{state.user.name.charAt(0)}</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right px-0"
                  style={{ display: dropdown ? 'block' : 'none' }}
                >
                  <Link to="/user/profile" className="dropdown-item">
                    <FontAwesomeIcon icon="user-circle" /> Account
                  </Link>
                  <Link to="/user/change-password" className="dropdown-item">
                    <FontAwesomeIcon icon="lock" /> Change Password
                  </Link>
                  <a
                    className="dropdown-item"
                    href="#logout"
                    onClick={(e) => {
                      e.preventDefault();
                      logoutUser(dispatch);
                    }}
                  >
                    <FontAwesomeIcon icon="sign-out-alt" /> Log Out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const profileStyler = {
  borderRadius: '50%',
  height: '35px',
  width: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0085a1',
  fontSize: '16px',
  color: '#ffffff',
  lineHeight: '32px',
  transition: 'color 0.3s ease, background-color 0.3s ease',
  textTransform: 'uppercase',
  padding: '1px 0 0 1px',
  flexShrink: 0,
  fontWeight: 'bold',
};
export default DefaultNavbar;
