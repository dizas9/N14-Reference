// colorChange.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#45856d",
};

export const ChangeColor = createSlice({
  name: "ChangeColorSlice",
  initialState,
  reducers: {
    renderColor(state) {
      state.color = "#ffffff";
    },
  },
});

export const { renderColor } = ChangeColor.actions;

export default ChangeColor.reducer;
