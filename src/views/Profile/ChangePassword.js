import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '@/context/app/AuthContext';
import { useError } from '@/context/app/ErrorContext';
import apiRequest from '@/services/api';
import { setAuthorizationToken } from '@/context/actions/auth';
import { addError, removeError } from '@/context/actions/error';

function ChangePassword() {
  const history = useHistory();
  const { state } = useAuth();
  const { state: errorState, dispatch: errorDispatch } = useError();

  if (!state.isAuthenticated) {
    history.push('/login');
  }

  const INITIAL_STATE = {
    current_password: '',
    password: '',
    confirm_password: '',
  };

  const [value, setValue] = useState(INITIAL_STATE);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    changePassword()
      .then(() => console.log('Success is assured'))
      .catch(() => console.log('To err is human, also machines'));
  };

  const changePassword = async () => {
    // set token header
    if (localStorage.jwt) {
      setAuthorizationToken(localStorage.jwt);
    }
    try {
      await apiRequest('put', '/api/auth/account/edit/password', {
        oldPassword: value.current_password,
        password: value.password,
        confirmPassword: value.confirm_password,
      });
      errorDispatch(removeError());
      setSuccess(true);
      setValue(INITIAL_STATE);
    } catch (error) {
      errorDispatch(addError(error));
    }
  };

  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  if (success) {
    // close success box after 3secs
    setTimeout(() => setSuccess(false), 3000);
  }

  if (Object.keys(errorState.error).length > 0) {
    // dispatch remove error after 5sec
    setTimeout(() => errorDispatch(removeError()), 5000);
  }

  return (
    <div className="pt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="title mb-2">Change Password</h3>
              <form action="#changepassword" onSubmit={handleSubmit}>
                {success && (
                  <>
                    <div className="alert alert-success">Password Changed</div>
                  </>
                )}
                {Object.keys(errorState.error).length > 0 ? (
                  <div className="alert alert-danger">
                    {Array.isArray(errorState.error.message) ? (
                      <ul className="list-unstyled p-0 m-0">
                        {errorState.error.message.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </ul>
                    ) : (
                      errorState.error.message
                    )}
                  </div>
                ) : null}
                <div className="form-group">
                  <label htmlFor="currentPasswordField">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPasswordField"
                    placeholder="Current Password"
                    name="current_password"
                    value={value.current_password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordField">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordField"
                    placeholder="Password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPasswordField">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirmPasswordField"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={value.confirm_password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
