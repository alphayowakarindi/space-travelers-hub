import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RocketReducers from './Rockets/Rocket';

const rootReducer = combineReducers({ RocketReducers });
const store = configureStore({ reducer: rootReducer });
export default store;
