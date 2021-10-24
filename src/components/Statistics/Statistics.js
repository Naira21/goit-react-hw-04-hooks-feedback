import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.statisticsList}>
      <li name="goodMark" className={s.goodMark}>
        Good:{good}
      </li>
      <li name="neutralMark" className={s.neutralMark}>
        Neutral:{neutral}
      </li>
      <li name="badMark" className={s.badMark}>
        Bad:{bad}
      </li>
      <li className={s.allMarks}>Total:{total}</li>
      <li className={s.positiveMarks}>
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
