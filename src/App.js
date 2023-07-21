import { useState } from 'react';
import Header from './Components/Header';
import Feedbackitem from './Components/Feedbackitem';
import FeedbackData from './Data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <Feedbackitem body='This is an example of text "FeedbackItem 1' />
        <Feedbackitem body='This is an example of text "FeedbackItem 2' />
        <Feedbackitem body='This is an example of text "FeedbackItem 3' />
      </div>
    </>
  );
}

export default App;
