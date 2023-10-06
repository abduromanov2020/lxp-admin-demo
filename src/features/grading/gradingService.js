import { getAuth } from "firebase/auth";
import app from "../../config/firebase";
import axios from "axios";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getGrading = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/studentmanagement/student/assignment", config);
  return response.data;
};

const updateGrading = async (dataToUpdate) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + "studentmanagement/grade/assignment",
    dataToUpdate,
    config,
  );
  return response.data;
};

const gradingService = {
  updateGrading,
  getGrading,
};

export default gradingService;
