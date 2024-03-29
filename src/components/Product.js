// Class component
import React from "react";
import PropTypes from 'prop-types'
import Quantity from "./Products/Quantity";

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>Access props using this.props</h1>
        <p>User account: <Welcome name={'Joel Embidd'} /> </p>
        <h1>Default props</h1>
        <p>Default quantity of items in cart: <Quantity /></p>
        <h1>Override default props</h1>
        <p>Override default quantity props: <Quantity quantity={100} /></p>
      </div>
    )
  }
}

class Welcome extends React.Component{
  render(){
    return(
      <div>
        <p>Hello, <strong>{this.props.name}</strong>!</p>
      </div>
    )
  }
}

// Default propTypes would be string
Welcome.propType = { name: PropTypes.string.isRequired }

export default Product