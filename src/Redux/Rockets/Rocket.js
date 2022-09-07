import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = 'space-travelers-hub/Rockets/FETCH_DATA ';
const RocketAPI = 'https://api.spacexdata.com/v3/rockets';
const ReserveTems = 'space-travelers-hub/Rockets/ReserveTems';
const CancelReservartion = 'space-travelers-hub/cancelReservartion';
const initialeState = [];
export default function RocketReducers(state = initialeState, action = {}) {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      action.payload.map((data) => state.push(data));
      return action.payload;
    case ReserveTems:
      // eslint-disable-next-line array-callback-return, consistent-return
      return state.map((item) => {
        if (item.id === action.id) return { ...item, id: item.id + 5 };
        return item;
      });

    case CancelReservartion:
      // eslint-disable-next-line array-callback-return, consistent-return
      return state.map((item) => {
        if (item.id === action.id) return { ...item, id: item.id - 5 };
        return item;
      });

    default:
      return state;
  }
}

export const FetchAPi = createAsyncThunk(FETCH_DATA, async () => {
  const APIData = await fetch(RocketAPI);
  const respoonse = await APIData.json();
  return respoonse;
});

export const ReserveData = (id) => ({
  type: ReserveTems,
  id,
});

export const cancrlData = (id) => ({
  type: CancelReservartion,
  id,
});
console.log(initialeState);
