import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Main from "./Layout/Main";
import Header from "./Layout/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// css
// import "typeface-roboto";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81d4fa"
    }
  },
  typography: {
    h1: {
      fontFamily: '"Abril Fatface"',
      fontSize: "5rem"
    },
    h3: {
      fontFamily: '"Abril Fatface"'
    },
    button: {
      margin: "10px",
      color: "#fff"
    },
    fontFamily: ["Lato", '"Abril Fatface"'].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Lato"]
      }
    }
  }
});

function App() {
  console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CssBaseline />
          <Header />
          <Main />
        </Box>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
