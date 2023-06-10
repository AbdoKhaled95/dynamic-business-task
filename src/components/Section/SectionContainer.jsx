import { Container } from "@mui/material";
import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <Container
      sx={{
        height: "100%",
        px: { xs: "24px", md: "48px", lg: "88px" },
        pt: { xs: "32px", md: "48px", lg: "72px" },
        pb: { xs: "24px", md: "36px", lg: "56px" },
      }}
      maxWidth="container"
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
