import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";

export default function AppbarMobile({ matches }) {
  
  return (
    <AppbarContainer>
      <IconButton >
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
       JetCat.space
      </AppbarHeader>
      <IconButton >
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}