import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthSuccess, setAuthError } from "./authSlice";
import { IAuthResponse, IUser } from "../types/authTypes";

axios.defaults.baseURL = "http://localhost:3001/";

// Utility to add JWT
const setAuthHeader = (token: string | null) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<
  IAuthResponse,
  Pick<IUser, "login" | "password" | "email">
>(
  "auth/register",
  async (
    credentials: Pick<IUser, "login" | "password" | "email">,
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/api/register", credentials);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk<
  IAuthResponse,
  Pick<IUser, "login" | "password">
>(
  "auth/signin",
  async (credentials: Pick<IUser, "login" | "password">, thunkAPI) => {
    try {
      const resp = await axios.post("api/login", credentials);

      const { token, user } = resp.data.data;

      thunkAPI.dispatch(setAuthSuccess({ token, user }));
      setAuthHeader(token);
      return resp.data;
    } catch (err: any) {
      if (err.response.status === 403) {
        thunkAPI.dispatch(setAuthError("Konto nie zweryfikowane"));
        return thunkAPI.rejectWithValue("Konto nie zweryfikowane");
      }
      console.error(err.message);
      thunkAPI.dispatch(setAuthError("Login failed ⚠"));
      return thunkAPI.rejectWithValue("Login failed ⚠");
    }
  }
);

export const refreshUser = createAsyncThunk<IUser, undefined>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/api/current");
      console.log("frontendowo:", res.data.data);

      return res.data.data;
    } catch (error: any) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
