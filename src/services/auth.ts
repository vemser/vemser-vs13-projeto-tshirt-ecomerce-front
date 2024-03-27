import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin } from "../types/Login";

const API_URL = import.meta.env.VITE_ECOMMERCE_API;

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User", "UserResponse"],
  endpoints: (builder) => ({
    login: builder.mutation<string, ILogin>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = auth;
