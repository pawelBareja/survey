import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const TestResults = ({ result }) => {
  return (
    <Box m={6} align="center">
      <Typography variant="h3" component="h3" gutterBottom>
        Twój wynik wskazuje..
      </Typography>

      {result >= 10 ? (
        <div>
          <Typography variant="h5" component="h2" gutterBottom>
            Sprawdź polecane kreacje na naszej stronie
          </Typography>
          <Button variant="contained" color="primary">
            <Link href="#" color="textPrimary">
              Przejdź do strony
            </Link>
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h5" component="h2" gutterBottom>
            Wypełnij rozszerony formularz
          </Typography>
          <Button variant="contained" color="primary">
            <Link href="#" color="textPrimary">
              Przejdź do wypełnienia formularza
            </Link>
          </Button>
        </div>
      )}
    </Box>
  );
};

export default TestResults;
