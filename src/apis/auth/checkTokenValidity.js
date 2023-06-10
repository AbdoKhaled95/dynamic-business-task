import axios from "axios";
import refreshAccessToken from "./refreshAccessToken";

const checkTokenValidity = async (navigateTo) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    if (accessToken) {
      await axios.post("/api/token/verify/", {
        token: accessToken,
      });
      return;
    } else {
      refreshAccessToken(navigateTo);
    }
  } catch (error) {
    refreshAccessToken(navigateTo);
  }
};
export default checkTokenValidity;
