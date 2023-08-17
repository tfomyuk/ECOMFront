import React, { useEffect } from 'react'
import SearchBox from '../../components/search';
import Cart from '../../components/cart';
import AppDrawer from '../../components/drawer';
import Appbar from '../../components/appbar';
import { UIProvider } from '../../context/ui';
import { Stack, ThemeProvider } from '@mui/material';
import theme from '../../styles/theme';

function Puzzles() {
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
 

export default Puzzles