import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import './App.css';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get('/api/hi')
      .then((res) => {
        console.log(res);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload!!
        </p>
        <p>{state?.hello}</p>
        <Button colorScheme="red">Button</Button>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
