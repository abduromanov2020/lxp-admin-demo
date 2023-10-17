import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/errorMassageUtils";
import courseService from "./courseService";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getCourses = createAsyncThunk("courses/get-courses", async (_, thunkAPI) => {
  try {
    return await courseService.getCourses();
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    resetAll: (state) => {
      state.data = {};
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetState, reset, resetAll } = courseSlice.actions;
export default courseSlice.reducer;
