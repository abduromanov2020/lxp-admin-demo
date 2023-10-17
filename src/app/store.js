import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import userReducer from "../features/user/userSlice";
import administrationReducer from "../features/administration/administrationSlice";
import studyPlanReducer from "../features/studyplan/studyplanSlice";
import gradingReducer from "../features/grading/gradingSlice";
import courseReducer from "../features/courses/courseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    users: userReducer,
    administration: administrationReducer,
    studyPlan: studyPlanReducer,
    grading: gradingReducer,
    courses: courseReducer,
  },
});
