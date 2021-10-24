import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Statistics from "./components/Statistics";
import { Section } from "./components/Section";
import s from "./App.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counter = (type) => {
    // const { type } = e.target;
    switch (type) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / countTotalFeedback();
    return Math.round(percentage);
  };

  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={counter}
        />
      </Section>

      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// import { Component } from "react";
// import FeedbackOptions from "./components/FeedbackOptions";
// import Notification from "./components/Notification";
// import Statistics from "./components/Statistics";
// import { Section } from "./components/Section";
// import s from "./App.module.css";

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   counter = (type) => {
//     this.setState((prevState) => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const result = this.countTotalFeedback();
//     const percentage = (this.state.good * 100) / result;
//     return Math.round(percentage);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { counter } = this;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div className={s.wrapper}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={["good", "neutral", "bad"]}
//             onLeaveFeedback={counter}
//           />
//         </Section>

//         <Section title="Statistics">
//           {good === 0 && neutral === 0 && bad === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
