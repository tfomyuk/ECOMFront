import { Box, Container, Typography } from '@mui/material'
import { useEffect } from 'react';
import SearchBox from '../../components/search';
import ShoppingList from '../../components/shoppingList';
import MainCarousel from '../../components/carousel';



function Home() {
  useEffect(() =>{
    document.title = 'Home';
  },[]);

  return (
    <>
    <Box display="flex" justifyContent={"center"} sx={{ p:4 }}>
       <Typography variant="h3" color="secondary">Прагнемо створювати креативні речі, які надихають і збагачують життя</Typography>
      </Box>
  <Container
  maxWidth = '1900'
  sx={{
    background: '#fff'
  }}
  >
      <MainCarousel />
     {/* <Promotions /> */}
     
      <SearchBox />
      
       <Box>
      <ShoppingList/>
      </Box>
  </Container>
  </>

  );
}

export default Home;