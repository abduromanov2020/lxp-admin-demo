import { getAuth } from "firebase/auth";
import app from "../../config/firebase";
import axios from "axios";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getAdministrations = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/admin/administration", config);
  return response.data;
};

const updateAdministrations = async (dataToUpdate) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + "/admin/administration/approve", dataToUpdate, config);
  return response.data;
};

const createStudent = async (student) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "/studentmanagement/student/create", student, config);
  return response.data;
};

const administrationService = {
  getAdministrations,
  updateAdministrations,
  createStudent,
};
export default administrationService;
