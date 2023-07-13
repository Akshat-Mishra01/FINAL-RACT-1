import React from 'react'
import './Comp.css'

function FuncComp() {
  return (
    <div className='func'>
        <h1>This is Created using function Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'blue'}}>This is done using inline CSS</p>
    </div>
  )
}

export default FuncComp