import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styleButton = {
    margin: '10px'
}

const Question3 = (props) => {

    const { next, prev, color, handleChange } = props

    return (
        <>
            <TextField
                label="What is your favorite color?"
                value={color}
                onChange={handleChange('color')}
            /><br />

            <Button variant="contained" color="primary" onClick={next} style={styleButton}> next question </Button>
            <Button variant="contained" color="secondary" onClick={prev} style={styleButton}> previous question </Button>
        </>
    );
};

export default Question3;