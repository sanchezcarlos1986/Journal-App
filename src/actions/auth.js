import {types} from '~types';
import {firebase, googleAuthProvider} from '~firebase/firebase-config';

// Login
const loginWithEmail = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => dispatch(login(user.uid, user.displayName)));
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

// Register
const registerWithEmail = (email, password, name) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name});

        dispatch(login(user.uid, user.displayName));
      });
  };
};

const login = (uid, displayName) => ({
  type: types.login,
  payload: {uid, displayName},
});

export default {login, loginWithEmail, loginWithGoogle, registerWithEmail};
