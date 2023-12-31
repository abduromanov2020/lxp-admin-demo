import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../config/firebase";

import authService from "./authServices";
import {
  //   extartErrorFirebase,
  extractErrorMessage,
} from "../../utils/errorMassageUtils";

const token = localStorage.getItem("token");

const initialState = {
  token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forget-password",
  async (user, thunkAPI) => {
    try {
      return await authService.forgotPassword(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login-with-email",
  async (loginData, thunkAPI) => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      const token = await auth.currentUser.getIdToken();

      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "auth/login-with-google",
  async (_, thunkAPI) => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      const token = await auth.currentUser.getIdToken();
      await authService.googleValidate(token);

      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.token = null;
    },
    resetDefault: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message =
          "Register berhasil! Silahkan lihat email anda (inbox atau spam) untuk melakukan verifikasi akun."; //action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message =
          "Reset Password berhasil! Silahkan lihat email anda (inbox atau spam)"; //action.payload.message;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.token = null;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Login berhasil! Halaman akan dialihkan.";
        state.token = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset, resetDefault } = authSlice.actions;
export default authSlice.reducer;
