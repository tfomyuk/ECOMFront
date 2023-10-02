import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import Item from "../item";
import AppPagination from "../pagination";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
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

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "ТОП"
  );

  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "Новинки"
  );

  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "Бестселлери"
  );

  return (
    <Box width="80%" margin="80px auto">
      {/*<Typography variant="h3" textAlign="center">
        Найкращі пропозиції
      </Typography>*/}
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
        <Tab label='ВСІ ТОВАРИ' value="all" />
        <Tab label='НОВІ ТОВАРИ' value="Новинки" />
        <Tab label='БЕСТСЕЛЛЕРИ' value="Бестселлери" />
        <Tab label='ПОПУЛЯРНІ ТОВАРИ' value="ТОП" />
      </Tabs>
      <Box
      margin='0 auto'
      display="grid"
        gridTemplateColumns="repeat(auto-fill, 350px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Новинки" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Бестселлери" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "ТОП" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

       

      </Box>
      {/*<AppPagination />*/}
    </Box>
  );
};

export default ShoppingList;
