import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RocketReducers from './Rockets/Rocket';
import missionsReducer from './missions/missions';
import dragonsReducer from './Dragons/dragon';

const rootReducer = combineReducers({
  RocketReducers,
  missions: missionsReducer,
  dragons: dragonsReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
