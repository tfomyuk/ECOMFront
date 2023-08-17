import { ThemeProvider } from '@emotion/react';
import React, { useEffect } from 'react'
import theme from '../../styles/theme';
import { Stack } from '@mui/material';
import { UIProvider } from '../../context/ui';
import Appbar from '../../components/appbar';
import AppDrawer from '../../components/drawer';
import Cart from '../../components/cart';
import SearchBox from '../../components/search';

function Bags() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
     
        <Stack>
          <UIProvider>
            <Appbar />
            <AppDrawer />
            <Cart />
            <SearchBox />
          </UIProvider>
        </Stack>
    
    </ThemeProvider>
  );
}

export default Bags
