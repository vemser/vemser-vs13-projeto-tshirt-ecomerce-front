import { configureStore } from "@reduxjs/toolkit";
import { ibge } from "../../services/AddressService";

export const store = configureStore({
  reducer: {
    [ibge.reducerPath]: ibge.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ibge.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
