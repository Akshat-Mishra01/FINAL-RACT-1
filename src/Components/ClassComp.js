import React, { Component } from 'react'

class ClassComp extends Component {
  render() {
    return (
      <div className='class'>
        <h1>This is Created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'blue'}}>This is done usinbgb inline CSS</p>
      </div>
    )
  }
}

export default ClassComp