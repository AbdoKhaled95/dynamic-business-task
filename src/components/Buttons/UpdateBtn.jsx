import { Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import tableBtnsStyle from "../../assets/styles/tableBtnsStyle";

const UpdateBtn = ({ onClick, to }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="outlined"
      sx={tableBtnsStyle}
      onClick={onClick}
    >
      Update
    </Button>
  );
};

export default UpdateBtn;
