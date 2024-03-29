import React from 'react'

// Use React to Render Nested Components
const TypesOfFruit = () => {
  return(
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Banana</li>
        <li>Mango</li>
        <li>Apple</li>
        <li>Avocado</li>
      </ul>
    </div>
  )
}

const Fruits = () => {
  return(
    <div>
      <TypesOfFruit />
    </div>
  )
}

class TypesOfFood extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return(
      <div>
        <Fruits />
      </div>
    )
  }
}

// Export the TypesOfFood
export default TypesOfFood