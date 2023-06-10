import React from "react";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionHead from "../../components/Section/SectionHead";
import LoginForm from "../../components/Forms/LoginForm";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box component={"section"} id="login">
      <SectionContainer>
        <SectionHead
          sectionTitle={"Login"}
          sectionDescription={"Please enter your email and password"}
        />
        <LoginForm />
      </SectionContainer>
    </Box>
  );
};

export default Login;
