import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) return <p>No feedback yet!</p>;

  return (
    <div className='feedback-list'>
      {feedback.map((e) => {
        return <FeedbackItem key={e.id} item={e} />;
      })}
    </div>
  );
}

export default FeedbackList;
