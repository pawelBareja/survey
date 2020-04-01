import React from "react";
import ButtonNav from "../../Layout/ButtonNav";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Question4 = ({ next, prev, handleChange, question4 }) => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Box m={2}>
            <FormLabel component="legend">GŁÓWNY QUIZ pytanie 4..</FormLabel>
          </Box>
          <RadioGroup value={question4} onChange={handleChange("question4")}>
            <FormControlLabel value="1" control={<Radio />} label="a" />
            <FormControlLabel value="2" control={<Radio />} label="b" />
            <FormControlLabel value="3" control={<Radio />} label="c" />
          </RadioGroup>
        </Grid>

        <Grid item md={12}>
          <Box m={12} align="center">
            <ButtonNav
              color={"primary"}
              buttonText={"następne pytanie"}
              handleClick={next}
              disabled={question4 === ""}
            />
            <ButtonNav
              color={"secondary"}
              buttonText={"poprzednie pytanie"}
              handleClick={prev}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Question4;
