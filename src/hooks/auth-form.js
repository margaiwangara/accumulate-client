import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '@/context/app/AuthContext';
import authUser, { forgotPassword } from '@/context/actions/auth';
import { useError } from '@/context/app/ErrorContext';
import { addError, removeError } from '@/context/actions/error';

const INITIAL_STATE = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirm_password: '',
};

function useAuthForm(path) {
  const [value, setValue] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const { dispatch: errorDispatch } = useError();
  const history = useHistory();

  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    authUser({ dispatch, errorDispatch }, path, value, history)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

    setValue({ ...value, password: '', confirm_password: '' });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!value.email) {
      const error = {
        message: 'Please provide an email address',
      };

      setLoading(false);

      errorDispatch(addError(error));
      return;
    }

    forgotPassword(value)
      .then(() => {
        setLoading(false);
        errorDispatch(removeError());
        alert(
          'An email to reset your password has been sent to the email address provided.',
        );
      })
      .catch((error) => {
        setLoading(false);
        errorDispatch(addError(error));
      });
  };

  return {
    value,
    handleChange,
    handleSubmit,
    handleForgotPassword,
    loading,
  };
}

export default useAuthForm;
