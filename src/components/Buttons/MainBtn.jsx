import { Button, CircularProgress } from "@mui/material";
import React from "react";
import mainBtnStyle from "../../assets/styles/mainBtnStyle";

const MainBtn = ({ isSubmitting, btnText, onClick, type = "submit" }) => {
  return (
    <>
      {isSubmitting ? (
        <CircularProgress />
      ) : (
        <Button
          onClick={onClick}
          variant="contained"
          type="submit"
          sx={mainBtnStyle}
        >
          {btnText}
        </Button>
      )}
    </>
  );
};

export default MainBtn;
