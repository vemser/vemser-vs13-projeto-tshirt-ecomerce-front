import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RegisterData {
  email: string;
  senha: string;
}

const API_URL = import.meta.env.VITE_ECOMMERCE_API;

export const register = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({
    register: builder.mutation<string, RegisterData>({
      query: (body: RegisterData) => ({
        url: "auth/criar-cliente",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = register;
