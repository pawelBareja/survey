import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonNav from "../Layout/ButtonNav";
import Box from "@material-ui/core/Box";

const PersonalData = ({ name, email, phone, next, handleChange }) => {
  return (
    <>
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
      <Box m={6}>
        <ButtonNav
          color={"primary"}
          buttonText={"następne pytanie"}
          handleClick={next}
        />
      </Box>
    </>
  );
};

export default PersonalData;
