import { Box, Stack } from "@mui/material";
import React from "react";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionHead from "../../components/Section/SectionHead";
import ContactsComponents from "../../components/Contacts/ContactsComponents";
import NavigateBtn from "../../components/Buttons/NavigateBtn";

const Contacts = ({}) => {
  return (
    <Box component={"section"} id="contacts">
      <SectionContainer>
        <SectionHead sectionTitle={"Contacts"} />
        <Stack spacing={2}>
          <NavigateBtn to="/contacts/create" text="Add Contact" />
          <ContactsComponents />
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default Contacts;
