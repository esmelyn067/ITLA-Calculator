import React from 'react';
import Cbutton from './Cbutton';
import Bnequal from './Bnequal';
import Operations from './Operations';
import Screen from './Screen.js';
import BtnClear from './BtnClear.js';



const NumButtons = ()=>{
    
    return(
       <div className='container1 row align-items-start'>
        <h1>React Calculator</h1>
    <Screen/> 
       <div className='col-3'>
       <button className='number'>7</button>
       <button className='number'>4</button>
       <button className='number'>1</button>
       <Cbutton/>
       </div>
       <div className='col-3'>
       <button className='number'>8</button>
       <button className='number'>5</button>
       <button className='number'>2</button>
       <button className='number'>0</button>
       </div>
       <div className='col-3'>
       <button className='number'>9</button>
       <button className='number'>6</button>
       <button className='number'>3</button>
       <Bnequal/>
       </div>
       <Operations/>
       <BtnClear/>
       </div>
    )
}

export default NumButtons;
