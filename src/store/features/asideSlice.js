import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside: [
    {
      name: "Favorites",
      isActive: false,
    },

    {
      name: "Cricket",
      isActive: true,
    },
    {
      name: "Greyhound Racing",
      isActive: false,
    },
    {
      name: "Horse Racing",
      isActive: false,
    },
    {
      name: "Soccer",
      isActive: false,
    },
    {
      name: "Tennis",
      isActive: false,
    },
    {
      name: "LiveCasino",
      isActive: false,
    },
    {
      name: "My Bets",
      isActive: false,
    },
    {
      name: "Betting Profit & Loss",
      isActive: false,
    },
    {
      name: "EventAllMatch",
      isActive: false,
    },
    {
      name: "MobEventMatch",
      isActive: false,
    },
  ],
};

const asideState = createSlice({
  name: "asideState",
  initialState,
  reducers: {
    onChangeAsideActive: (state, { payload }) => {
      state.aside = state.aside.map((ele) => {
        if (ele.name === payload) {
          ele.isActive = true;
          ele.data = payload.data;
        } else {
          ele.isActive = false;
        }
        return ele;
      });
    },
  },
});

export const { onChangeAsideActive } = asideState.actions;

export default asideState.reducer;
