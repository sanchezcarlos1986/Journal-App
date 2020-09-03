import React from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import {uiActions} from '~actions';
import {useForm} from '~hooks';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {
    ui: {msgError},
  } = useSelector(state => state);

  const {setError, removeError} = uiActions;
  const [values, handleInputChange] = useForm({});
  const {name, email, password, password2} = values;

  const handleRegister = e => {
    e.preventDefault();

    if (isFormValid()) {
      // console.log({name, email, password, password2});
    }

    // dispatch(loginWithEmail(email, password));
  };

  const isFormValid = () => {
    if (name && email && password && password2) {
      if (name.trim().length === 0) {
        dispatch(setError('Please enter a name'));
        return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError('Please enter a valid email'));
        return false;
      } else if (password !== password2 || password.length < 5) {
        dispatch(setError('Password is too short or passwords does not match'));
        return false;
      }
    } else {
      dispatch(setError('Form can not be empty'));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      {msgError ? (
        <div className="alert alert-warning" role="alert">
          {msgError}
        </div>
      ) : null}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mt-5 mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
