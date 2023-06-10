import axios from "axios";
const getContactDetatils = async (setData, id, isLoading) => {
  isLoading(true);
  try {
    const response = await axios.get(`/api/contact/${id}/`);
    setData(response?.data[0]);
    isLoading(false);
  } catch (error) {
    isLoading(false);
  }
};
export default getContactDetatils;
