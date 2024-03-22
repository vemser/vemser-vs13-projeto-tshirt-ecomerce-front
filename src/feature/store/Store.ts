import { configureStore } from "@reduxjs/toolkit";
import { register } from "../../services/register";

export const store = configureStore({
  reducer: {
    [register.reducerPath]: register.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    register.middleware,
  ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
