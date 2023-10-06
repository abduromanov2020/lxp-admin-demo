import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/errorMassageUtils";
import administrationService from "./administrationService";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAdministrations = createAsyncThunk("admin/get-admin", async (_, thunkAPI) => {
  try {
    return await administrationService.getAdministrations();
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const updateAdministrations = createAsyncThunk(
  "admin/update-admin",
  async (userId, thunkAPI) => {
    try {
      return await administrationService.updateAdministrations(userId); // Call your updateAdmin function from the service
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const createStudent = createAsyncThunk("admin/create-student", async (student, thunkAPI) => {
  try {
    return await administrationService.createStudent(student); // Call your updateAdmin function from the service
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const administrationReducer = createSlice({
  name: "administration",
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
      .addCase(getAdministrations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdministrations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.admin_list = action.payload;
      })
      .addCase(getAdministrations.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAdministrations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdministrations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(updateAdministrations.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetAll } = administrationReducer.actions;
export default administrationReducer.reducer;
