// store.ts

import { configureStore } from "@reduxjs/toolkit";
import ChangeColorReducer from "./colorChange";
import UserReducer from "./userRegister";

const store = configureStore({
  reducer: {
    ChangeColor: ChangeColorReducer,
    User : UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
