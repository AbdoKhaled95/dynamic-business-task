import React, { useEffect } from "react";
import { Formik } from "formik";
import { Box } from "@mui/material";
import InputField from "../Inputs/InputField";
import MainBtn from "../Buttons/MainBtn";
import { contactSchema } from "../../schemas/contactSchema";
import { useMainContext } from "../../context/MainContext";
import updateContact from "../../apis/contacts/updateContact";
import { useParams } from "react-router-dom";

const UpdateContactForm = ({}) => {
  const { currentContact, navigateTo } = useMainContext();
  const { id } = useParams();

  // Redirect to contact details page if current contact is not available
  useEffect(() => {
    Object.keys(currentContact).length === 0 && navigateTo(`/contacts/${id}`);
  }, []);

  // Set initial values for form fields
  const initialValues = {
    id: currentContact?.id,
    first_name: currentContact?.first_name,
    last_name: currentContact?.last_name,
    email: currentContact?.email,
    phone: currentContact?.phone,
  };

  return (
    <>
      {/* Render form only when current contact is available */}
      {Object.keys(currentContact).length != 0 && (
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={(values) => updateContact(values, currentContact?.id)}
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
              <MainBtn btnText={"Update"} isSubmitting={props?.isSubmitting} />
            </Box>
          )}
        </Formik>
      )}
    </>
  );
};

export default UpdateContactForm;
