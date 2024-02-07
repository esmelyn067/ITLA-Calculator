import React from 'react';

const Numbers = ()=>{

 renderButtons = () => {
        const botones = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "C", "Clear"];
        return botones.map((boton) => (
          <Button key={boton} value={boton} onClick={this.handleClickButton} />
        ));
      };

        // return (
           
        //        <form action="#">
        //         <input type="text" value="0" id="screen"/>
        //         <button class="number">7</button>
        //         <button class="number">8</button>
        //         <button class="number">9</button>
        //         <button class="oper">+</button>
        //         <button class="number">4</button>
        //         <button class="number">5</button>
        //         <button class="number">6</button>
        //         <button class="oper">-</button>
        //         <button class="number">1</button>
        //         <button class="number">2</button>
        //         <button class="number">3</button>
        //         <button class="oper">*</button>
        //         <button class="btnC">C</button>
        //         <button class="number">0</button>
        //         <button class="oper equal">=</button>
        //         <button class="oper">/</button>            
        //         <button class="cls">Limpiar</button>
        //     </form>
        // )
    
}

export default Numbers;