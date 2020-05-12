import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pixelsToRem, fontSize } from '@/utils/styles';

// components
import Logo from '../App/Logo';
import AuthForm from './AuthForm';

function AuthCard({ heading, path }) {
  return (
    <AuthContainer>
      <Card>
        <Logo />
        <Heading3>{heading}</Heading3>
        <AuthForm path={path} />
      </Card>
    </AuthContainer>
  );
}

AuthCard.propTypes = {
  heading: PropTypes.string,
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
  gap: ${pixelsToRem(10)};
  box-shadow: 0 ${pixelsToRem(3)} ${pixelsToRem(7)} rgba(0, 0, 0, 0.16);
  width: 90%;
`;

const Heading3 = styled.h3`
  text-align: center;
  color: var(--primaryColor);
  ${fontSize(20)}
  letter-spacing: 0.25px;
`;

export default AuthCard;
