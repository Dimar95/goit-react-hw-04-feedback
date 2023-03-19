import PropTypes from 'prop-types';

import { StatisticsStyled } from './Feedback.styled.jsx';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatisticsStyled>
        Good: <span>{good}</span>
      </StatisticsStyled>

      <StatisticsStyled>
        Neutral: <span>{neutral}</span>
      </StatisticsStyled>

      <StatisticsStyled>
        Bad: <span>{bad}</span>
      </StatisticsStyled>

      <StatisticsStyled>
        Total: <span>{total}</span>
      </StatisticsStyled>

      <StatisticsStyled>
        Positive Feedback: <span>{positivePercentage}%</span>
      </StatisticsStyled>
    </div>
  );
};

export default Statistics;

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
