import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const SubHeaderQuiz2 = () => {
  return (
    <>
      <Box m={6} align="center">
        <Typography variant="h5" component="h2" gutterBottom>
          TEST GŁÓWNY
        </Typography>
        <Typography variant="body" component="p" gutterBottom>
          Tu opis co się stanie jak go wypełnisz
        </Typography>
      </Box>
    </>
  );
};

export default SubHeaderQuiz2;
