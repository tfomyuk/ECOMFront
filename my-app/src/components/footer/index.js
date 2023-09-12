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
        positon: "absolute",
        display: "flex",
        justifyContent: "center",
        background: Colors.primary,
        color: Colors.secondary,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
        fontFamily: "Bitter",
        mt: "80px",
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
            <FooterTitle variant="body1" fontWeight="bold">
              jetcat.space
              <IconButton
                aria-label="Instagram.com"
                onClick={() => window.open("https://www.instagram.com/")}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook.com"
                onClick={() => window.open("https://www.facebook.com/")}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter.com"
                onClick={() => window.open("https://twitter.com/")}
              >
                <TwitterIcon />
              </IconButton>
            </FooterTitle>
          </Box>
          <Typography variant="body1">
            Замовити футболки з логотипом та вашим принтом. Друк на футболках та
            одязі. Футболки з логотипом, вашими принтами під замовлення. В
            наявності великий асортимент одягу. Всі види друку та вишивка на
            власному обладнанні. Контроль якості на кожному етапі. Друк на одязі
            гуртом та в роздріб від 1 шт. Маємо досвід роботи 17 років.
          </Typography>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Наші товари</FooterTitle>
          <List>
            <ListItemText>
              <Link
                href="/futbolky"
                color="secondary"
                underline="none"
                lineHeight={2}
                fontFamily="Bitter"
                variant="caption2"
              >
                Футболки
              </Link>
            </ListItemText>
            <ListItemText>
              <Link
                href="/chashky"
                color="secondary"
                underline="none"
                lineHeight={2}
                fontFamily="Bitter"
                variant="caption2"
              >
                Чашки
              </Link>
            </ListItemText>
            <ListItemText>
              <Link
                href="/shopery"
                color="secondary"
                underline="none"
                lineHeight={2}
                fontFamily="Bitter"
                variant="caption2"
              >
                Шопери
              </Link>
            </ListItemText>
            <ListItemText>
              <Link
                href="/puzzly"
                color="secondary"
                underline="none"
                lineHeight={2}
                fontFamily="Bitter"
                variant="caption2"
              >
                Пазли
              </Link>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Інше</FooterTitle>
          <List>
            <ListItemText>
              <Link
                href="/kontakty"
                color="secondary"
                underline="none"
                lineHeight={2}
                fontFamily="Bitter"
                variant="body1"
              >
                Контакти
              </Link>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Особистий кабінет
              </Typography>
            </ListItemText>
            <ListItemText>
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
