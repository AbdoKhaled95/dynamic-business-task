import axios from "axios";
import { toast } from "react-toastify";
const deleteContact = async (id, isLoading, setIsConfirming, navigateTo) => {
  isLoading(true);
  try {
    const response = await axios.delete(`/api/contact/${id}/`);
    if (response?.status === 204 && response?.statusText === "No Content") {
      isLoading(false);
      toast.success("Deleted successfully");
      navigateTo("/contacts");
      setIsConfirming(false);
    } else {
      isLoading(false);
      toast.success("something went wrong");
      setIsConfirming(false);
    }
  } catch (error) {
    setIsConfirming(false);
    isLoading(false);
    toast.error("something went wrong");
  }
};
export default deleteContact;
