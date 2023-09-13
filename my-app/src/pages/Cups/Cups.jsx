import React, { useEffect, useState } from 'react'
import Products from '../../components/products';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import { setItems } from '../../state';
import Item from '../../components/item';


function Cups() {
  useEffect(() => {
    document.title = "Чашки";
  }, []);
  const dispatch = useDispatch();
  const [value, setValue] = useState("Чашки");
  const items = useSelector((state) => state.cart.items);
  console.log("items", items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const teeShirtsItems = items.filter(
    (item) => item.attributes.category === "Чашки"
  );
  return (
    <Box width="80%" margin="80px auto">
      
      <Tabs
        textColor="secondary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label='ЧАШКИ' value="Чашки" />
      </Tabs>
      <Box
      margin='0 auto'
      display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="100px"
        columnGap="5%"
      >
        {value === "Чашки" &&
          teeShirtsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

      </Box>
    </Box>
  );
}

export default Cups;


