import axios from "axios";
import { getAuth } from "firebase/auth";
import app from "../../config/firebase";

const API_URL = "https://www.mknows.my.id/lxp/api/v1/";

const getMe = async () => {
  const auth = getAuth(app);
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "admin/me", config);

  if (response?.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }

  return response.data;
};

const profileService = {
  getMe,
};

export default profileService;
