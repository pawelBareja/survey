import React from "react";
import TextResults from "./TestResults";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Summary = props => {
  const {
    prev,
    name,
    phone,
    email,
    question1,
    question2,
    question3,
    question4,
    question5
  } = props;

  const result = [
    parseInt(question1),
    parseInt(question2),
    parseInt(question3),
    parseInt(question4),
    parseInt(question5)
  ].reduce((a, b) => a + b, 0);

  console.log(result);

  return (
    <>
      <Grid container>
        {/* <Grid item md={6}>
          <Box m={6} align="center">
            <Typography variant="h3" component="h3" gutterBottom>
              Twoje odpowiedzi:
            </Typography>
            <p>Imię & Nazwisko: {name}</p>
            <p>Adres e-mail: {email}</p>
            <p>Numer telefonu: {phone}</p>
            <p>Pytanie 1: {question1}</p>
            <p>Pytanie 2: {question2}</p>
            <p>Pytanie 3: {question3}</p>
            <p>Pytanie 4: {question4}</p>
            <p>Pytanie 5: {question5}</p>
          </Box>
        </Grid> */}
        <Grid item md={12}>
          <TextResults />
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
