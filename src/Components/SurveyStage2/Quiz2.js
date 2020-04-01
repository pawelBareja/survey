import React, { Component } from "react";
import WelcomePage from "./WelcomePage";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";

import Summary from "./Summary";

// #03a9f4 ciemny niebieski
// #8bd3f4 jasny niebieski

class Quiz2 extends Component {
  state = {
    level: 0,
    paymentDone: false,
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: ""
  };

  handlePayment = e => {
    this.setState({
      paymentDone: true
    });
  };

  prevLevel = () => {
    this.setState({
      level: this.state.level - 1
    });
  };

  nextLevel = () => {
    this.setState({
      level: this.state.level + 1
    });
  };

  handleChange = input => e => {
    console.log(e.target);
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      level,
      paymentDone,
      question1,
      question2,
      question3,
      question4,
      question5
    } = this.state;

    switch (level) {
      case 0:
        return (
          <>
            <WelcomePage
              level={level}
              paymentDone={paymentDone}
              handlePayment={this.handlePayment}
              next={this.nextLevel}
            />
          </>
        );

      case 1:
        return (
          <>
            <Question1
              level={level}
              question1={question1}
              next={this.nextLevel}
              prev={this.prevLevel}
              handleChange={this.handleChange}
            />
          </>
        );

      case 2:
        return (
          <>
            <Question2
              level={level}
              question2={question2}
              next={this.nextLevel}
              prev={this.prevLevel}
              handleChange={this.handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <Question3
              level={level}
              question3={question3}
              next={this.nextLevel}
              prev={this.prevLevel}
              handleChange={this.handleChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <Question4
              level={level}
              question4={question4}
              next={this.nextLevel}
              prev={this.prevLevel}
              handleChange={this.handleChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <Question5
              level={level}
              question5={question5}
              next={this.nextLevel}
              prev={this.prevLevel}
              handleChange={this.handleChange}
            />
          </>
        );
      case 6:
        return (
          <>
            <Summary
              prev={this.prevLevel}
              level={level}
              question1={question1}
              question2={question2}
              question3={question3}
              question4={question4}
              question5={question5}
            />
          </>
        );
    }
  }
}

export default Quiz2;
