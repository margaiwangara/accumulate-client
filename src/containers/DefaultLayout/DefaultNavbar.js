import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Identicons from 'react-identicons';
import BlurredImage from '@/assets/images/blurred-image-1.jpg';
import { useAuth } from '@/context/app/AuthContext';
import { logoutUser } from '@/context/actions/auth';
// import Logo from '@/components/App/Logo';

function DefaultNavbar() {
  const { state, dispatch } = useAuth();
  const [navbarColor, setNavbarColor] = useState('');
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(false);
  const dropdown = useRef(null);
  const toggler = useRef(null);
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <nav
        className={
          'navbar navbar-expand-lg bg-primary fixed-top ' + navbarColor
        }
      >
        <div className="container">
          <div className="navbar-translate">
            <Link
              to="/"
              className="navbar-brand"
              rel="noopener noreferrer tooltip"
              title="Accumulate.Designed by Invision. Coded by Creative Tim"
              data-placement="bottom"
            >
              accumulate
            </Link>
            <button
              className="navbar-toggler navbar-toggler"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
            >
              <FontAwesomeIcon icon="bars" />
              {/* <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span> */}
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
            data-nav-image={BlurredImage}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {!state.isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="noopener noreferrer tooltip"
                      title="Like us on Facebook"
                      data-placement="bottom"
                      href="https://www.github.com/margaiwangara"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                      <p className="d-lg-none d-xl-none">Github</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="noopener noreferrer tooltip"
                      title="Facebook"
                      data-placement="bottom"
                      href="https://www.facebook.com/margaiwangara"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
                      <p className="d-lg-none d-xl-none">Facebook</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="noopener noreferrer tooltip"
                      title="Follow us on Instagram"
                      data-placement="bottom"
                      href="https://www.instagram.com/margai.wangara"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                      <p className="d-lg-none d-xl-none">Instagram</p>
                    </a>
                  </li>
                </>
              ) : (
                ''
              )}
              {state.isAuthenticated ? (
                <li className="nav-item dropdown">
                  <a
                    ref={toggler}
                    href="#dropdown"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggleDropdown(!toggleDropdown);
                    }}
                    className="nav-link font-weight-bold dropdown-toggle d-flex align-items-center"
                  >
                    {`${state.user.name} ${state.user.surname}`}
                    <FontAwesomeIcon
                      icon="user-circle"
                      size="2x"
                      className="ml-1"
                    />
                  </a>
                  <div
                    className="dropdown-menu p-0 dropdown-menu-right mt-3"
                    ref={dropdown}
                    style={{
                      visibility: toggleDropdown ? 'visible' : 'hidden',
                      opacity: toggleDropdown ? 1 : 0,
                    }}
                  >
                    <Link to="/user/profile" className="dropdown-item my-0">
                      Profile
                    </Link>
                    <Link
                      to="/user/change-password"
                      className="dropdown-item my-0"
                    >
                      Change Password
                    </Link>
                    <div className="dropdown-divider my-0"></div>
                    <a
                      href="#logout"
                      className="dropdown-item my-0"
                      onClick={(e) => {
                        e.preventDefault();
                        logoutUser(dispatch);
                      }}
                    >
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DefaultNavbar;
