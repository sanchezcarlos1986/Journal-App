import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from '~hooks';
import {useDispatch} from 'react-redux';
import {loginWithEmail, loginWithGoogle} from '~actions';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({});

  const handleLogin = e => {
    e.preventDefault();

    const {email, password} = values;

    dispatch(loginWithEmail(email, password));
  };

  const handleGoogleLogin = () => dispatch(loginWithGoogle());

  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          defaultValue={values.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          defaultValue={values.password}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create a new account
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
