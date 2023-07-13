import { useState } from 'react';
import './App.css';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';

function App() {
  const[funState,setFunState]=useState(true);
  const[classState,setClassState]=useState(true);
  // console.log(fState);
  return (
    <>
    <h1 className='heading'>Styling using Functional and Class Component</h1>

    <button onClick={()=>setFunState(!funState)} className='button'> To see styling in Functional Component</button>
    <button onClick={()=>setClassState(!classState)} className='button'> To see styling in Class Component</button>

    {funState ? <FuncComp/>: " "}
    {classState ? <ClassComp/>:" "}

    {/* <ClassComp/>cls

    
    <FuncComp/> */}
    </>
  );
}

export default App;
