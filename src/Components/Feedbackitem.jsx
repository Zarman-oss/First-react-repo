import React from 'react';
import { useState } from 'react';

function Feedbackitem({ body }) {
  const [rating, setRating] = useState(8);
  const [text, setText] = useState('This is an example of text "FeedbackItem"');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        {text}
        {body}
      </div>
    </div>
  );
}

export default Feedbackitem;
