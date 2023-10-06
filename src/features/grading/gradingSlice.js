import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/errorMassageUtils";
import gradingService from "./gradingService";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getGrading = createAsyncThunk("grading/get-grading", async (_, thunkAPI) => {
  try {
    return await gradingService.getGrading();
  } catch (e) {
    return thunkAPI.rejectWithValue(extractErrorMessage(e));
  }
});

export const updateGrading = createAsyncThunk(
  "grading/update-grading",
  async (updateGrading, thunkAPI) => {
    try {
      return await gradingService.updateGrading(updateGrading);
    } catch (err) {
      return thunkAPI.rejectWithValue(extractErrorMessage(err));
    }
  },
);

export const gradingReducer = createSlice({
  name: "grading",
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
      .addCase(getGrading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGrading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.admin_list = action.payload;
      })
      .addCase(getGrading.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetAll } = gradingReducer.actions;
export default gradingReducer.reducer;
