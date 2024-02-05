import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import "./App.css"; 
import Numbers from './components/Numbers.js';
import NumButtons from './components/NumButtons.js';



function App() {

  return (
    <div className="form1 form-control-m">
    <NumButtons/>
    <Numbers/>  
    </div>
  );
}

export default App;
