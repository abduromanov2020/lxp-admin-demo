import axios from "axios";
import { getAuth } from "firebase/auth";
import app from "../../config/firebase";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getAdmin = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "admin/all", config);

  return response.data;
};

const getEmployee = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    API_URL + "studentmanagement/student/all",
    config
  );

  return response.data;
};

const userServices = {
  getAdmin,
  getEmployee,
};

export default userServices;
