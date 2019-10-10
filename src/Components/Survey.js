import React, { Component } from 'react';
import CompanyData from './CompanyData';
import Question2 from './Question2';
import Question3 from './Question3';
import Summary from './Summary';

class Survey extends Component {

    state = {
        level: 1,
        company: '',
        email: '',
        phone: '',
        age: '',
        color: '',

    }


    prevLevel = () => {
        this.setState({
            level: this.state.level - 1,
        })
    }


    nextLevel = () => {
        this.setState({
            level: this.state.level + 1,
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value,
        })
    }


    render() {

        const { level, company, email, phone, age, color } = this.state;

        switch (level) {
            case 0:
                return (
                    <>
                        <CompanyData level={level} company={company} email={email} phone={phone} next={this.nextLevel} prev={this.prevLevel} handleChange={this.handleChange} />
                    </>
                );

            case 1:
                return (
                    <>
                        <Question2 level={level} next={this.nextLevel} prev={this.prevLevel} age={age} handleChange={this.handleChange} />
                    </>
                );

            case 2:
                return (
                    <>
                        <Question3 level={level} next={this.nextLevel} prev={this.prevLevel} color={color} handleChange={this.handleChange} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Summary prev={this.prevLevel} level={level} company={company} email={email} phone={phone} age={age} color={color} />
                    </>
                );
        }
    }
}

export default Survey;