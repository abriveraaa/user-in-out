import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './User/Input';
import Output from './User/Output';

const App = props => {
  const [ getParagraph, setParagraph ] = useState({
    paragraph: [
      { paragraph: "This is a first paragraph." },
      { paragraph: "This is a second paragraph." }
    ]
  }); 

  const switchName = () => {
    setParagraph( {
      paragraph: [
        { paragraph: "This is a 1st paragraph." },
        { paragraph: "This is a 2nd paragraph." }
      ]
    })
  }
  
  const paragraphChangedHandler = (event) => {
    setParagraph({
      paragraph: [
        { paragraph: "Hi! " + event.target.value },
        { paragraph: "This is a second paragraph." }
      ]
    });
  }

  const style = {
    fontSize: '20px',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '500',
  }

  return (
    <div className="App">
      <h1 style={style}>User</h1>
      <Input changed={paragraphChangedHandler}></Input>
      <div className="button" onClick={switchName}>Click Me!</div>
      <Output paragraph={getParagraph.paragraph[0].paragraph}></Output>
      <Output paragraph={getParagraph.paragraph[1].paragraph}></Output>
    </div>
  );
}

export default App;