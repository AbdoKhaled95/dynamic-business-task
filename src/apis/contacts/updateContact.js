import axios from "axios";
import { toast } from "react-toastify";
const updateContact = async (values, id) => {
  try {
    const response = await axios.put(`/api/contact/${id}/`, values);
    if (response?.status === 200 && response?.statusText === "OK") {
      toast.success("Contact Updated successfully");
      return;
    } else {
      toast.error("something went wrong");
      return;
    }
  } catch (error) {
    toast.error("something went wrong");
  }
};
export default updateContact;
