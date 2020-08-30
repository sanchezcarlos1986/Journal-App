import {types} from '~types';

const login = (uid, displayName) => ({
  type: types.login,
  payload: {uid, displayName},
});

export default login;
