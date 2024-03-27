import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatalogApiResponse } from "../types/Product";
import { API_URL } from "./api";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Product", "ProductResponse"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<CatalogApiResponse, void>({
      query: () => "/produto/todos-produtos?page=0&size=12",
    }),
  }),
});

export const { useGetAllProductsQuery } = catalogApi;
