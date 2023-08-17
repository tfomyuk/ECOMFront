import React, { useEffect } from "react";
import { ContactForm } from "../../components/contactForm";
import Appbar from "../../components/appbar";
import { Box, Container, Stack, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";
import Cart from "../../components/cart";
import SearchBox from "../../components/search";

function Inshe() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
     
        <Stack>
          <UIProvider>
            <Appbar />
            <Box
              display="flex"
              justifyContent={"center"}
              sx={{ p: 4 }}
              backgroundimage={`url(/images/banner/banner.png)`}
            >
              <ContactForm />
            </Box>
            <AppDrawer />
            <Cart />
            <SearchBox />
          </UIProvider>
        </Stack>
    
    </ThemeProvider>
  );
}

export default Inshe;
