import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};
Card.prototype = {
  children: PropTypes.node.isRequired,
};

FeedbackItem.PropTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
