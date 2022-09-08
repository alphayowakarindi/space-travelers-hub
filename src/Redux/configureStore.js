import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RocketReducers from './Rockets/Rocket';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  RocketReducers,
  missions: missionsReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
