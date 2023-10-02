import React, { useEffect } from "react";
import { ContactForm } from "../../components/contactForm";
import { Box, Container } from "@mui/material";


function Inshe() {
  useEffect(() => {
    document.title = "Інше";
  }, []);

  return (
   
            <Container
              display="flex"
              justifycontent={"center"}
              sx={{ p: 4 }}
              backgroundimage={`url(/images/banner/banner.png)`}
            >
             dxfcghjklcvbnmlkjhgfdszxcv bnhgfcvbgfcvbhg
            </Container>
           
  );
}

export default Inshe;
