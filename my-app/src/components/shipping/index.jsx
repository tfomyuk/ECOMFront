import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./addressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/*SHIPPING FORM*/}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Shipping Information
        </Typography>
        <AddressForm
          type="shippingAddress"
          value={values.shippingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          label="Same for Billing Address"
          control={
            <Checkbox
              defaultChecked
              value={values.billingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "billingAddress.isSameAddress",
                  !values.billingAddress.isSameAddress
                )
              }
            />
          }
        />
      </Box>

      {/*BILLING FORM */}
      {!values.billingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Billing Information
          </Typography>
          <AddressForm
          type="billingAddress"
          value={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
