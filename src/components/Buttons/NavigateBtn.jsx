import React from "react";
import { Link as RouterLink } from "react-router-dom";
import mainBtnStyle from "../../assets/styles/mainBtnStyle";
import { Button } from "@mui/material";
const NavigateBtn = ({ text, to }) => {
  mainBtnStyle.alignSelf = "center";

  return (
    <Button
      variant="contained"
      sx={mainBtnStyle}
      component={RouterLink}
      to={to}
    >
      {text}
    </Button>
  );
};

export default NavigateBtn;
