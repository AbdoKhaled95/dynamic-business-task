import { Box } from "@mui/material";
import React from "react";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionHead from "../../components/Section/SectionHead";
import AddContactForm from "../../components/Forms/AddContactForm";
import NavigateBtn from "../../components/Buttons/NavigateBtn";

const AddContact = () => {
  return (
    <>
      <Box>
        <SectionContainer>
          <SectionHead sectionTitle={"Add Contact"} />
          <NavigateBtn text="Back" to="/contacts" />
          <Box>
            <AddContactForm />
          </Box>
        </SectionContainer>
      </Box>
    </>
  );
};

export default AddContact;
