import React from 'react';
// import { LogoContainer } from '@/utils/theme';
import LogoIcon from '@/assets/images/logo.svg';
import styled from 'styled-components';

function Logo() {
  return (
    <Figure>
      <img src={LogoIcon} alt="app-logo" />
    </Figure>
  );
}

const Figure = styled.figure`
  margin: 0;
  width: 200px;
  overflow: hidden;
  justify-self: center;
  padding-top: 15px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
export default Logo;
