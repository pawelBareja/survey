import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonNav from "../../Layout/ButtonNav";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const WelcomePage = ({ paymentDone, handlePayment, next }) => {
  return (
    <>
      <Box m={6} align="center">
        <Typography variant="h6" component="body" gutterBottom>
          Test jest płatny
        </Typography>
        <Typography variant="h4" component="body">
          Teraz jedyne:
        </Typography>
        <Typography variant="h3" component="body" gutterBottom>
          300 zł
        </Typography>
        <ButtonNav
          color={"primary"}
          buttonText={"Płacę"}
          handleClick={handlePayment}
        />
        <ButtonNav
          color={"secondary"}
          buttonText={"zacznij Quiz"}
          handleClick={next}
          disabled={!paymentDone}
        />
      </Box>
    </>
  );
};

export default WelcomePage;
