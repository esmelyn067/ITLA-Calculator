
import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import Numbers from './components/Numbers.jsx';
import NumButtons from './components/NumButtons.jsx';
import './app.css'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="form1 form-control-m">
    <NumButtons/>
    <Numbers/>  
    </div>
    </>
  )
}
