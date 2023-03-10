import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchMatchData = createAsyncThunk("fetchMatchData", async () => {
  const response = await fetch("http://marketsarket.in:3000/getcricketmatches");
  console.log(response);
  return response.json();
});

const apiSlice = createSlice({
  name: "match",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMatchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMatchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMatchData.rejected, (state, action) => {
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});

export default apiSlice.reducer;
