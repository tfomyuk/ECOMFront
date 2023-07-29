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
  
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
  
  
  export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
  
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
            <ListItemButton>
              <ListItemText>Про нас</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Футболки</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Чашки</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Пазли</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Зв'язок</ListItemText>
            </ListItemButton>
            <MiddleDivider />
          </List>
        </Drawer>
      </>
    );
  }