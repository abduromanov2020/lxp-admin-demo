import { getAuth } from "firebase/auth";
import app from "../../config/firebase";
import axios from "axios";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getAssignmentById = async (materialenrolled_id) => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(materialenrolled_id);

  const response = await axios.get(
    API_URL + "/studentmanagement/assignment/get",
    {
      params: {
        materialenrolled_id: "9adfcf7a-cac6-4db7-99ff-6f4221c2327d",
      },
    },
    config,
  );

  return response.data;
};

const assignmentService = {
  getAssignmentById,
};

export default assignmentService;
