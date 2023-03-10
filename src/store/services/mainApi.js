import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  
  baseQuery: fetchBaseQuery({
    baseUrl: "http://167.71.224.189/vandu1792",
  }),

  endpoints: (builder) => ({
    GetCricketMatches: builder.query({
      query: () => ({
        url: "/cricket",
      }),
    }),
    GetSoccerMatches: builder.query({
      query: () => ({
        url: "/soccer",
      }),
    }),
  }),
});

export const { useGetCricketMatchesQuery, useGetSoccerMatchesQuery } = mainApi;
// idar use pass kardo or fir call kara lo jaha karwana hai
// http://marketsarket.in:3000/getsoccermatches
//  http://marketsarket.in:3000/gettennismatches
