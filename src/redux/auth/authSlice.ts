import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "../types/authTypes";
import { logIn, refreshUser, register } from "./operations";


export interface RootState {
  auth: IAuthState;
}

const initialState: IAuthState = {
  user: { userId: null, login: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthSuccess(state, action: PayloadAction<{ user: any; token: any }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isAuth = true;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.error = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.error = "An error occurred during registration";
      }
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.error = null;
    });

    builder.addCase(logIn.rejected, (state, action) => {
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.error = "An error occurred during login";
      }
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    });
    


  },
});

export const { setAuthSuccess, setAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;