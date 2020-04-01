import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonNav from "../../Layout/ButtonNav";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const PersonalData = ({ level, name, email, phone, next, handleChange }) => {
  return (
    <>
      <Box m={6} align="center">
        <Typography variant="body" component="h3" align="center">
          Pytanie {level + 1} / 6
        </Typography>
        <TextField
          label="Imię Nazwisko"
          value={name}
          onChange={handleChange("name")}
        />
        <br />
        <TextField
          label="E-mail"
          value={email}
          onChange={handleChange("email")}
        />
        <br />
        <TextField
          label="Numer telefonu"
          value={phone}
          onChange={handleChange("phone")}
        />
        <br />
      </Box>
      <Box m={6} align="center">
        <ButtonNav
          color={"primary"}
          buttonText={"następne pytanie"}
          handleClick={next}
          disabled={name === "" || email === "" || phone === ""}
        />
      </Box>
    </>
  );
};

export default PersonalData;
