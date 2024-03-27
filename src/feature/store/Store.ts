import { configureStore } from "@reduxjs/toolkit";
import { register } from "../../services/register";
import { ibge } from "../../services/AddressService";
import { auth } from "../../services/auth";

export const store = configureStore({
  reducer: {
    [ibge.reducerPath]: ibge.reducer,
    [register.reducerPath]: register.reducer,
    [auth.reducerPath]: auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      auth.middleware,
      register.middleware,
      ibge.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
