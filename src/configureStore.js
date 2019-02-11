import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const defaultState = {
  data: [],
  counter: 0,
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQEUST': {
      return state;
    }
    case 'SUCCESS': {
      return { ...action.payload };
    }
    case 'FAILURE': {
      return state;
    }
    case 'UP': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DOWN': {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
