import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkTokenValidity from "../apis/auth/checkTokenValidity";

// Create context
const MainContext = createContext();

// Create provider component
const MainProvider = ({ children }) => {
  const navigate = useNavigate();

  // Function to navigate to a specific path
  const navigateTo = (navigatePathname) => {
    navigate(navigatePathname);
  };

  // Set up default axios settings
  axios.defaults.baseURL = "http://62.171.166.157:5050";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage?.getItem("accessToken");

  // Check token validity on mount and at fixed intervals
  useEffect(() => {
    checkTokenValidity(navigateTo);
    const interval = setInterval(() => {
      checkTokenValidity(navigateTo);
    }, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [
    localStorage?.getItem("accessToken"),
    localStorage?.getItem("refreshToken"),
  ]);

  // Local state for current contact
  const [currentContact, setCurrentContact] = useState({});

  // Render provider with context value
  return (
    <MainContext.Provider
      value={{ navigateTo, currentContact, setCurrentContact }}
    >
      {children}
    </MainContext.Provider>
  );
};

// Export provider and custom hook
export default MainProvider;
export const useMainContext = () => {
  return useContext(MainContext);
};
