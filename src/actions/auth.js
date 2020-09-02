import {types} from '~types';
import {firebase, googleAuthProvider} from '~firebase/firebase-config';

const loginWithEmail = (email, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(login(123, 'カルロスさん'));
    }, 3500);
  };
};

const loginWithGoogle = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({user}) => dispatch(login(user.uid, user.displayName)));
  };
};

const login = (uid, displayName) => ({
  type: types.login,
  payload: {uid, displayName},
});

export default {login, loginWithEmail, loginWithGoogle};
