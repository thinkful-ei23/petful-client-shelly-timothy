import { API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const ADOPT_DOG = 'ADOPT_DOG';
export const adoptDog = () => ({
  type: ADOPT_DOG
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/dogs`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchDogSuccess(data));
    })
    .catch(err => {
      dispatch(fetchDogError(err));
    });
};

export const fetchAdoptDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dogs`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(adoptDog());
    })
    .then(() => {
      dispatch(fetchDog());
    });
};
