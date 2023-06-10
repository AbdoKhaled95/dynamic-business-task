import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHead = ({ sectionTitle, sectionDescription, children }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        gutterBottom
        sx={{ fontSize: { xs: 24, md: 36, lg: 48 } }}
        variant="h3"
      >
        {sectionTitle}
      </Typography>
      <Typography
        sx={{
          py: {
            xs: "8px",
            md: "12px",
            lg: "16px",
          },
          fontSize: { xs: 12, md: 16, lg: 20, sm: 14 },
        }}
        variant="body1"
      >
        {sectionDescription}
      </Typography>
      {children}
    </Box>
  );
};

export default SectionHead;
