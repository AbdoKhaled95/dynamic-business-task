import axios from "axios";
import { toast } from "react-toastify";
const createContact = async (values, actions) => {
  try {
    const response = await axios.post(`/api/contact/`, values);
    if (response?.status === 201 && response?.statusText === "Created") {
      toast.success("Contact added successfully");
      actions.resetForm();
      return;
    } else {
      toast.error("something went wrong");
      return;
    }
  } catch (error) {
    toast.error("something went wrong");
  }
};
export default createContact;
