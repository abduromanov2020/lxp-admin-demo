import { getAuth } from "firebase/auth";
import app from "../../config/firebase";
import axios from "axios";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getAssignmentById = async (id) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + `/studentmanagement/assignment/get?id=${id}`, config);

  return response.data;
};

const assignmentService = {
  getAssignmentById,
};

export default assignmentService;
