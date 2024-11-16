import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios/axiosFetch";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: (builder) => ({}),
});
