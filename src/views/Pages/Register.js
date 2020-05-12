import React from 'react';
import styled from 'styled-components';
import { pixelsToRem, fontSize } from '@/utils/styles';

function Register() {
  return (
    <AuthContainer>
      <section className="auth-card">
        <div className="logo-container">logo</div>
        <h3>Welcome Back</h3>
        <form action="#auth" className="auth-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              name="name"
              id="nameField"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surnameField">Surname</label>
            <input
              type="text"
              name="surname"
              id="surnameField"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailField">Email</label>
            <input
              type="email"
              name="email"
              id="emailField"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordField">Password</label>
            <input
              type="password"
              name="password"
              id="passwordField"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPasswordField">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirmPasswordField"
              className="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </section>
    </AuthContainer>
  );
}

const AuthContainer = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  .auth-card {
    padding: ${pixelsToRem(20)};
    background-color: var(--whiteColor);
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pixelsToRem(10)};
    box-shadow: 0 ${pixelsToRem(3)} ${pixelsToRem(7)} rgba(0, 0, 0, 0.16);
    width: 90%;
  }

  .auth-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pixelsToRem(10)};
  }

  .form-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pixelsToRem(2.5)};

    label {
      ${fontSize(15)}
    }
  }

  .form-control {
    padding: ${pixelsToRem(8)} ${pixelsToRem(8)};
    outline: none;
    border: solid ${pixelsToRem(1)} var(--lightGreyColor);
    border-radius: ${pixelsToRem(10)};
    ${fontSize(15)}
    color: var(--blackColor);
  }

  .btn {
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
  }
`;
export default Register;
