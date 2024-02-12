import React from 'react';
import Screen from './Screen';



class NumButtons2 extends React.Component {
  
    state = {
        operandoA: "",
        operandoB: "",
        operacion: "",
        resultado: "",
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
            this.setState({ operandoA: "", operandoB: "", operacion: "", resultado: "0" });
            break;
          case "Limpiar":
            this.setState({ resultado: "" });
            break;
        }
      };

    renderButtons = () => {
      const botones = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "C", "Clear"];
      return botones.map((boton) => (
        <button key={boton} value={boton} onClick={this.handleClickButton} />
      ));
    };
  
    render() {
      return (
        <div>
          <Screen resultado={this.state.resultado}/>
        </div>
      );
    }
  }
  
  export default NumButtons2;