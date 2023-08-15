import { ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function AppbarDesktop({ matches }) {
    const { setShowSearchBox} = useUIContext();
    const [anchorButton, setAnchorButton] = useState(null);
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleCloseProducts = () => {
    setAnchorButton(null);
    setIsMenuOpen(false);
  };


    return (
       
        <AppbarContainer>
            <AppbarHeader>JetCat.space</AppbarHeader>


            <MyList type='row'>

            <MenuItem
                onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/futbolky"
              >
                Футболки
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/chashky"
              >
                Чашки
              </MenuItem>
              
              <MenuItem
                onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/shopery"
              >
                Шопери
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/puzzly"
              >
                Пазли
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseProducts();
                }}
                component={Link}
                to="/kontakty"
              >
                Контакти
              </MenuItem> 
   
                {/*<ListItemText primary='Кружки' component={Link} to="/cups"/>
                <ListItemText primary='Шопери' />
                <ListItemText primary='Футболки' />
                <ListItemText primary='Пазли' />
                <ListItemText primary='Інше' />
              <ListItemText primary='Контакти' />*/}
                <ListItemButton>
                    <ListItemIcon>
                    <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        );
    }