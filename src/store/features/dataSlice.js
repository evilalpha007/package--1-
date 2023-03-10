import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
      name: "EventAllMatch",
      data: [],
    },
  mobData: {
      name: "MobEventMatch",
      data: [],
    },
};


const dataState = createSlice({
    name: "dataState",
    initialState,
    reducers: {
        onChangeDataActive: (state, { payload }) => {
        state.data = payload
        state.mobData = payload
      },
    },
  });
  
  export const { onChangeDataActive } = dataState.actions;
  
  export default dataState.reducer;