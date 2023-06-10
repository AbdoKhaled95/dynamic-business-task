import { Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import tableBtnsStyle from "../../assets/styles/tableBtnsStyle";

const DetailsBtn = ({ to, onClick }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      sx={tableBtnsStyle}
      variant="contained"
      onClick={onClick}
    >
      Details
    </Button>
  );
};

export default DetailsBtn;
