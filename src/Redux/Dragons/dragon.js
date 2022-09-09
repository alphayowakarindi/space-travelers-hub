import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const api = 'https://api.spacexdata.com/v3/dragons';

// Action
const GET_DRAGONS = 'space-travalers-hub/dragons/GET_DRAGONS';
const RESERVE_DRAGON = 'space-travalers-hub/dragons/RESERVE_DRAGON';
const CANCEL_DRAGON = 'space-travalers-hub/dragons/CANCEL_DRAGON';

// redux thunks

export const fetchDragon = createAsyncThunk(GET_DRAGONS, async () => {
  const response = await fetch(api);
  const dragonList = await response.json();
  const updateDragonList = [];
  dragonList.forEach((dragon) => {
    updateDragonList.push({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      images: dragon.flickr_images,
    });
  });
  return updateDragonList;
});

export const reserveDragon = createAsyncThunk(RESERVE_DRAGON, async (id) => id);

export const cancelDragon = createAsyncThunk(CANCEL_DRAGON, async (id) => id);
// reducer

export default function dragonsReducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_DRAGONS}/fulfilled`:
      return action.payload;
    case `${RESERVE_DRAGON}/fulfilled`:
      return [...state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      })];
    case `${CANCEL_DRAGON}/fulfilled`:
      return [...state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      })];
    default:
      return state;
  }
}
