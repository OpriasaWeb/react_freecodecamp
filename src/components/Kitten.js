// Create a React Component
import React from 'react'
// The other way to define a React component is with the ES6 class syntax

// Children component
const CutieKitten = () => {
  return(
    <div>
      <p>I am the children of a React Component</p>
    </div>
  )
}

// Parent component
class Kitten extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Create a React Component - I am the parent</h1>
        <CutieKitten />
      </div>
    )
  }
}

export default Kitten