import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const TestResults = ({ result }) => {
  const modotyp = result => {
    if (result < 8) {
      return "wazniak";
    } else {
      return "elegant";
    }
  };

  return (
    <Box m={6} align="center">
      <Typography variant="h3" component="h3" gutterBottom>
        Twój modotyp to:
      </Typography>
      <Typography variant="h5" component="h3">
        {modotyp(result)}
      </Typography>
    </Box>
  );
};

export default TestResults;
