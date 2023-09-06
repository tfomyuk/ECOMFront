import { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/product";
import { Stack, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";
import useCart from "../../hooks/useCart";
//import { Colors } from "../../styles/theme";

export default function SingleProductDesktop({ product, matches }) {

  const [showOptions, setShowOptions] = useState(false);
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  
  const { addToCart, addToCartText } = useCart(product);


  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart 
          onClick={addToCart}
          show={showOptions} variant="contained" color="secondary">
         {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="secondary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="secondary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches}/>
      <ProductDetailDialog product={product} />
    </>
  );
}