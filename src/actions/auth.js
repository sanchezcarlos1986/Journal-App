import {types} from '~types';

export const loginWithEmail = (email, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(login(123, 'カルロスさん'));
    }, 3500);
  };
};

const login = (uid, displayName) => ({
  type: types.login,
  payload: {uid, displayName},
});

export default login;
