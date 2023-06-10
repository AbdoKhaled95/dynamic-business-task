import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionHead from "../../components/Section/SectionHead";
import NavigateBtn from "../../components/Buttons/NavigateBtn";
import UpdateBtn from "../../components/Buttons/UpdateBtn";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import { useMainContext } from "../../context/MainContext";
import getContactDetatils from "../../apis/contacts/getContactDetatils";

const ContactDetatils = () => {
  const { id } = useParams();

  // Global state
  const { setCurrentContact } = useMainContext();

  // Local state for contact details and loading status
  const [contactDetatils, setContactDetatils] = useState({});
  const [isLoadingContactDetatils, setIsLoadingContactDetatils] =
    useState(false);

  // Fetch contact details on mount
  useEffect(() => {
    getContactDetatils(setContactDetatils, id, setIsLoadingContactDetatils);
  }, []);

  return (
    <Box component={"section"} id="contact">
      {/* Main container */}
      <SectionContainer>
        {/* Section header */}
        <SectionHead sectionTitle={"Contact Detatils"} />

        {/* Back button */}
        <NavigateBtn to="/contacts" text="Back" />

        {/* Contact details */}
        <Stack sx={{ py: "32px" }} spacing={2} alignItems={"center"}>
          <Typography>
            <strong>Name:</strong> {contactDetatils?.first_name}{" "}
            {contactDetatils?.last_name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {contactDetatils?.email}
          </Typography>
          <Typography>
            <strong>Phone:</strong> {contactDetatils?.phone}
          </Typography>
        </Stack>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            py: "32px",
          }}
        >
          {/* Update button */}
          <UpdateBtn
            to={`/contacts/update/${id}`}
            onClick={() => setCurrentContact(contactDetatils)}
          />

          {/* Delete confirmation dialog */}
          <ConfirmDialog currentContactItem={contactDetatils} />
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default ContactDetatils;
