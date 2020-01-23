import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/Homepage";

class App extends React.Component {
  render(){
    return(
      // wrap in a division
      <HomePage firstName ="Samantha"/>
    );
  };
}

export default App;
