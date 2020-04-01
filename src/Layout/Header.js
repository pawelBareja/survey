import React from "react";
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
    </>
  );
};

export default Header;
