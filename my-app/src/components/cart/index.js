import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@mui/material/styles";


export default function Cart() {

    const { cart, setShowCart, showCart } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const cartContent = cart.map( item => (
        <Box key={item.id}>
            <Box
            display="flex"
            sx={{ pt:2, pb:2 }}
            alignItems="start"
            justifyContent={"space-between"}>
                
            <Avatar src={item.image} sx={{width: 96, height: 96, mr:2 }} />
            <Box display="flex" flexDirection={"column"}>
                <Typography variant="h6">{item.name}</Typography>
               {!matches && <Typography variant="subtitle2">{item.description}</Typography>}

            </Box>
            <Typography variant="body1" justifyContent={"end"}>
                ${item.price}
            </Typography>
            </Box>
            {matches && <Typography variant="subtitle2">{item.description}</Typography>}

            <Divider variant="inset" />

        </Box>
    ));

    return(
        <Drawer
        open={showCart}
        onClose={() => setShowCart(false)}
        anchor="right"
        PaperProps={{
            sx:{
                width: matches ? '100%' : 500,
                background: Colors.light_gray,
                borderRadius: 0
            }
        }}
        >

          {cart.length > 0 ?  
            <Box
            sx={{ p:4 }}
            display="flex"
            justifyContent={'center'}
            flexDirection="column"
            alignItems="center"
            >
                <Typography variant="h3" color={Colors.black}>
                    Кошик
                </Typography>

                <Typography variant="body1" color={Colors.muted}>
                    {""}
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                </Typography>

                <Paper
                elevation={0}
                sx={{
                    mt: 2,
                    width: '90%',
                    padding: 4,
                }}
                > 
                {cartContent}
                </Paper>
                <Button sx={{ mt:4 }} variant="contained">
                    Перейти до оплати
                </Button>

           </Box> : (<Box
           sx={{ p: 4 }}
           display="flex"
           justifyContent={"center"}
           flexDirection="column"
           alignItems="center"
           >
            <Typography variant={matches ? "h5" : "h3"} color={Colors.black}>Кошик порожній!</Typography>
            
            </Box>)}
            <Button onClick={() => setShowCart(false)}>Закрити</Button>
        </Drawer>
    );

}