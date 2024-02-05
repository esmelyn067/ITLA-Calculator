import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import "./App.css"; 
import Numbers from './components/Numbers.js';
import Screen from './components/Screen.js';
import NumButtons from './components/NumButtons.js';


function App() {

  return (
    <div className="container form-control-sm">
    <h1 className='text-center'>Calculadora con JS</h1>
    <Screen/>
    <NumButtons/>
    <Numbers/>
    </div>
    
  );
}

export default App;
