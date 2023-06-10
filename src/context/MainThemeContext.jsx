import { createTheme } from "@mui/material";
import React, { createContext, useContext, useRef, useState } from "react";
// import mainTheme from "../assets/themes/mainTheme";

const MainThemeContext = createContext();
const MainThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            container: 1920,
          },
        },
        palette: {
          mode: mode,
        },

        typography: {
          button: {
            textTransform: "none",
            fontSize: 8,
            fontWeight: 700,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                width: 92,
                height: 28,
                padding: 0,
                borderRadius: 10,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <MainThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </MainThemeContext.Provider>
  );
};

export default MainThemeProvider;
export const useMainThemeContext = () => {
  return useContext(MainThemeContext);
};
