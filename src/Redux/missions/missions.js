import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const GET_MISSIONS = 'space-travellers-hub/missions/GET_MISSIONS';
const api = 'https://api.spacexdata.com/v3/missions';

// Redux thunks
export const fetchMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const updatedMissions = [];
  const response = await fetch(api);
  const missions = await response.json();
  missions.map((mission) => {
    updatedMissions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    });
    return mission;
  });

  return updatedMissions;
});

// Reducer
export default function missionsReducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}
