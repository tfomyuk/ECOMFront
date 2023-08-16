import React from "react";
import { ContactForm } from "../../components/contactForm";
import Appbar from "../../components/appbar";
import { Box } from "@mui/material";

function Inshe() {
  return (
    <>
      <Appbar />
      <Box backgroundimage ={ `url(/images/banner/banner.png)`}>
      <ContactForm />

      </Box>


      
    </>
  );
}

export default Inshe;
