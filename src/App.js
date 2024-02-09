import React from 'react';
import "./App.css"; 
// import Numbers from './components/Numbers.js';
import NumButtons from './components/NumButtons.js';
// import NumButtons2 from './components/Numbuttons2';


function App() {



  return (
    <div className="form1 form-control-m">
    <NumButtons />
    {/* <NumButtons2 onClick={this.handleClickButton}/> */}
    {/* <Numbers/>  */}
    </div>
  );
}

export default App;
