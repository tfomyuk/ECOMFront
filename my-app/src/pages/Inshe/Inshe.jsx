import React, { useEffect } from "react";
import { ContactForm } from "../../components/contactForm";
import { Box } from "@mui/material";


function Inshe() {
  useEffect(() => {
    document.title = "Інше";
  }, []);

  return (
   
            <Box
              display="flex"
              justifyContent={"center"}
              sx={{ p: 4 }}
              backgroundimage={`url(/images/banner/banner.png)`}
            >
              <ContactForm />
            </Box>
           
  );
}

export default Inshe;
