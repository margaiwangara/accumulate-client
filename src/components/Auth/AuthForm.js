import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pixelsToRem, fontSize } from '@/utils/styles';
import useAuthForm from '@/hooks/auth-form';

function AuthForm({ path }) {
  const { value, handleChange, handleSubmit } = useAuthForm(path);
  return (
    <AuthFormContainer autoComplete="off" onSubmit={handleSubmit}>
      {path === 'register' ? (
        <>
          <AuthFormGroup>
            <label htmlFor="nameField">Name</label>
            <AuthFormInput
              type="text"
              name="name"
              id="nameField"
              placeholder="Name"
              value={value.name}
              onChange={handleChange}
              required
            />
          </AuthFormGroup>
          <AuthFormGroup>
            <label htmlFor="surnameField">Surname</label>
            <AuthFormInput
              type="text"
              name="surname"
              id="surnameField"
              placeholder="Surname"
              value={value.surname}
              onChange={handleChange}
            />
          </AuthFormGroup>
        </>
      ) : null}
      <AuthFormGroup>
        <label htmlFor="emailField">Email</label>
        <AuthFormInput
          type="email"
          name="email"
          id="emailField"
          placeholder="johndoe@example.io"
          value={value.email}
          onChange={handleChange}
          required
        />
      </AuthFormGroup>
      <AuthFormGroup>
        <label htmlFor="passwordField">Password</label>
        <AuthFormInput
          type="password"
          name="password"
          id="passwordField"
          placeholder="Password"
          value={value.password}
          onChange={handleChange}
          required
        />
      </AuthFormGroup>
      {path === 'register' ? (
        <AuthFormGroup>
          <label htmlFor="confirmPasswordField">Confirm Password</label>
          <AuthFormInput
            type="password"
            name="confirm_password"
            id="confirmPasswordField"
            placeholder="Confirm Password"
            value={value.confirm_password}
            onChange={handleChange}
            required
          />
        </AuthFormGroup>
      ) : null}
      <Button type="submit" className="btn btn-primary">
        {path === 'login' ? 'Log In' : 'Register'}
      </Button>
      <p>
        {path === 'login' ? (
          <>
            Not a member? <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            Already a member? <Link to="/login">Log In</Link>
          </>
        )}
      </p>
    </AuthFormContainer>
  );
}

AuthForm.propTypes = {
  path: PropTypes.string,
};

const AuthFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pixelsToRem(10)};

  p {
    ${fontSize(13)}
    letter-spacing: 0.25px;
    font-weight: 600;
    justify-self: center;
    padding: ${pixelsToRem(5)} 0;
    color: var(--blackColor);

    a {
      color: var(--primaryColor);
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const AuthFormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pixelsToRem(2.5)};

  label {
    ${fontSize(15)}
  }
`;

const AuthFormInput = styled.input`
  padding: ${pixelsToRem(8)} ${pixelsToRem(8)};
  outline: none;
  border: solid ${pixelsToRem(1)} var(--lightGreyColor);
  border-radius: ${pixelsToRem(10)};
  ${fontSize(15)}
  color: var(--blackColor);

  &::placeholder {
    color: var(--lightGreyColor);
  }
`;

const Button = styled.button`
padding: ${pixelsToRem(8)};
    text-transform: capitalize;
    font-weight: 400;
    ${fontSize(15)}
    border-radius: ${pixelsToRem(10)};
    cursor: pointer;
    letter-spacing: ${pixelsToRem(0.5)};
    

    &.btn-primary {
      background-color: var(--primaryColor);
      color: var(--whiteColor);
      border: solid ${pixelsToRem(1)} var(--primaryColor);
      
      &:hover {
        color: var(--primary);
        background-color: var(--whiteColor);
      }
    }
`;

export default AuthForm;
