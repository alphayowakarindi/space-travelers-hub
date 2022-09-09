import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const api = 'https://api.spacexdata.com/v3/dragons';

// Action
const GET_DRAGONS = 'space-travalers-hub/dragons/GET_DRAGONS';

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

// reducer

export default function dragonsReducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_DRAGONS}/fulfilled`:
      return action.payload;
    default: return state;
  }
}
