import {types} from '~types';

const setError = err => ({
  type: types.uiSetError,
  payload: err,
});

const removeError = () => ({
  type: types.uiRemoveError,
});

export default {setError, removeError};
