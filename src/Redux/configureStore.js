import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';

import RocketReducers from './Rockets/Rocket';

const RootReducer = combineReducers({
  RocketReducers,
});

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;
