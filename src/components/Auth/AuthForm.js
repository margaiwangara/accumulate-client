import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuthForm from '@/hooks/auth-form';
import { useError } from '@/context/app/ErrorContext';
import { removeError } from '@/context/actions/error';

function AuthForm({ heading, subheading, path, btnText }) {
  const history = useHistory();
  const { state, dispatch } = useError();
  const { value, handleChange, handleSubmit } = useAuthForm(path);

  history.listen(() => {
    dispatch(removeError());
  });

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>
      <div className="card-body p-0">
        <h3 className="card-title mb-3 mt-0 font-weight-bold">{heading}</h3>
        <p className="card-text">{subheading}</p>
        {Object.keys(state.error).length > 0 ? (
          <div className="alert alert-danger">
            {Array.isArray(state.error.message) ? (
              <ul className="list-unstyled p-0 m-0">
                {state.error.message.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            ) : (
              state.error.message
            )}
          </div>
        ) : null}
        {path === 'register' ? (
          <div className="input-group no-border input-lg">
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
        <div className="input-group no-border input-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon="at" />
            </span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={value.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        <div className="input-group no-border input-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon="lock" />
            </span>
          </div>
          <input
            type="password"
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
        </div>
      </div>
      <div className="card-footer text-center">
        <button
          type="submit"
          className="btn btn-primary btn-round btn-lg btn-block mb-3"
        >
          {btnText}
        </button>
        <h6 className="text-center mt-2">
          {path === 'login' ? (
            <>
              Not a member?{' '}
              <Link to="/register" className="link">
                Create Account
              </Link>
            </>
          ) : (
            <>
              Already a member?{' '}
              <Link to="/login" className="link">
                Access Account
              </Link>
            </>
          )}
        </h6>
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  path: PropTypes.string,
  btnText: PropTypes.string,
};

export default AuthForm;
