import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useNavigate } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { addToCart } from "../../state";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: {primary},
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          small: { url },
        }
      }
    }
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="350px"
          height="350px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />

        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/*AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={Colors.primary}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={Colors.black}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {/*BUTTON */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: Colors.primary, color: "black" }}
            >
              ДОДАТИ У КОШИК
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={Colors.black}>
          {category
            .replace(/([A-Z])/g, "$1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">{price}₴</Typography>
      </Box>
    </Box>
  );
};

export default Item;
