//import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        positon: 'absolute',
        display: "flex",
        justifyContent: "center",
        background: Colors.primary,
        color: Colors.secondary,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        fontFamily: 'Bitter',
        mt: '80px'
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
        <Box
            sx={{
              mt: 2,
              color: Colors.black,
            }}
          >
          <FooterTitle variant="caption2" fontWeight='bold'>jetcat.space</FooterTitle>
        
           <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.facebook.com/")}
          >
            <FacebookIcon/>
          </IconButton>
          <IconButton
            aria-label="Twitter.com"
            onClick={() => window.open("https://twitter.com/")}
          >
            <TwitterIcon/>
          </IconButton>
          <IconButton
            aria-label="Instagram.com"
            onClick={() => window.open("https://www.instagram.com/")}
          >
            <InstagramIcon/>
          </IconButton>

          </Box>
          <Typography variant="caption2" >
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
         
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Наші товари</FooterTitle>
          <List>
            <ListItemText>
            <Link href='/futbolky' color='secondary' underline="none" lineHeight={2} fontFamily='Bitter'  variant="caption2">
                Футболки
              </Link>
            </ListItemText>
            <ListItemText>
              <Link href='/chashky' color='secondary' underline="none" lineHeight={2} fontFamily='Bitter' variant="caption2">
                Чашки
              </Link>
            </ListItemText>
            <ListItemText>
            <Link href='/shopery' color='secondary' underline="none" lineHeight={2} fontFamily='Bitter'  variant="caption2">
                Шопери
              </Link>
            </ListItemText>
            <ListItemText>
            <Link href='/puzzly' color='secondary' underline="none" lineHeight={2} fontFamily='Bitter'  variant="caption2">
                Пазли
              </Link>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Інше</FooterTitle>
          <List>
            <ListItemText>
            <Link href='/kontakty' color='secondary' underline="none" lineHeight={2} fontFamily='Bitter' variant="body1">
                Контакти
              </Link>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Особистий кабінет
              </Typography>
            </ListItemText><ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Обране
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
            
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Новини</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Електронна адреса"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Підписка
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}