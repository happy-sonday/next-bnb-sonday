import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//*초기상태
const initialState: { authMode: "signup" | "login" } = {
  authMode: "signup",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthMode(state: any, action: PayloadAction<"signup" | "login">) {
      state.authMode = action.payload;
    },
  },
});

export const authActions = { ...auth.actions };

export default auth;
