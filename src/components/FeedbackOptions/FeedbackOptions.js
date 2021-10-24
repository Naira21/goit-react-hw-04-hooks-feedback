import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={s.optionBtn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.array,
};
