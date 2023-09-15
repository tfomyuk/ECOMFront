import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {/*Ваше замовлення прийнято! Очікуйте зв'язок протягом 48 годин {" "}
        <strong>Вітаємо, Ви зробили найкращий вибір!</strong>—*/}
      </Alert>
    </Box>
  );
};

export default Confirmation;