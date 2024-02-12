import React, {useState} from 'react';
import Cbutton from './Cbutton.jsx';
import Bnequal from './Bnequal.jsx';
import Operations from './Operations.jsx';
import Screen from './Screen.jsx';
import BtnClear from './BtnClear.jsx';



const Calculadora = ()=>{

  
    const [operandoA, setOperandoA] = useState("");
    const [operandoB, setOperandoB] = useState("");
    const [operacion, setOperacion] = useState("");
    const [resultado, setResultado] = useState("");
    

//Click en los botones
    const handleClickButton = (valor) => {
        // Si no hay operación, actualiza el operando A
        if (!operacion) {
          setOperandoA(operandoA + valor);
        } else {
          setOperandoB(operandoB + valor);
        }
      };


 //Las Operaciones
    const handleOperation = (valor) => {
      setOperacion(valor);
    };


 //Clear Boton
const handleClearButton = () => {
  setResultado("");
};   

    //C Boton
    const handleCbtn = () => {
      setOperandoA("");
      setOperandoB("");
      setOperacion("");
      setResultado("");
    };

//Calcular resultado
const calcularResultado = () => {
  const resultado = eval(operandoA + operacion + operandoB);
  setResultado(resultado);
};
    
   


// Renderizar la calculadora
    return(
       <div className='container1 row align-items-start'>
        <h1>React Calculator</h1>
    <Screen valor={resultado}/> 
       <div className='col-3'>
       <button key='7' className='number' onClick={handleClickButton}>7</button>
       <button key='4' className='number' onClick={handleClickButton}>4</button>
       <button key='1' className='number' onClick={handleClickButton}>1</button>
       <Cbutton key='C' onClick={handleCbtn}/>
       </div>
       <div className='col-3'>
       <button key='8' className='number' onClick={handleClickButton}>8</button>
       <button key='5' className='number' onClick={handleClickButton}>5</button>
       <button key='2' className='number' onClick={handleClickButton}>2</button>
       <button key='0' className='number' onClick={handleClickButton}>0</button>
       </div>
       <div className='col-3'>
       <button key='9' className='number' onClick={handleClickButton}>9</button>
       <button key='6' className='number' onClick={handleClickButton}>6</button>
       <button key='3' className='number' onClick={handleClickButton}>3</button>
       <Bnequal key="=" onClick={calcularResultado}/>
       </div>
       <Operations key='operations' onClick={handleOperation} />
       <BtnClear key='Limpiar' onClick={handleClearButton}/>
       </div>
    )
}

export default Calculadora;
