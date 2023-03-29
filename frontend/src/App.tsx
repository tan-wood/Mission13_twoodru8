/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './App.css';

// class Welcome extends React.Component {
//   render() {
//     return <h1>This website gives some rando numbers</h1>;
//   }
// }

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed!</p>;
//   }
// }

// function Rando() {
//   return (
//     <div>
//       <h2>Random Number: {Math.random()}</h2>
//     </div>
//   );
// }

//these are siblings right now
function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}>Go!</button>
      <br />
      <label>{props.count}</label>
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  //this is the parent and so we can flow this info down to the children.
  //set count to 0 and now we can keep track of the count and set the count
  //This is a react hook
  const [count, setCount] = useState(0);
  //This is a pointer to a method. not a method itself!!
  //const incrementGo = () => setCount(count + 1);

  return (
    <div>
      <GoButton blahClick={() => setCount(count + 1)} />
      <br />
      <AmountOfGo num={count} />
    </div>
  );
}

export default App;
