import {types} from '~types';
import {firebase, googleAuthProvider} from '~firebase/firebase-config';

export const loginWithEmail = (email, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(login(123, 'カルロスさん'));
    }, 3500);
  };
};

export const loginWithGoogle = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({user}) => dispatch(login(user.uid, user.displayName)));
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {uid, displayName},
});
