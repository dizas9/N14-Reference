// colorChange.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#45856d",
};

export const ChangeColor = createSlice({
  name: "ChangeColor",
  initialState,
  reducers: {
    renderColor(state) {
      state.color = "#ffffff";
    },
  },
});

export const { renderColor } = ChangeColor.actions;

export default ChangeColor.reducer;
