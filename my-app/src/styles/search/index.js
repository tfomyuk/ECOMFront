import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import theme, { Colors } from "../theme";

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    opacity: 0.7
}))

export const SearchField = styled(TextField)(()=>({
    ".MuiInputLabel-root": {
        color: Colors.secondary
    },
    
    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')] : {
            fontSize: '2rem'
        },
        color: Colors.secondary
    },

    ".MuiInput-root::before" : {
        borderBottom: `1px solid ${Colors.secondary}`
    },

    padding: " 0 0 0 40px"
}))