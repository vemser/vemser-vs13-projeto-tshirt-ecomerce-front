import { configureStore } from "@reduxjs/toolkit";
import { register } from "../../services/register";
import { ibge } from "../../services/AddressService";

export const store = configureStore({
  reducer: {
    [ibge.reducerPath]: ibge.reducer,
    [register.reducerPath]: register.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ibge.middleware, register.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;