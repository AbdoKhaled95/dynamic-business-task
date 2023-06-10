import React from "react";
import InputField from "../Inputs/InputField";
import { Formik } from "formik";
import { Box } from "@mui/material";
import { loginSchema } from "../../schemas/loginSchema";
import MainBtn from "../Buttons/MainBtn";
import login from "../../apis/auth/login";
import { useMainContext } from "../../context/MainContext";

const LoginForm = () => {
  // Get navigateTo function from MainContext
  const { navigateTo } = useMainContext();

  // Set initial values for form fields
  const initialValues = {
    email: "eman@gmail.com",
    password: "D@123456",
  };

  return (
    <>
      {/* Render login form */}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => login(values, actions, navigateTo)}
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
              inputKey={"email"}
              inputLabel={"Email"}
              placeholder={"Please enter your e-mail"}
              type={"email"}
            />
            <InputField
              inputKey={"password"}
              inputLabel={"Password"}
              placeholder={"Please enter your password"}
              type={"password"}
            />
            <MainBtn btnText={"Login"} isSubmitting={props?.isSubmitting} />
          </Box>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
