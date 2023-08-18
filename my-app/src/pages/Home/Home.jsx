import { Box, Container, Typography } from '@mui/material'
import { useEffect } from 'react';
import Banner from '../../components/banner';
import Promotions from '../../components/promotions';
import SearchBox from '../../components/search';
import Products from '../../components/products';



function Home() {
  useEffect(() =>{
    document.title = 'Home';
  },[]);

  return (
   
  <Container
  maxWidth = 'xl'
  sx={{
    background: '#fff'
  }}
  >
      <Banner />
      <Promotions />
      <SearchBox />
      <Box display="flex" justifyContent={"center"} sx={{ p:4 }}>
        <Typography variant="h4">Найпопулярніше</Typography>
      </Box>
      <Products />
  </Container>

  );
}

export default Home;