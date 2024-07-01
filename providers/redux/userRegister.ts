import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userPropsType {
  isAuth: boolean;
  errMsg: string;
}

const initialState: userPropsType = {
  isAuth: false,
  errMsg: " ",
};

export const User = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    authController(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      const { username, password } = action.payload;

      if (username === "sazid" && password === "1234") {
        state.isAuth = true;
        state.errMsg = "";
      } else {
        state.isAuth = false;
        state.errMsg = "Invalid username or password";
      }
    },
  },
});

export const { authController } = User.actions;

export default User.reducer;
