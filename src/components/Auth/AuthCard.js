import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Alert } from '@/utils/theme';
import { pixelsToRem, media } from '@/utils/styles';

// components
import Logo from '../App/Logo';
import AuthForm from './AuthForm';

function AuthCard({ path }) {
  return (
    <AuthContainer>
      <Card>
        <Logo />
        {/* <Alert className="alert-danger">how are you?</Alert> */}
        <AuthForm path={path} />
      </Card>
    </AuthContainer>
  );
}

AuthCard.propTypes = {
  path: PropTypes.string,
};

const AuthContainer = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const Card = styled.article`
  padding: ${pixelsToRem(20)};
  background-color: var(--whiteColor);
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pixelsToRem(20)};
  box-shadow: 0 ${pixelsToRem(3)} ${pixelsToRem(7)} rgba(0, 0, 0, 0.16);
  width: 90%;
  transition: width 0.25s ease-in-out;

  @media screen and (min-width: ${media.sm}) {
    width: 60%;
  }

  @media screen and (min-width: ${media.md}) {
    width: 50%;
  }

  @media screen and (min-width: ${media.lg}) {
    width: 40%;
  }
`;

export default AuthCard;
