import axios from "axios";
import { getAuth } from "firebase/auth";
import app from "../../config/firebase";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getStudyPlan = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "studentmanagement/studyplan/get", config);

  return response.data;
};

const approveStudyPlan = async (student_id) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "studentmanagement/studyplan/accept",
    student_id,
    config,
  );

  return response.data;
};

const studyPlanService = {
  getStudyPlan,
  approveStudyPlan,
};

export default studyPlanService;
