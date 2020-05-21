import { useState } from 'react';
import { useAuth } from '@/context/app/AuthContext';
import authUser from '@/context/actions/auth';

const INITIAL_STATE = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirm_password: '',
};

function useAuthForm(path) {
  const [value, setValue] = useState(INITIAL_STATE);
  const { dispatch } = useAuth();

  console.log();
  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    authUser(dispatch, path, value)
      .then(() => console.log('Boom!'))
      .catch(() => console.log('Oh Oh!'));

    setValue({ ...value, password: '', confirm_password: '' });
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
}

export default useAuthForm;
