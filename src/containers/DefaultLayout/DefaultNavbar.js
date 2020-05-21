import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pixelsToRem, fontSize } from '@/utils/styles';
// import Logo from '@/components/App/Logo';

function DefaultNavbar() {
  return (
    <NavbarContainer>
      <section className="navbar-inner">
        <h3>accumulate</h3>
        <ul className="navbar-right list-unstyled">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          {/* <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li> */}
        </ul>
      </section>
      {/* <Logo /> */}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--whiteColor);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.16);

  .navbar-inner {
    width: 90%;
    padding: ${pixelsToRem(15)} ${pixelsToRem(20)};
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  h3 {
    color: var(--primaryColor);
    ${fontSize(22)}
  }

  figure {
    width: ${pixelsToRem(115)};
    padding: 0;
  }

  .navbar-right {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: ${pixelsToRem(15)};

    a {
      color: var(--primaryColor);
      display: block;
      border-bottom: solid ${pixelsToRem(2)} transparent;
      text-transform: uppercase;
      font-weight: 600;
      padding: ${pixelsToRem(2.5)} 0;
      ${fontSize(15)}

      &.active, &:hover {
        border-bottom-color: var(--primaryColor);
      }
    }
  }
`;

export default DefaultNavbar;
