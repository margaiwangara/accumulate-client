import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Image from '@/assets/images/auth-bg.jpg';
import { useAuth } from '@/context/app/AuthContext';
import { useError } from '@/context/app/ErrorContext';
import apiRequest from '@/services/api';
import { setAuthorizationToken, setCurrentUser } from '@/context/actions/auth';
import { addError, removeError } from '@/context/actions/error';

function Profile() {
  const history = useHistory();
  const { state, dispatch } = useAuth();
  const { state: errorState, dispatch: errorDispatch } = useError();

  if (!state.isAuthenticated) {
    history.push('/login');
  }

  const INITIAL_STATE = {
    email: state.user.email ? state.user.email : '',
    name: state.user.name ? state.user.name : '',
    surname: state.user.surname ? state.user.surname : '',
    profileImage:
      state.user.profileImage !== 'no-image.jpg' ? state.user.profileImage : '',
  };

  const [value, setValue] = useState(INITIAL_STATE);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser()
      .then(() => console.log('Success is assured'))
      .catch(() => console.log('To err is human, also machines'));
  };

  const editUser = async () => {
    // set token header
    if (localStorage.jwt) {
      setAuthorizationToken(localStorage.jwt);
    }
    try {
      const user = await apiRequest('put', '/api/auth/account/edit', value);
      dispatch(setCurrentUser(user.updatedUser));
      errorDispatch(removeError());
      setSuccess(true);
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
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <figure className="photo-container">
                    <img
                      src={Image}
                      alt="user-avatar"
                      width="100"
                      height="100"
                      className="rounded-circle img-responsive"
                    />
                  </figure>
                  <h3 className="title text-capitalize p-0">{`${
                    state.user.name
                  } ${state.user.surname ? state.user.surname : ''}`}</h3>
                  <p className="category text-lowercase font-weight-normal">
                    {state.user.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="title mb-2">Edit Profile</h3>
                  <form
                    action="#action"
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    {success && (
                      <>
                        <div className="alert alert-success">
                          Profile Updated
                        </div>
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
                      <label htmlFor="nameField">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="nameField"
                        className="form-control"
                        placeholder="Name"
                        autoComplete="off"
                        value={value.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="surnameField">Surname</label>
                      <input
                        type="text"
                        name="surname"
                        id="surnameField"
                        className="form-control"
                        placeholder="Surname"
                        autoComplete="off"
                        value={value.surname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailField">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="emailField"
                        className="form-control"
                        placeholder="Email"
                        value={value.email}
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="profileField">Profile Image</label>
                      <input
                        type="file"
                        name="profile_image"
                        id="profileField"
                        className="form-control"
                      />
                    </div>
                    <button className="btn btn-primary">Edit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <h3 className="title">Bookmarks</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
