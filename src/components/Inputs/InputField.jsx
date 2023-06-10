import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const InputField = ({ inputKey, inputLabel, type = "text", placeholder }) => {
  const { values, handleChange, errors, touched, onFocus, onBlur } =
    useFormikContext();
  return (
    <>
      <Box sx={{ m: "12px" }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "8px", md: "10px" },
            mb: "8px",
            alignItems: "center",
          }}
        >
          <Box
            component="label"
            htmlFor={inputKey}
            sx={{
              fontSize: { xs: 10, md: 16 },
              fontWeight: 700,
            }}
          >
            {inputLabel}
          </Box>
        </Box>
        <TextField
          value={values[inputKey]}
          onChange={handleChange}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          id={inputKey}
          name={inputKey}
          placeholder={placeholder}
          error={errors?.[inputKey] && touched?.[inputKey]}
          helperText={
            errors?.[inputKey] && touched?.[inputKey] ? errors?.[inputKey] : ""
          }
          sx={{
            width: { xs: 327, md: 506, lg: 800 },
            "& .MuiInputBase-root": {
              minHeight: {
                xs: 40,
                md: 51,
              },
              borderRadius: "12px",
              fontSize: { xs: 10, md: 16 },
              px: "24px",
              color: "secondry.main",
            },
          }}
        />
      </Box>
    </>
  );
};

export default InputField;
