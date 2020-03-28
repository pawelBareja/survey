import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Header = () => {
  return (
    <>
      <Box m={4}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          Twój
          <br />
          Modotyp
        </Typography>
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Wstępny TEST online
      </Typography>
      <Typography variant="body" component="p" gutterBottom>
        Tu opis co się stanie jak go wypełnisz
      </Typography>
    </>
  );
};

export default Header;
