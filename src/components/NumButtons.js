import React from 'react';


const NumButtons =()=>{
    return(
       <div className='row m-10 p-10'>
       <div className='col-2'>
       <button className='number'>7</button>
       <button className='number'>8</button>
       <button className='number'>9</button>
       </div>
       <div className='col-2'>
       <button className='number'>4</button>
       <button className='number'>5</button>
       <button className='number'>6</button>
       </div>
       <div className='col-2'>
       <button className='number'>1</button>
       <button className='number'>2</button>
       <button className='number'>3</button>
       <button className='number'>0</button>
       </div>
       </div>
    )
}

export default NumButtons;
