import { configureStore } from "@reduxjs/toolkit";
import { ibge } from "../../services/AddressService";
import { catalogApi } from "../../services/catalog";
import { register } from "../../services/register";

export const store = configureStore({
  reducer: {
    [ibge.reducerPath]: ibge.reducer,
    [register.reducerPath]: register.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ibge.middleware,
      register.middleware,
      catalogApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
