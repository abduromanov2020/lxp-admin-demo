import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/errorMassageUtils";
import studyPlanService from "./studyplanService";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getStudyPlan = createAsyncThunk("student/get-pending-plan", async (_, thunkAPI) => {
  try {
    return await studyPlanService.getStudyPlan();
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const approveStudyPlan = createAsyncThunk(
  "student/approve-plan",
  async (student_id, thunkAPI) => {
    try {
      return await studyPlanService.approveStudyPlan(student_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  },
);

export const studyPlanReducer = createSlice({
  name: "studyPlan",
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
      .addCase(getStudyPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudyPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.plan_list = action.payload;
      })
      .addCase(getStudyPlan.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(approveStudyPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveStudyPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(approveStudyPlan.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetState, reset, resetAll } = studyPlanReducer.actions;
export default studyPlanReducer.reducer;
