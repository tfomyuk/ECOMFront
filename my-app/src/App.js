import { Box, Button, Container, Stack, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import SearchBox from './components/search';
import { UIProvider } from './context/ui';

function App() {
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
      <Footer />
      <AppDrawer />
      <SearchBox />
      </UIProvider>
    
   </Stack>
  </Container>
  </ThemeProvider>
  );
}

export default App;
