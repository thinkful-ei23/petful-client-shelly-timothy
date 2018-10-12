import { API_BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const ADOPT_CAT = 'ADOPT_CAT';
export const adoptCat = () => ({
  type: ADOPT_CAT
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/cats`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchCatSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCatError(err));
    });
};

export const fetchAdoptCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cats`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(adoptCat());
    })
    .then(() => {
      dispatch(fetchCat());
    });
};
