import { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const name = e.currentTarget.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const quantity = good + neutral + bad;
    return quantity;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = total ? (this.state.good / total) * 100 : 0;
    return Number(percentage).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPercentage = this.countPositiveFeedbackPercentage();
    const addFeedback = this.addFeedback;
    return (
      <>
        <Section title="Please leave your feedback">
          <Buttons addFeedback={addFeedback} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={posPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
