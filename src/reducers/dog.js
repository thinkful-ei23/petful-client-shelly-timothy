import * as actions from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  if (action.type === actions.ADOPT_DOG) {
    return Object.assign({}, state, {
      data: null
    });
  }

  if (action.type === actions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      error: null,
      loading: false
    });
  } else if (action.type === actions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  } else {
    return state;
  }
};
