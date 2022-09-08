import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const GET_MISSIONS = 'space-travellers-hub/missions/GET_MISSIONS';
const RESERVE_MISSION = 'space-travellers-hub/missions/RESERVE_MISSION';
const LEAVE_MISSION = 'space-travellers-hub/missions/LEAVE_MISSION';
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

export const reserveMission = createAsyncThunk(
  RESERVE_MISSION,
  async (missionId) => missionId,
);

export const leaveMission = createAsyncThunk(
  LEAVE_MISSION,
  async (missionId) => missionId,
);

// Reducer
export default function missionsReducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    case `${RESERVE_MISSION}/fulfilled`:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.payload) return mission;
          return { ...mission, reserved: true };
        }),
      ];
    case `${LEAVE_MISSION}/fulfilled`:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.payload) return mission;
          return { ...mission, reserved: false };
        }),
      ];
    default:
      return state;
  }
}
