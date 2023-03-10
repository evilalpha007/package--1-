import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiSlice from "../features/apiSlice";
import asideStateReducer from "../features/asideSlice";
import selectedDataReducer from "../features/selectedDataSlice";
import stateManagementReducer from "../features/stateManagementSlice";
import dataStateReducer from "../features/dataSlice";
import authReducer from "../features/authSlice";
import { mainApi } from "../services/mainApi";

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    asideState: asideStateReducer,
    selectedData: selectedDataReducer,
    stateManagement: stateManagementReducer,
    dataState: dataStateReducer,
    auth: authReducer,
    match: apiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});
setupListeners(store.dispatch);
