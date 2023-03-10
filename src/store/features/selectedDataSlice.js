import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: null,
};

export const selectedDataSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    setLoad: (state, { payload }) => {
      state.load = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoad } = selectedDataSlice.actions;

export default selectedDataSlice.reducer;
