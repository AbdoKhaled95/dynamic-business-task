import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import MainBtn from "../Buttons/MainBtn";
import getContacts from "../../apis/contacts/getContacts";
import { useNavigate } from "react-router-dom";

const SearchForm = ({
  setFilteredData,
  setIsLoading,
  isLoading,
  setIsSearching,
  setCurrentPage,
  fliterContact,
  setFliterContact,
  isSearching,
}) => {
  // Initialize navigate hook
  const navigate = useNavigate();

  // Function to handle search button click
  const handleSearching = () => {
    // setIsSearching(true);

    // Set isSearching to true
    if (!isSearching) {
      setIsSearching(true);
    }

    // Call API to get filtered contacts
    getContacts(
      setFilteredData,
      setIsLoading,
      1,
      20,
      fliterContact?.firstName,
      fliterContact?.lastName,
      fliterContact?.email,
      fliterContact?.phone
    );

    // Update query params and current page number
    navigate({
      search: `page=1`,
    });
    setCurrentPage(1);
  };

  return (
    <>
      {/* Render search form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="standard"
          placeholder="Search by First Name"
          defaultValue={fliterContact?.firstName}
          onChange={(event) =>
            setFliterContact({
              ...fliterContact,
              firstName: event.target.value,
            })
          }
        />
        <TextField
          variant="standard"
          placeholder="Search by Last Name"
          defaultValue={fliterContact?.lastName}
          onChange={(event) =>
            setFliterContact({
              ...fliterContact,
              lastName: event.target.value,
            })
          }
        />
        <TextField
          variant="standard"
          placeholder="Search by Email"
          defaultValue={fliterContact?.email}
          onChange={(event) =>
            setFliterContact({
              ...fliterContact,
              email: event.target.value,
            })
          }
        />
        <TextField
          variant="standard"
          placeholder="Search by Phone"
          defaultValue={fliterContact?.phone}
          onChange={(event) =>
            setFliterContact({
              ...fliterContact,
              phone: event.target.value,
            })
          }
        />
        <MainBtn btnText={"Search"} onClick={() => handleSearching()} />
      </Box>
    </>
  );
};

export default SearchForm;
