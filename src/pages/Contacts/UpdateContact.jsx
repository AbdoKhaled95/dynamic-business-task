import { Box } from "@mui/material";
import React from "react";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionHead from "../../components/Section/SectionHead";
import NavigateBtn from "../../components/Buttons/NavigateBtn";
import UpdateContactForm from "../../components/Forms/UpdateContactForm";

const UpdateContact = () => {
  return (
    <>
      <Box>
        <SectionContainer>
          <SectionHead sectionTitle={"Update Contact"} />
          <NavigateBtn text="Back" to={`/contacts`} />
          <Box>
            <UpdateContactForm />
          </Box>
        </SectionContainer>
      </Box>
    </>
  );
};

export default UpdateContact;
