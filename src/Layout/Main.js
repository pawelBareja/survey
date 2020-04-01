import React, { Component } from "react";
import SubHeaderQuiz1 from "./Subheader/SubHeaderQuiz1";
import SubHeaderQuiz2 from "./Subheader/SubHeaderQuiz2";
import Quiz1 from "../Components/SurveyStage1/Quiz1";
import Quiz2 from "../Components/SurveyStage2/Quiz2";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Main extends Component {
  handleQuizLevel = () => {
    alert("zmiana levelu");
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Quiz1 />
            </Route>
            <Route path="/quiz-glowny" exact>
              <Quiz2 />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
