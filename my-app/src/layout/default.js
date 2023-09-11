import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Box, Stack } from "@mui/material";
import Appbar from "../components/appbar";
import { UIProvider } from "../context/ui";
import SearchBox from "../components/search";
import theme from "../styles/theme";
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

          <section>
            <Outlet />
          </section>

          <Footer />

          <AppDrawer />
          <CartMenu />
          <SearchBox />
        </UIProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default Default;
