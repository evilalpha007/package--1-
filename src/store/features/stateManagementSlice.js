import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oddPointToggle: false,
  oddPointValue: undefined,
  color: undefined,
};

export const stateManagementSlice = createSlice({
  name: "stateManagement",
  initialState,
  reducers: {
    handleOddPointToggle: (state, { payload }) => {
      state.oddPointValue = payload[0];
      state.oddPointToggle = payload[1];
      state.oddPointValue = payload[2];
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleOddPointToggle } = stateManagementSlice.actions;

export default stateManagementSlice.reducer;
