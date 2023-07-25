import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';

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
  
      <Appbar />
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent={"center"} sx={{ p:4 }}>
        <Typography variant="h4">Найпопулярніше</Typography>
      </Box>
      <Products />
    
      {/*
      
     
      Promotions
      Title
      Products
      footer
      searchbox
      appdrawer
*/}
    
    <Button variant='contained'> Test</Button>
  </Container>
  </ThemeProvider>
  );
}

export default App;
