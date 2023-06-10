import axios from "axios";

const getContacts = async (
  setData,
  isLoading,
  page = 1,
  page_size = 20,
  first_name,
  last_name,
  email,
  phone
) => {
  isLoading(true);
  try {
    const response = await axios.get(
      // `/api/contact/?page=${page}&page_size=${page_size}`
      `/api/contact/`,
      {
        params: {
          page,
          page_size,
          first_name,
          last_name,
          email,
          phone,
        },
      }
    );

    setData(response?.data);
    isLoading(false);

    return;
  } catch (error) {
    isLoading(false);
  }
};
export default getContacts;
