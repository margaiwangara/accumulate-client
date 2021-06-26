import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuthForm from '@/hooks/auth-form';
import { useError } from '@/context/app/ErrorContext';
import { removeError } from '@/context/actions/error';
import { passwordToggleStyle } from '@/utils/styles';
import ErrorHandler from '@/components/Error/ErrorHandler';

function AuthForm({ heading, subheading, path, btnText }) {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const history = useHistory();
  const { state, dispatch } = useError();
  const { value, handleChange, handleSubmit, handleForgotPassword, loading } =
    useAuthForm(path);

  history.listen(() => {
    dispatch(removeError());
  });

  return (
    <div className="card-body">
      <form className="form" method="post" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <h4 className="card-title font-weight-bold">{heading}</h4>
          <p className="lead my-1">{subheading}</p>
          <hr />
          <ErrorHandler error={state.error} />
          {path === 'register' ? (
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="user-circle" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={value.name}
                onChange={handleChange}
                autoComplete="family-name"
                required
              />
            </div>
          ) : null}
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon="at" />
              </span>
            </div>
            <input
              type="email"
              placeholder="E-Mail"
              className="form-control"
              name="email"
              value={value.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon="lock" />
              </span>
            </div>
            <input
              type={passwordToggle ? 'text' : 'password'}
              placeholder="Password"
              className="form-control"
              name="password"
              value={value.password}
              onChange={handleChange}
              autoComplete={
                path === 'register' ? 'new-password' : 'current-password'
              }
              required
            />
            <div className="input-group-append border-0 bg-white">
              <span
                onClick={(e) => setPasswordToggle(!passwordToggle)}
                style={passwordToggleStyle}
              >
                <FontAwesomeIcon
                  icon={passwordToggle ? 'eye-slash' : 'eye'}
                  color="#375a7f"
                />
              </span>
            </div>
          </div>
          {path === 'register' && (
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="lock" />
                </span>
              </div>
              <input
                type={confirmPasswordToggle ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="form-control"
                name="confirm_password"
                value={value.confirm_password}
                onChange={handleChange}
                autoComplete={
                  path === 'register' ? 'new-password' : 'current-password'
                }
                required
              />
              <div className="input-group-append border-0 bg-white">
                <span
                  style={passwordToggleStyle}
                  onClick={(e) =>
                    setConfirmPasswordToggle(!confirmPasswordToggle)
                  }
                >
                  <FontAwesomeIcon
                    icon={confirmPasswordToggle ? 'eye-slash' : 'eye'}
                    color="#375a7f"
                  />
                </span>
              </div>
            </div>
          )}
          {path === 'login' && (
            <div className="d-flex justify-content-end">
              <a
                href="#forgotpassword"
                className="small"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block my-2">
            {btnText}
          </button>
          <p className="text-center my-0 small">
            {path === 'login' ? (
              <>
                Not a member? <Link to="/register">Create Account</Link>
              </>
            ) : (
              <>
                Already a member? <Link to="/login">Access Account</Link>
              </>
            )}
          </p>
        </fieldset>
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  path: PropTypes.string,
  btnText: PropTypes.string,
};

export default AuthForm;
