import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styleButton = {
    margin: '10px'
}

const Summary = (props) => {

    const { prev, company, phone, email, color, age } = props

    return (
        <>
            <h2>Summary of your respones:</h2>
            <p>Your company: {company}</p>
            <p>Your email: {email}</p>
            <p>Your phone: {phone}</p>
            <p>Your age: {age}</p>
            <p>Your color: {color}</p>
            <Button variant="contained" color="secondary" style={styleButton} onClick={prev}> Go back </Button>
            <Button variant="contained" color="primary" style={styleButton}> Submit </Button>
        </>
    );
};

export default Summary;