import axios from "axios";

const refreshAccessToken = async (navigateTo) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const ifErrororWrong = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigateTo("./login");
  };
  try {
    if (refreshToken) {
      const response = await axios.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      localStorage.setItem("accessToken", response?.data?.access);
    } else {
      ifErrororWrong();
    }
  } catch (error) {
    ifErrororWrong();
  }
};
export default refreshAccessToken;
