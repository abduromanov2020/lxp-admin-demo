import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/errorMassageUtils";
import assignmentService from "./assignmentService";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAssignmentById = createAsyncThunk(
  "assignment/get-assignment-by-id",
  async (id, thunkAPI) => {
    try {
      return await assignmentService.getAssignmentById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const assignmentSlice = createSlice({
  name: "assignment",
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
      .addCase(getAssignmentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssignmentById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(getAssignmentById.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetState, reset, resetAll } = assignmentSlice.actions;
export default assignmentSlice.reducer;
