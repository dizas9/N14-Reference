// store.ts

import { configureStore } from "@reduxjs/toolkit";
import ChangeColorReducer from "./colorChange";

const store = configureStore({
  reducer: {
    ChangeColor: ChangeColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
