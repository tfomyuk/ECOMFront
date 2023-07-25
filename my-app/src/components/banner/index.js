import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";


export default function Banner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            {/*<BannerImage src='/images/banner/banner.jpg'/>*/}
        <BannerContent>
            <Typography variant='h6'>Оптові та кастомні замовлення</Typography>

            <BannerTitle variant="h3">
            Нові принти
             </BannerTitle>

            <BannerDescription variant="subtitle">
                Час носити креативні речі, які надихають створювати неповторний імідж. 100% зроблено в Україні.
            </BannerDescription>

        </BannerContent>
        </BannerContainer>
    )





}