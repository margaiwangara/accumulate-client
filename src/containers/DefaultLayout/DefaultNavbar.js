import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlurredImage from '@/assets/images/blurred-image-1.jpg';
import { useAuth } from '@/context/app/AuthContext';
// import Logo from '@/components/App/Logo';

function DefaultNavbar() {
  const { state } = useAuth();
  const [navbarColor, setNavbarColor] = useState('');
  const [collapseOpen, setCollapseOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(false);
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
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
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
                <li className="nav-item">
                  <div className="d-flex align-items-center">
                    <a className="nav-link font-weight-bold" href="#user">{`${
                      state.user.name
                    } ${state.user.surname ? state.user.surname : ''}`}</a>
                    {state.user.profileImage === 'no-image.jpg' ? (
                      <Link to="/profile">
                        <FontAwesomeIcon icon="user-circle" size="2x" />
                      </Link>
                    ) : (
                      <Link to="/profile">
                        <figure>
                          <img
                            src={state.user.profileImage}
                            alt={state.user.name}
                          />
                        </figure>
                      </Link>
                    )}
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
