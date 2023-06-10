import * as yup from "yup";
export const contactSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().typeError("Please Enter Numbers Only").required(),
});
