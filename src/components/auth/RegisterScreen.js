import React from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import {useForm} from '~hooks';

const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({});

  const {name, email, password, password2} = values;

  const handleRegister = e => {
    e.preventDefault();

    if (isFormValid()) {
      console.log({name, email, password, password2});
    }

    // dispatch(loginWithEmail(email, password));
  };

  const isFormValid = () => {
    if (name && email && password && password2) {
      if (name.trim().length === 0) {
        console.warn('name can not be empty');
        return false;
      } else if (!validator.isEmail(email)) {
        console.warn('email is not valid');
        return false;
      } else if (password !== password2 || password.length < 5) {
        console.warn('password is too short or passwords does not match');
        return false;
      }
    } else {
      console.log('form not valid');
      return false;
    }

    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
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
