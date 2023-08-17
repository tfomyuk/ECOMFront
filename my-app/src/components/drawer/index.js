import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
  import { useUIContext } from "../../context/ui";
  import CloseIcon from "@mui/icons-material/Close";
  import { DrawerCloseButton } from "../../styles/appbar";
  import { lighten } from "polished";
  import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import { useState } from "react";
  
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
  
  
  export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    const [anchorButton, setAnchorButton] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleCloseProducts = () => {
        setAnchorButton(null);
        setIsMenuOpen(false);
      };
  
    return (
      <>
        {drawerOpen && (
          <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon
              sx={{
                fontSize: "2.5rem",
                color: lighten(0.09, Colors.primary),
              }}
            />
          </DrawerCloseButton>
        )}
        <Drawer open={drawerOpen}>
          <List>
         
            <ListItemButton onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="futbolky">
              <ListItemText>Футболки</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/chashky">
              <ListItemText>Чашки</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/puzzly">
              <ListItemText>Пазли</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton  onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/shopery">
              <ListItemText>Шопери</ListItemText>
            </ListItemButton>
            <MiddleDivider />
             <ListItemButton onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/inshe">
              <ListItemText>Інше</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/kontakty">
              <ListItemText>Контакти</ListItemText>
            </ListItemButton>
            <MiddleDivider />
          </List>
        </Drawer>
      </>
    );
  }