import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import getContacts from "../../apis/contacts/getContacts";
import ContactsTable from "../Tables/ContactsTable";
import SearchForm from "../Forms/SearchForm";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

const ContactsComponents = () => {
  const [fliterContact, setFliterContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  // Get searchParams from URL and update it when necessary
  const [searchParams, setSearchParams] = useSearchParams();

  // Set state variables for contacts data and loading status
  const [contactsData, setContactsData] = useState([]);
  const [isLoadingcontactsData, setIsLoadingcontactsData] = useState(false);
  // Set state variables for filtered data and search status
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  // Set state variables for pagination
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams?.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 20;
  // Load contacts data on component mount and update total pages accordingly
  useEffect(() => {
    if (isSearching) {
      setTotalPages(Math?.ceil(filteredData?.count / pageSize));
      getContacts(
        setFilteredData,
        setIsLoadingcontactsData,
        currentPage,
        pageSize,
        fliterContact?.firstName,
        fliterContact?.lastName,
        fliterContact?.email,
        fliterContact?.phone
      );
      return;
    } else {
      getContacts(
        setContactsData,
        setIsLoadingcontactsData,
        currentPage,
        pageSize
      );
    }
    setTotalPages(Math?.ceil(contactsData?.count / pageSize));
  }, [contactsData?.count, filteredData?.count, window.location.href]);

  // Handle pagination change and load appropriate data based on search status
  const handlePagination = (value) => {
    setCurrentPage(value);
    navigate({
      search: `page=${value}`,
    });
    if (isSearching) {
      getContacts(
        setFilteredData,
        setIsLoadingcontactsData,
        value,
        pageSize,
        fliterContact?.firstName,
        fliterContact?.lastName,
        fliterContact?.email,
        fliterContact?.phone
      );
    } else {
      getContacts(setContactsData, setIsLoadingcontactsData, value, pageSize);
    }
  };

  return (
    <>
      {/* Render search form, contacts table, and pagination */}
      <Box>
        <SearchForm
          setIsLoading={setIsLoadingcontactsData}
          setFilteredData={setFilteredData}
          setIsSearching={setIsSearching}
          setCurrentPage={setCurrentPage}
          fliterContact={fliterContact}
          setFliterContact={setFliterContact}
          isSearching={isSearching}
        />
        <ContactsTable
          ContactsData={filteredData?.results || contactsData?.results}
          isLoading={isLoadingcontactsData}
        />
        {/* Render message if no search results found */}
        {isSearching && filteredData?.count <= 0 && (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 24,
              py: "32px",
            }}
          >
            No search results found
          </Typography>
        )}
        {/* Render pagination if multiple pages */}
        {totalPages > 1 && (
          <Box sx={{ py: "32px", display: "flex", justifyContent: "center" }}>
            <Pagination
              count={totalPages}
              color="primary"
              size="large"
              onChange={(e, value) => handlePagination(value)}
              page={currentPage}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ContactsComponents;
