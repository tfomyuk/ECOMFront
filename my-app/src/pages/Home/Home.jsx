import { Box, Button, Container, Stack, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react';
import theme from '../../styles/theme';
import { UIProvider } from '../../context/ui';
import Appbar from '../../components/appbar';
import Banner from '../../components/banner';
import Promotions from '../../components/promotions';
import SearchBox from '../../components/search';
import Products from '../../components/products';
import Footer from '../../components/footer';
import AppDrawer from '../../components/drawer';
import Cart from '../../components/cart';


function Home() {
  useEffect(() =>{
    document.title = 'React Material UI - Home';
  },[]);

  return (
    <ThemeProvider theme = {theme}>

   
  <Container
  maxWidth = 'xl'
  sx={{
    background: '#fff'
  }}
  >
  <Stack>
  <UIProvider>
  <Appbar />
      <Banner />
      <Promotions />
      <SearchBox />
      <Box display="flex" justifyContent={"center"} sx={{ p:4 }}>
        <Typography variant="h4">Найпопулярніше</Typography>
      </Box>
      <Products />

      <AppDrawer />
      <Cart />
      <SearchBox />
      </UIProvider>
   </Stack>
  </Container>
  </ThemeProvider>
  );
}

export default Home;