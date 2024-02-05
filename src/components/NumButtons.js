import React from 'react';
import Cbutton from './Cbutton';
import Bnequal from './Bnequal';
import Operations from './Operations';
import Screen from './Screen.js';
import BtnClear from './BtnClear.js';



const NumButtons =()=>{
    return(
       <div className=' btnnumber row mx-auto p3'>
        <h1 className='text-center'>Calculadora con JS</h1>
    <Screen/>
       <div className='col-2'>
       <button className='number'>7</button>
       <button className='number'>4</button>
       <button className='number'>1</button>
       <Cbutton/>
       </div>
       <div className='col-2'>
       <button className='number'>8</button>
       <button className='number'>5</button>
       <button className='number'>2</button>
       <button className='number'>0</button>
       </div>
       <div className='col-2'>
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
