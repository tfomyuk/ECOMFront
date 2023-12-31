import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Box, Divider, Stack } from "@mui/material";
import Appbar from "../components/appbar";
import { UIProvider } from "../context/ui";
import SearchBox from "../components/search";
import theme, { Colors } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import AppDrawer from "../components/drawer";
import Cart from "../components/cart";
import CartMenu from "../components/cartMenu";

function Default() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <UIProvider>
          <Appbar />
          <Divider  sx={{borderBottomWidth: 4}}/>

          <section>
            <Outlet />
          </section>

          <AppDrawer />
          <CartMenu />
          <SearchBox />
          <Footer />
        </UIProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default Default;
