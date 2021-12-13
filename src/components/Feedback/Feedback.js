import React from 'react';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div className="Feedback">
        <span className="title">Please leave feedback</span>

        <div className="controls">
          <button type="button" onClick={this.handleGood} className="btn">
            Good
          </button>
          <button type="button" onClick={this.handleNeutral} className="btn">
            Neutral
          </button>
          <button type="button" onClick={this.handleBad} className="btn">
            Bad
          </button>
          <span className="counter">{this.state.good}</span>
          <span className="counter">{this.state.neutral}</span>
          <span className="counter">{this.state.bad}</span>
        </div>
      </div>
    );
  }
}
export default Feedback;
