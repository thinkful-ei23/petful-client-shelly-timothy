import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';

const store = createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
