import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  hidePublicRoutes: false,
  adminLogin: false,
};

// when user is logged in then we have make hidePublicRoutes true  other wise we have to make it false

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, { payload }) => {
      state.login = payload.login;
      if (payload?.hidePublicRoutes)
        state.hidePublicRoutes = payload.hidePublicRoutes;
      if (payload?.adminLogin) state.adminLogin = payload.adminLogin;
    },
  },
});

export const { handelLogin } = authSlice.actions;

export default authSlice.reducer;
