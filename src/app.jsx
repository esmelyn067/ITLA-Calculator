
import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import Numbers from './components/Numbers.jsx';
import NumButtons from './components/NumButtons.jsx';
import './app.css'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="container form1 form-control-m">
    <h1 className='text-center'>Calculadora con JS</h1>
    <NumButtons/>
    <Numbers/>  
    </div>
    </>
  )
}
