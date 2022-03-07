import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  const avg = feedback
    .reduce((a, c, _i, { length }) => {
      return a + c.rating / length;
    }, 0)
    .toFixed(1)
    .replace(/[,.]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
