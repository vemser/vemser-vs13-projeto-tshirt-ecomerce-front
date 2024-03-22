import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ibge = createApi({
  reducerPath: "ibge",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://servicodados.ibge.gov.br/api/v1/localidades",
  }),
  tagTypes: ["IBGE"],
  endpoints: (builder) => ({
    getEstados: builder.query<void, void>({
      query: () => "estados?orderBy=nome",
    }),
    getCidades: builder.query({
      query: (idEstado: number) => `estados/${idEstado}/municipios`,
    }),
  }),
});

export const { useGetEstadosQuery, useGetCidadesQuery } = ibge;
