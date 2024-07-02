// store.ts

import { configureStore } from "@reduxjs/toolkit";
import ChangeColorReducer from "./colorChange";
import UserReducer from "./userRegister";
import ToDoReducer from "./Todo";

const store = configureStore({
  reducer: {
    ChangeColor: ChangeColorReducer,
    User : UserReducer,
    ToDo: ToDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
