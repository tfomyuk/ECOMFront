import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer objectfit="cover">
        <BannerContent>
            <Typography fontFamily='Bitter' variant='h6'>Оптові та кастомні замовлення</Typography>

            <BannerTitle fontFamily="Bitter" variant="h3">
            Нові принти
             </BannerTitle>

            <BannerDescription fontFamily="Bitter" variant="subtitle">
                Час носити креативні речі, які надихають створювати неповторний імідж. 100% зроблено в Україні.
            </BannerDescription>
            {/*<BannerShopButton fontFamily="Bitter" color="secondary">За покупками</BannerShopButton>*/}

        </BannerContent>
        </BannerContainer>
    )





}