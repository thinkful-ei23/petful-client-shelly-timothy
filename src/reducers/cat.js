import * as actions from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  if (action.type === actions.ADOPT_CAT) {
    return Object.assign({}, state, {
      data: null
    });
  }

  if (action.type === actions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      error: null,
      loading: false
    });
  } else if (action.type === actions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  } else {
    return state;
  }
};
