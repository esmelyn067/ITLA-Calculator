import React from 'react';
import Cbutton from './Cbutton.jsx';
import Bnequal from './Bnequal.jsx';
import Operations from './Operations.jsx';
import Screen from './Screen.jsx';
import BtnClear from './BtnClear.jsx';



const NumButtons =()=>{
   
    state = {
      operandoA:'',
      operandoB:'',
      operacion:'',
      resultado:''
    };

    handleClickButton = (valor) => {
      switch (valor) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          if (this.state.operacion === "") {
            this.setState({ operandoA: this.state.operandoA + valor });
          } else {
            this.setState({ operandoB: this.state.operandoB + valor });
          }
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          this.setState({ operacion: valor });
          break;
        case "=":
          const resultado = eval(this.state.operandoA + this.state.operacion + this.state.operandoB);
          this.setState({ resultado });
          break;
        case "C":
          this.setState({ operandoA: "", operandoB: "", operacion: "", resultado: "" });
          break;
        case "Clear":
          this.setState({ resultado: "" });
          break;
      }
    };
   
    return(
       <div className='container btnnumber mx-auto'>
    <Screen value={this.state.resultado}/>
       <div className='col-3'>
       <button className='number' onClick={this.handleClickButton} >7</button>
       <button className='number' onClick={this.handleClickButton} >4</button>
       <button className='number' onClick={this.handleClickButton} >1</button>
       <Cbutton onClick={this.handleClickButton}/>
       </div>
       <div className='col-3'>
       <button className='number' onClick={this.handleClickButton} >8</button>
       <button className='number' onClick={this.handleClickButton} >5</button>
       <button className='number' onClick={this.handleClickButton} >2</button>
       <button className='number' onClick={this.handleClickButton} >0</button>
       </div>
       <div className='col-3'>
       <button className='number' onClick={this.handleClickButton} >9</button>
       <button className='number' onClick={this.handleClickButton} >6</button>
       <button className='number' onClick={this.handleClickButton} >3</button>
       <Bnequal onClick={this.handleClickButton}/>
       </div>
       <Operations onClick={this.handleClickButton}/>
       <BtnClear onClick={this.handleClickButton}/>
       </div>
    )
}

export default NumButtons;
