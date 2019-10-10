import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styleButton = {
    margin: '10px'
}

const Question2 = (props) => {

    const { next, prev, handleChange, age } = props

    return (
        <>
            <TextField
                label="How old are you?"
                value={age}
                onChange={handleChange('age')}
            /><br />

            <Button variant="contained" color="primary" onClick={next} style={styleButton}> next question </Button>
            <Button variant="contained" color="secondary" onClick={prev} style={styleButton}> previous question </Button>
        </>
    );
};

export default Question2;