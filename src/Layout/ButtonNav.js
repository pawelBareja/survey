import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const ButtonNav = ({ color, buttonText, handleClick, disabled }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        color={color}
        onClick={handleClick}
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default ButtonNav;
