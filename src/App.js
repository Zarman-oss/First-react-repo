import { useState } from 'react';
import Header from './Components/Header';
import Feedbackitem from './Components/Feedbackitem';

function App() {
  const [count, setCount] = useState(0);
  console.log(useState(20));

  return (
    <>
      <Header />
      <div className="container">
        <Feedbackitem body='This is an example of text "FeedbackItem 1' />
        <Feedbackitem body='This is an example of text "FeedbackItem 2' />
        <Feedbackitem body='This is an example of text "FeedbackItem 3' />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click to add item
        </button>
        <div>number of count: {count}</div>
      </div>
    </>
  );
}

export default App;

// [
//   {
//     id: 1,
//     rating: 10,
//     text: 'lorem2lorwemnmkj dmikmkmkasdm mdkmkmasdiiuuuuyyuyyenmm',
//   },
//   {
//     id: 1,
//     rating: 10,
//     text: 'lorem2lorwemnmkj dmikmkmkasdm mdkmkmasdiiuuuuyyuyyenmm',
//   },
//   {
//     id: 1,
//     rating: 10,
//     text: 'lorem2lorwemnmkj dmikmkmkasdm mdkmkmasdiiuuuuyyuyyenmm',
//   },
// ]
