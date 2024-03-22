import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type AuthRequest = {
  email: string;
  password: string;
};

const API_URL = import.meta.env.VITE_ECOMMERCE_API;

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User", "UserResponse"],
  endpoints: (builder) => ({
    login: builder.mutation<string, AuthRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useLoginMutation } = auth;
