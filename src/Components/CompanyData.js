import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/';

const styleButton = {
    margin: '10px',
}

const CompanyData = (props) => {

    const { level, company, email, phone, next, handleChange } = props



    return (
        <>
            <TextField
                label="Company"
                value={company}
                onChange={handleChange('company')}
            /><br />
            <TextField
                label="email"
                value={email}
                onChange={handleChange('email')}
            /><br />
            <TextField
                label="Phone number"
                value={phone}
                onChange={handleChange('phone')}
            /><br />
            <Button variant="contained" color="primary" onClick={next} style={styleButton} > Next Question </Button>
        </>
    );
};

export default CompanyData;