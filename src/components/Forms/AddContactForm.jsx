import React from "react";
import { Formik } from "formik";
import { Box } from "@mui/material";
import InputField from "../Inputs/InputField";
import MainBtn from "../Buttons/MainBtn";
import { contactSchema } from "../../schemas/contactSchema";
import createContact from "../../apis/contacts/createContact";

const AddContactForm = ({ id }) => {
  // Set initial values for form fields
  const initialValues = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  };

  return (
    <>
      {/* Render add contact form */}
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => createContact(values, actions)}
      >
        {/* Render form fields and submit button */}
        {(props) => (
          <Box
            component={"form"}
            onSubmit={props?.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              py: "12px",
            }}
          >
            <InputField
              inputKey={"first_name"}
              inputLabel={"First Name"}
              placeholder={"Please enter your First Name"}
            />
            <InputField
              inputKey={"last_name"}
              inputLabel={"Last Name"}
              placeholder={"Please enter your Last Name"}
            />
            <InputField
              inputKey={"email"}
              inputLabel={"Email"}
              placeholder={"Please enter your Email"}
              type="email"
            />
            <InputField
              inputKey={"phone"}
              inputLabel={"Phone"}
              placeholder={"Please enter your Phone"}
            />
            <MainBtn btnText={"Create"} isSubmitting={props?.isSubmitting} />
          </Box>
        )}
      </Formik>
    </>
  );
};

export default AddContactForm;
