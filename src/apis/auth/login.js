import axios from "axios";
import { toast } from "react-toastify";
const login = async (values, actions, navigateTo) => {
  try {
    const response = await axios.post(`/api/login/`, values);
    if (response?.status === 200 && response?.data?.access) {
      localStorage.setItem("accessToken", response?.data?.access);
      localStorage.setItem("refreshToken", response?.data?.refresh);
      await actions.resetForm();
      navigateTo("/");
      toast.success("You have logged in successfully");
      return;
    }
  } catch (error) {
    console.log(error);
    if (
      error?.response?.status === 401 &&
      error?.response?.statusText === "Unauthorized"
    ) {
      toast.error("Invalid input");
    } else {
      toast.error("something went wrong");
    }
  }
};
export default login;
