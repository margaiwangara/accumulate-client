import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pixelsToRem } from '@/utils/styles';
import Logo from '@/components/App/Logo';

function DefaultNavbar() {
  return (
    <NavbarContainer>
      <Logo />
      <ul className="navbar-right list-unstyled">
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--whiteColor);
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: ${pixelsToRem(5)} ${pixelsToRem(10)};
`;

export default DefaultNavbar;
